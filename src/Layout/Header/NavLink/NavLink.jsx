import React from 'react'
import cn from 'classnames'
import styles from './NavLink.module.scss'
import { Link, NavLink } from 'react-router-dom'
import { HeaderSelected } from '../../../components/HeaderSelected/HeaderSelected'
import { setFilterByCities } from '../../../redux/slices/filterSlice'
import { useDispatch } from 'react-redux'

export const NavLinks = ({ navs, appearance, selecteds }) => {
	const [isModalOpen, setModalOpen] = React.useState(false)
	const [isActive, setActive] = React.useState()
	const ref = React.useRef()
	const dispatch = useDispatch()

	const onClickNavItem = (i) => {
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
					{appearance === 'black' ? (
						<div
							className={cn({ [styles.active]: isActive === i && isModalOpen })}
							ref={ref}
							onClick={() => onClickNavItem(i)}
						>
							<div>{item.name}</div>
							{isActive === i && isModalOpen && (
								<HeaderSelected paramName={item.paramName} selecteds={selecteds} />
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
