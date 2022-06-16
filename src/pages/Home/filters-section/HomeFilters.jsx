import React from 'react'
import { Tabs } from '../../../components/Tabs/Tabs'
import cn from 'classnames'

import styles from './HomeFilters.module.scss'

export const HomeFilters = () => {
	return (
		<div className={cn(styles.filterSection, 'container')}>
			<Tabs />
		</div>
	)
}
