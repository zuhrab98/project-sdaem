import React from 'react'
import cn from 'classnames'

import styles from './HomeFilters.module.scss'
import { TabHeaderItem } from 'components/Tabs/TabHeaderItem/TabHeaderItem'
import data from 'api/data.json'

export const HomeFilters: React.FC = (): JSX.Element => {
	return (
		<section className={cn(styles.filterSection, 'container')}>
			<div className={styles.wrapper}>
				<TabHeaderItem tabs={data.TABS} />
			</div>
		</section>
	)
}
