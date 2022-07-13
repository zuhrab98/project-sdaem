import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import cn from 'classnames'
import qs from 'qs'

import styles from './ApartmentCatalog.module.scss'
import { Icons } from '../Icons/Icons'
import { LocationCard } from '../LocationCard/LocationCard'
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'

import { OptionsFilter } from '../Tabs/TabFilter/OptionsFilter/OptionsFilter'
import { PriceFilter } from '../Tabs/TabFilter/PriceFilter/PriceFilter'
import { FilterSelect } from '../FilterSelect/FilterSelect'
import data from '../../components/Tabs/TabFilter/data.json'
import { Layout } from '../../Layout/Layout'
import { filteredApartmentCatalog } from '../../filteredCards'
import { Button } from '../Button/Button'
import {
	setFilterByCities,
	setFilterByPriceFrom,
	setFilterByPriceTo,
	setFilterByRooms,
} from '../../redux/slices/filterSlice'

const layoutGroups = [
	{ value: 'list', name: 'Список' },
	{ value: 'table', name: 'Плитка' },
]

export const ApartmentCatalog = () => {
	const [items, setItems] = React.useState([])
	const [layoutItem, setLayoutItem] = React.useState('table')
	const dispatch = useDispatch()

	const {
		rentalCards,
		filterByRooms,
		filterByCities,
		filterByPriceFrom,
		filterByPriceTo,
		breadcrumbs,
	} = useSelector((store) => store.filter)

	// Не знаю правильно ли я получаю данные из url, но так не работало
	React.useEffect(() => {
		// парсим наш url и делаем из него объект
		if (window.location.search) {
			const { params } = qs.parse(window.location.search.substring(1))
			console.log(params)
		}
	}, [dispatch])

	React.useEffect(() => {
		// функс фильтрует карточки
		const filtersCard = filteredApartmentCatalog(
			rentalCards,
			filterByRooms,
			filterByCities,
			filterByPriceFrom,
			filterByPriceTo
		)
		setItems(filtersCard)
	}, [])

	const handleClickShow = () => {
		console.log('click')
		// функс фильтрует карточки
		const filtersCard = filteredApartmentCatalog(
			rentalCards,
			filterByRooms,
			filterByCities,
			filterByPriceFrom,
			filterByPriceTo
		)
		setItems(filtersCard)
	}

	const handlerClickListButton = (value) => {
		setLayoutItem(value)
	}

	const handleClickСlear = () => {
		dispatch(setFilterByCities(null))
		dispatch(setFilterByRooms(null))
		dispatch(setFilterByPriceFrom({ price: '', value: 'от' }))
		dispatch(setFilterByPriceTo({ price: '', value: 'до' }))
	}

	return (
		<Layout>
			<div className={styles.apartmentCatalog}>
				<div className={styles.header}>
					<div className='container'>
						<Breadcrumbs
							pagaName='Квартиры в Минске'
							breadcrumsb={breadcrumbs}
						/>
						<h1>Аренда квартир на сутки в {filterByCities?.name}</h1>
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
							<Button onClick={() => handleClickСlear()} name='beige'>
								<span>Очистить</span>
							</Button>
							<Button onClick={() => handleClickShow()} name='show'>
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
									{ name: 'По возрастанию цены' },
									{ name: 'По убыванию цуны' },
								]}
							>
								<Icons id='sortIcon' ClassName={styles.sortIcon} />
							</FilterSelect>
							<div className={styles.checkboxGroupRoot}>
								{layoutGroups.map((item, i) => (
									<span
										key={i}
										onClick={() => handlerClickListButton(item.value)}
										className={cn(styles.item, {
											[styles.active]: layoutItem === item.value,
										})}
									>
										<Icons
											id={item.value}
											fill={layoutItem === item.value && '#664EF9'}
										/>{' '}
										{item.name}
									</span>
								))}
							</div>
							<Button to='/' tag='a' name='openMap'>
								<Icons id='location' fill='#664ef9' />
								<span>Показать на карте</span>
							</Button>
						</div>
					</div>
				</div>

				<div className={styles.wrapperContent}>
					<div className='container'>
						<div
							className={cn(styles.boxCards, {
								[styles.list]: layoutItem === 'list',
							})}
						>
							{items &&
								items.map((card) => (
									<LocationCard
										ClassName={layoutItem === 'list' && 'catalogCard'}
										cardList={layoutItem === 'list'}
										key={card.id}
										data={card}
										fav={true}
									/>
								))}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
