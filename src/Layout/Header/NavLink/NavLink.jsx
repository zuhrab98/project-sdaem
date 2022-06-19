import React from 'react'
import cn from 'classnames'
import styles from './NavLink.module.scss'
import { NavLink } from 'react-router-dom'

export const NavLinks = ({ navs, appearance }) => {
	// const [isactive, setActive] = React.useState(0)
	// console.log(isactive)

	// const onActive = (i) => {
	// 	setActive(i)
	// }

	return (
		<div className={styles.nav}>
			{navs.map((item, i) => (
				<div
					key={i}
					// onClick={() => onActive(i)}
					className={cn(styles.navLink, {
						[styles.headerTopLink]: appearance === 'grey',
						[styles.headerBottomLink]: appearance === 'black',
						// [styles.active]: isactive === i,
					})}
				>
					<NavLink
						to={`${item.path}`}
						className={({ isActive }) => (isActive ? styles.active : '')}
					>
						{item.name}
					</NavLink>
				</div>
			))}
		</div>
	)
}
