import React from 'react'
import cn from 'classnames'
import styles from './TabFilter.module.scss'
import data from './data.json'
import { PriceFilter } from './PriceFilter/PriceFilter'
import { OptionsFilter } from './OptionsFilter/OptionsFilter'
import { Button } from '../../Button/Button'
import { Icons } from '../../Icons/Icons'
import { Link } from 'react-router-dom'
import { FilterSelect } from '../../FilterSelect/FilterSelect'
import { useDispatch, useSelector } from 'react-redux'
import filteredCards from '../../../filteredCards'
import { setCards } from '../../../redux/slices/filterSlice'

export const TabFilter = () => {
  
	// const {
	// 	rentalCards,
	// 	filterByRooms,
	// 	filterByCities,
	// 	filterByPriceFrom,
	// 	filterByPriceTo,
	// } = useSelector((store) => store.filter)

	const dispatch = useDispatch()

	const onSubmitFilters = (e) => {
		e.preventDefault()
	}

	return (
		<div className={styles.tabsFilter}>
			<form className={styles.form}>
				<FilterSelect
					title={'Город'}
					name='Город'
					list={data?.FILTER_CITIES?.cities}
				/>
				<FilterSelect
					name='Комнаты'
					title={'Комнаты'}
					list={data?.FILTER_ROOMS?.rooms}
				/>

				<PriceFilter />
				<OptionsFilter />

				<div className={styles.buttons}>
					<Button to='/' tag='a' name='openMap'>
						<Icons id={'location'} />
						<span>На карте</span>
					</Button>
					<button
						onClick={(e) => onSubmitFilters(e)}
						className={styles.lightYellow}
					>
						<span>Показать</span>
						<Icons id={'arrow'} size={{ w: 12, h: 7 }} fill={'#242424'} />
					</button>
				</div>
			</form>
		</div>
	)
}
