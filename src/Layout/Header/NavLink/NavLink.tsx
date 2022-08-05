import React from 'react'
import cn from 'classnames'
import styles from './NavLink.module.scss'
import { NavLink } from 'react-router-dom'
import { HeaderSelected } from '../../../components/HeaderSelected/HeaderSelected'
import { NavLinkProps } from './interface'

export const NavLinks: React.FC<NavLinkProps> = ({
	navs,
	appearance,
	selecteds,
}): JSX.Element => {
	const [isModalOpen, setModalOpen] = React.useState(false)
	const [isActive, setActive] = React.useState<number>()

	const onClickNavItem = (i: number) => {
		setActive(i)
		setModalOpen((prev) => !prev)
	}

	return (
		<div className={styles.nav}>
			{navs.map((item, i) => (
				<div
					key={i}
					className={cn(styles.navLink, {
						[styles.headerTopLink]: appearance === 'grey',
						[styles.headerBottomLink]: appearance === 'black',
					})}
				>
					{/* если есть selecteds то делаем навигаю дивами*/}
					{selecteds ? (
						<div
							className={cn(styles.item, {
								[styles.active]: isActive === i && isModalOpen,
							})}
							onClick={() => onClickNavItem(i)}
						>
							{item.name}

							{isActive === i && isModalOpen && (
								<HeaderSelected
									paramName={item.paramName}
									selecteds={selecteds}
								/>
							)}
						</div>
					) : (
						<NavLink
							to={`${item.path}`}
							className={({ isActive }) => (isActive ? styles.active : '')}
						>
							{item.name}
						</NavLink>
					)}
				</div>
			))}
		</div>
	)
}