import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import cn from 'classnames'

import styles from './ApartamentCatalog.module.scss'
import { Icons } from '../../components/Icons/Icons'
import { LocationCard } from '../../components/LocationCard/LocationCard'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'

import { FilterSelect } from '../../components/FilterSelect/FilterSelect'
import { filteredApartmentCatalog } from '../../utils/filteredCards'
import { Button } from '../../components/Button/Button'
import { selectFilter } from '../../redux/slices/filterSlice'
import {
	fetchCatalogCards,
	setCurrentPage,
} from '../../redux/slices/catalogSlice'
import { Pagination } from '../../components/Pagination/Pagination'
import { usePagination } from '../../hooks/usePagination'
import { skeleton } from '../../utils/skeleton'
import { Filteres } from './Filteres/Filteres'

const layoutGroup = [
	{ value: 'list', name: 'Список' },
	{ value: 'table', name: 'Плитка' },
]

const sort = [
	{ name: 'По возрастанию цены', filterProperty: 'asc' },
	{ name: 'По убыванию цены', filterProperty: 'desc' },
]

const breadcrumsb = [{ page: 'Home', path: '/' }]

export const ApartamentCatalog = () => {
	const dispatch = useDispatch()
	const location = useLocation()
	const useParam = location.state

	const { currentPage, status, itemsCard } = useSelector(
		(store) => store.catalog
	)
	const { sortCards, filtered } = useSelector(selectFilter)

	const [titleCatalog, setTitleCatalog] = React.useState()
	const [filterCards, setFilterCards] = React.useState([])
	const [layoutItem, setLayoutItem] = React.useState('table')
	const [itemsPerPage] = React.useState(6)

	React.useEffect(() => {
		setTitleCatalog(useParam?.paramName ? useParam.paramName : 'Квартиры')
		const filtersCard = filteredApartmentCatalog(
			itemsCard,
			filtered.room,
			filtered.citi,
			filtered.priceFrom,
			filtered.priceTo,
			filtered.metro,
			filtered.region,
			filtered.places
		)
		setFilterCards(filtersCard)
	}, [itemsCard, useParam])

	React.useEffect(() => {
		const order = sortCards?.filterProperty === 'asc' ? 'asc' : 'desc'
		const param = useParam?.paramName ? useParam.paramName : 'rooms'
		dispatch(fetchCatalogCards({ param, order, filtered }))

		window.scroll(0, 0)
	}, [sortCards, filtered.citi, useParam, dispatch])

	const paginate = (pageNumber) => {
		dispatch(setCurrentPage(pageNumber))
	}

	const { currentItem, pageNumbers } = usePagination(
		currentPage,
		filterCards,
		itemsPerPage
	)

	switch (titleCatalog) {
		case 'rooms':
			setTitleCatalog('Квартир')
			return
		case 'cottages':
			setTitleCatalog('Коттеджи и усадьбы')
			return
		case 'cars':
			setTitleCatalog('Авто')
			return
		case 'baths':
			setTitleCatalog('Бани и сауны')
			return
		default:
			break
	}

	return (
		<div className={styles.apartmentCatalog}>
			<div className={styles.header}>
				<div className='container'>
					<Breadcrumbs breadcrumsb={breadcrumsb} pagaName={titleCatalog} />
					<h1>
						Аренда {titleCatalog} на сутки
						{filtered.citi ? ` в ${filtered.citi?.name}е` : ''}
					</h1>
				</div>
			</div>
			<Filteres setFilterCards={setFilterCards} />
			<div className={styles.sortWrapper}>
				<div className='container'>
					<div className={styles.row}>
						<FilterSelect name='По умолчанию' ClassName='sortPrice' list={sort}>
							<Icons id='sortIcon' ClassName={styles.sortIcon} />
						</FilterSelect>
						<div className={styles.layoutGroupRoot}>
							{layoutGroup.map((item, i) => (
								<button
									key={i}
									onClick={() => setLayoutItem(item.value)}
									className={cn(styles.itemBtn, {
										[styles.active]: layoutItem === item.value,
									})}
								>
									<Icons
										id={item.value}
										fill={layoutItem === item.value && '#664EF9'}
									/>{' '}
									{item.name}
								</button>
							))}
						</div>
						<Button to='*' tag='a' name='openMap'>
							<Icons id='location' fill='#664ef9' />
							<span>Показать на карте</span>
						</Button>
					</div>
				</div>
			</div>

			<div className={styles.wrapperContent}>
				<div className='container'>
					<h2 className={styles.title}>
						Найдено {filterCards.length} результата
					</h2>
					<div
						className={cn(styles.boxCards, {
							[styles.cardslist]: layoutItem === 'list',
						})}
					>
						{status === 'loading'
							? skeleton(itemsPerPage)
							: currentItem.map((card, i) => (
									<LocationCard
										cardList={layoutItem === 'list'}
										key={i}
										data={card}
										catalogCards
									/>
							  ))}
					</div>
					{filterCards.length > 1 && (
						<Pagination pageNumbers={pageNumbers} paginate={paginate} />
					)}
				</div>
			</div>
			<section className={styles.maps}>
				<div className='container'>
					<div className={styles.content}>
						<h3 className={styles.title}>
							Показать найденные квартиры на карте
						</h3>
						<p className={styles.text}>
							Ищите новостройки рядом с работой, парком или родственниками
						</p>
						<Button tag='a' name='openMap'>
							<Icons id='location' fill='#FEC81B' /> <span>Открыть карту</span>
						</Button>
					</div>
				</div>
			</section>
		</div>
	)
}
