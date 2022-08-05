import React from 'react'
import cn from 'classnames'
import styles from './NavLink.module.scss'
import { NavLink } from 'react-router-dom'
import { NavLinkProps } from './interface'

export const NavLinks: React.FC<NavLinkProps> = ({
	navs,
	appearance,
	selecteds,
}): JSX.Element => {
	return (
		<div className={styles.nav}>
			{navs.map((item, i) => (
				<div
					key={i}
					className={cn(styles.navLink, {
						[styles.headerTopLink]: appearance === 'grey',
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
