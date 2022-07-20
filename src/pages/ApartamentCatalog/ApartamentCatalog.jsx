import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import cn from 'classnames'

import styles from './ApartamentCatalog.module.scss'
import { Icons } from '../../components/Icons/Icons'
import { LocationCard } from '../../components/LocationCard/LocationCard'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'

import { OptionsFilter } from '../../components/Tabs/TabFilter/OptionsFilter/OptionsFilter'
import { PriceFilter } from '../../components/Tabs/TabFilter/PriceFilter/PriceFilter'
import { FilterSelect } from '../../components/FilterSelect/FilterSelect'
import data from '../../components/Tabs/TabFilter/data.json'
import { Layout } from '../../Layout/Layout'
import { filteredApartmentCatalog } from '../../filteredCards'
import { Button } from '../../components/Button/Button'
import { setFiltersClear, setLoadings } from '../../redux/slices/filterSlice'
import { setCurrentPage } from '../../redux/slices/catalogSlice'
import { Pagination } from '../../components/Pagination/Pagination'
import Skeleton from '../../components/LocationCard/Skeleton'

const layoutGroup = [
	{ value: 'list', name: 'Список' },
	{ value: 'table', name: 'Плитка' },
]

export const ApartamentCatalog = () => {
	const location = useLocation()
	const useParam = location.state
	const { currentPage } = useSelector((store) => store.catalog)
	const {
		rentalCards,
		filterByRooms,
		filterByCities,
		filterByPriceFrom,
		filterByPriceTo,
		breadcrumbs,
		sortCards,
		loading,
	} = useSelector((store) => store.filter)
	const dispatch = useDispatch()

	const [titleCatalog, setTitleCatalog] = React.useState()
	const [items, setItems] = React.useState([])
	const [filterCards, setFilterCards] = React.useState([])
	const [layoutItem, setLayoutItem] = React.useState('table')
	const [itemsPerPage] = React.useState(6)

	React.useEffect(() => {
		setTitleCatalog(useParam?.paramName ? useParam.paramName : 'Квартиры')
		const order = sortCards?.filterProperty === 'asc' ? 'asc' : 'desc'
		const param = useParam?.paramName ? useParam.paramName : 'rooms'

		const fetchData = async () => {
			const itemsRes = await axios.get(
				`https://62b821b603c36cb9b7c248ae.mockapi.io/${param}?sortBy=price&order=${order}`
			)
			const data = await itemsRes.data
			setItems(data)
			const filtersCard = filteredApartmentCatalog(
				data,
				filterByRooms,
				filterByCities,
				filterByPriceFrom,
				filterByPriceTo
			)
			setFilterCards(filtersCard)
			dispatch(setLoadings(false))
		}
		window.scroll(0, 0)
		fetchData()
	}, [sortCards, useParam, filterByCities, dispatch])

	// получаем индекс первой страницы, последней
	const lastItemIndex = currentPage * itemsPerPage
	const firstItemIndex = lastItemIndex - itemsPerPage
	const currentItem = filterCards.slice(firstItemIndex, lastItemIndex)

	const handleClickByShow = () => {
		// функс фильтрует карточки
		const filtersCard = filteredApartmentCatalog(
			items,
			filterByRooms,
			filterByCities,
			filterByPriceFrom,
			filterByPriceTo
		)
		setFilterCards(filtersCard)
	}
	const paginate = (pageNumber) => {
		dispatch(setCurrentPage(pageNumber))
	}

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
		<Layout>
			<div className={styles.apartmentCatalog}>
				<div className={styles.header}>
					<div className='container'>
						<Breadcrumbs
							pagaName={`${titleCatalog} ${
								filterByCities?.name ? ` в ${filterByCities?.name}е` : ''
							}`}
							breadcrumsb={breadcrumbs}
						/>
						<h1>
							Аренда {titleCatalog} на сутки
							{filterByCities?.name ? ` в ${filterByCities?.name}е` : ''}
						</h1>
					</div>
				</div>
				<div className={styles.filteres}>
					<div className={cn('container', styles.filteresRow)}>
						<FilterSelect
							ClassName='rentalApartment'
							title='Комнаты'
							name={filterByRooms ? filterByRooms.name : 'Комнаты'}
							list={data?.FILTER_ROOMS?.rooms}
						/>

						<PriceFilter
							ClassName='rentalPrice'
							filterByPriceFrom={filterByPriceFrom}
							filterByPriceTo={filterByPriceTo}
						/>
						<OptionsFilter />
						<div className={styles.buttons}>
							<Button onClick={() => dispatch(setFiltersClear())} name='beige'>
								<span>Очистить</span>
							</Button>
							<Button onClick={() => handleClickByShow()} name='show'>
								<span>Показать объекты</span>
								<Icons id={'arrow'} size={{ w: 12, h: 7 }} fill={'#FFFFFF'} />
							</Button>
						</div>
					</div>
				</div>
				<div className={styles.sortWrapper}>
					<div className='container'>
						<div className={styles.row}>
							<FilterSelect
								name='По умолчанию'
								ClassName='sortPrice'
								list={[
									{ name: 'По возрастанию цены', filterProperty: 'asc' },
									{ name: 'По убыванию цены', filterProperty: 'desc' },
								]}
							>
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
							<Button to='/*' tag='a' name='openMap'>
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
							{loading
								? [...new Array(itemsPerPage)].map((_, i) => (
										<Skeleton key={i} />
								  ))
								: currentItem.map((card, i) => (
										<LocationCard
											cardList={layoutItem === 'list'}
											key={i}
											data={card}
											fav
										/>
								  ))}
						</div>
						{filterCards.length > 1 && (
							<Pagination
								itemsPerPage={itemsPerPage}
								totalItems={filterCards.length}
								paginate={paginate}
							/>
						)}
					</div>
				</div>
			</div>
		</Layout>
	)
}
