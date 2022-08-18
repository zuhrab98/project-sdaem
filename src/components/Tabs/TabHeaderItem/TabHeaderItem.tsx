import React from 'react'
import styles from './TabHeaderItem.module.scss'
import cn from 'classnames'
import { TabFilter } from '../TabFilter/TabFilter'
import { TabHeaderItemProps, Tabs } from './interface'
import { useAppDispatch } from '../../../redux/store'
import { setTabs } from '../../../redux/slices/homeSlice'

export const TabHeaderItem: React.FC<TabHeaderItemProps> = ({ tabs }) => {
	const [active, setActive] = React.useState(0)
	const [category, setCategory] = React.useState(null)
	const dispatch = useAppDispatch()

	const handleOnClickTabs = (i: number, obj: Tabs) => {
		setActive(i)
		dispatch(setTabs(obj))
    setCategory(obj.paramName)
	}

	return (
		<>
			<div className={styles.title}>
				Sdaem.by - у нас живут <span>ваши объявления</span>
			</div>

			<ul className={styles.tabsList}>
				{tabs.map(( obj , i: number) => (
					<li
						onClick={() => handleOnClickTabs(i, obj)}
						key={obj.name}
						className={cn(styles.tabItem, {
							[styles.tabItemActive]: i === active,
						})}
					>
						<button className={styles.tabBtn}>{obj.name}</button>
					</li>
				))}
			</ul>
			<TabFilter paramName={category}/>
		</>
	)
}
