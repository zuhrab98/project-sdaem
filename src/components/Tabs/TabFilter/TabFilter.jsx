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

export const TabFilter = () => {
	return (
		<div className={styles.tabsFilter}>
			<div className={styles.wrapper}>
				<FilterSelect
					title={data?.FILTER_CITIES?.title}
					name='Город'
					list={data?.FILTER_CITIES?.cities}
				/>
				<FilterSelect
					name='Комнаты'
					title={data?.FILTER_ROOMS?.title}
					list={data?.FILTER_ROOMS?.rooms}
				/>

				<PriceFilter />
				<OptionsFilter />

				<div className={styles.buttonFilter}>
					<Button to='/' tag='a' name='openMap'>
						<Icons id={'location'} />
						<span>На карте</span>
					</Button>
					<Button to='/' tag='a' name='lightYellow'>
						<span>Показать</span>
						<Icons id={'arrow'} size={{ w: 12, h: 7 }} fill={'#242424'} />
					</Button>
				</div>
			</div>
		</div>
	)
}
