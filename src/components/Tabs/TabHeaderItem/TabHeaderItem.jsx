import React from 'react'
import styles from './TabHeaderItem.module.scss'
import cn from 'classnames'
import { TabFilter } from '../TabFilter/TabFilter'

export const TabHeaderItem = ({ items }) => {
  
	const [active, setActive] = React.useState(0)

	const onClickActive = (i) => {
		setActive(i)
	}

	return (
		<>
			<div className={styles.title}>
				<a href='#'>Sdaem.by</a> - у нас живут <span>ваши объявления</span>
			</div>

			<ul className={styles.tabsList}>
				{items.map((item, i) => (
					<li
						onClick={() => onClickActive(i)}
						key={`${item.name}_${i}`}
						className={cn(styles.tabItem, {
							[styles.tabItemActive]: i === active,
						})}
					>
						<button className={styles.tabBtn} data-tabs={item.lable}>
							{item.name}
						</button>
					</li>
				))}
			</ul>
			<TabFilter active={active} />
		</>
	)
}
