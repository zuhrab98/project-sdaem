import React from 'react'
import cn from 'classnames'
import styles from './NavLink.module.scss'

export const NavLink = ({ navs, appearance }) => {
	return (
		<div className={styles.nav}>
			{navs.map((item, i) => (
				<a
					key={i}
					href={item.href}
					className={cn(styles.navLink, {
						[styles.headerTopLink]: appearance === 'grey',
						[styles.headerBottomLink]: appearance === 'black',
					})}
				>
					{item.name}
				</a>
			))}
		</div>
	)
}
