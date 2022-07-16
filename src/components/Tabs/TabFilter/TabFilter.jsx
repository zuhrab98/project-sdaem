import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import data from './data.json'
import { PriceFilter } from './PriceFilter/PriceFilter'
import { OptionsFilter } from './OptionsFilter/OptionsFilter'
import { Button } from '../../Button/Button'
import { Icons } from '../../Icons/Icons'
import { FilterSelect } from '../../FilterSelect/FilterSelect'

import styles from './TabFilter.module.scss'
import { StringParam, useQueryParam } from 'use-query-params'

export const TabFilter = () => {
	const { filterByRooms, filterByCities } = useSelector((store) => store.filter)

	return (
		<div className={styles.tabsFilter}>
			<div className={styles.filteres}>
				<FilterSelect
					title='Город'
					name={filterByCities ? filterByCities.name : 'Город'}
					list={data?.FILTER_CITIES?.cities}
				/>
				<FilterSelect
					title='Комнаты'
					name={filterByRooms ? filterByRooms.name : 'Комнаты'}
					list={data?.FILTER_ROOMS?.rooms}
				/>

				<PriceFilter />
				<OptionsFilter />

				<div className={styles.buttons}>
					<Button to='/' tag='a' name='openMap'>
						<Icons id='location' fill='#FEC81B' />
						<span>На карте</span>
					</Button>
					<Link
						to={{
							pathname: `/apartmentCatalog`,
						}}
						className={styles.lightYellow}
					>
						<span>Показать</span>
						<Icons id={'arrow'} size={{ w: 12, h: 7 }} fill={'#242424'} />
					</Link>
				</div>
			</div>
		</div>
	)
}
