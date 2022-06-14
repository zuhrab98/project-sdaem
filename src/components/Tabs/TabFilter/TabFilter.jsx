import React from 'react'
import cn from 'classnames'
import styles from './TabFilter.module.scss'
import { rooms, cities } from './data'
import { SelectFilterItem } from './SelectFilterItem/SelectFilterItem'
import { PriceFilter } from './PriceFilter/PriceFilter'
import { OptionsFilter } from './OptionsFilter/OptionsFilter'
import { Button } from '../../Button/Button'
import { Icons } from '../../Icons/Icons'

export const TabFilter = () => {
	return (
		<div className={styles.tabsFilter}>
			<div className={styles.wrapper}>
				<SelectFilterItem title='Город' data={cities} />
				<SelectFilterItem title='Комнаты' data={rooms} />
				<PriceFilter />
				<OptionsFilter />
				<div className={styles.buttonFilter}>
					<button className={cn(styles.button, styles.showMapBtn)}>
						На карте
						<Icons id={'location'} />
					</button>
					<button className={cn(styles.button, styles.showBtn)}>
						Показать
						<Icons id={'arrow'} size={{ w: 12, h: 7 }} />
					</button>
				</div>
			</div>
		</div>
	)
}
