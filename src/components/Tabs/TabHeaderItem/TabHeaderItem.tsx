import React from 'react'
import styles from './TabHeaderItem.module.scss'
import cn from 'classnames'
import { TabFilter } from '../TabFilter/TabFilter'
import { TabHeaderItemProps } from './interface'

export const TabHeaderItem: React.FC<TabHeaderItemProps> = ({ tabs }) => {
	const [active, setActive] = React.useState(0)

	const onClickActive = (i: number) => {
		setActive(i)
	}

	return (
		<>
			<div className={styles.title}>
				Sdaem.by - у нас живут <span>ваши объявления</span>
			</div>

			<ul className={styles.tabsList}>
				{tabs.map((item, i) => (
					<li
						onClick={() => onClickActive(i)}
						key={item.name}
						className={cn(styles.tabItem, {
							[styles.tabItemActive]: i === active,
						})}
					>
						<button className={styles.tabBtn}>{item.name}</button>
					</li>
				))}
			</ul>
			<TabFilter />
		</>
	)
}
