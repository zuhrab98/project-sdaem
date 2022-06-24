import React from 'react'
import cn from 'classnames'

import styles from './HomeFilters.module.scss'
import { TabHeaderItem } from '../../../components/Tabs/TabHeaderItem/TabHeaderItem'
import data from './data.json'

export const HomeFilters = ({
	valueRooms,
	onChangeSortRooms,
	valueCities,
	onChangeSortCities,
  filteres
}) => {
	return (
		<section className={cn(styles.filterSection, 'container')}>
			<div className={styles.wrapper}>
				<TabHeaderItem
					valueRooms={valueRooms}
					onChangeSortRooms={onChangeSortRooms}
					valueCities={valueCities}
          filteres={filteres}
					onChangeSortCities={onChangeSortCities}
					items={data && data?.tabs}
				/>
			</div>
		</section>
	)
}
