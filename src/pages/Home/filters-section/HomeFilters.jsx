import React from 'react'
import cn from 'classnames'

import styles from './HomeFilters.module.scss'
import { TabHeaderItem } from '../../../components/Tabs/TabHeaderItem/TabHeaderItem'
import data from './data.json'

export const HomeFilters = () => {
	return (
		<section className={cn(styles.filterSection, 'container')}>
			<div className={styles.wrapper}>
				<TabHeaderItem tabs={data && data?.tabs} />
			</div>
		</section>
	)
}
