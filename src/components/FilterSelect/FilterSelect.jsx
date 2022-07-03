import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import cn from 'classnames'
import styles from './FilterSelect.module.scss'
import { Icons } from '../Icons/Icons'
import {
	setFilterByMetro,
	setFilterByCities,
	setFilterByRooms,
	setFilterByRegions,
} from '../../redux/slices/filterSlice'

export const FilterSelect = ({ title, list, ClassName = '', children, name }) => {
	const [visiblePopup, setVisiblePopup] = React.useState(false)
	const [filterName, setFilterName] = React.useState(name)
	const btnRef = React.useRef()

	const { filterByRooms, filterByCities, filterByMetro, filterByRegions } =
		useSelector((store) => store.filter)

	const dispatch = useDispatch()

	const toggleVisiblePopup = (obj) => {
		// console.log(obj)
		// Обновляем имя
		setFilterName(obj.name)

		switch (obj.filterProperty) {
			case 'metro':
				dispatch(setFilterByMetro(obj))
				return
			case 'regions':
				dispatch(setFilterByRegions(obj))
				return
			case 'citi':
				dispatch(setFilterByCities(obj))
				return
			case 'rooms':
				dispatch(setFilterByRooms(obj))
				return
			default:
				break
		}
		console.log(obj)
		setVisiblePopup(false)
	}

	React.useEffect(() => {
		// если клик произошел в не области выподающего списка
		const closePopup = (e) => {
			if (e.path[0] !== btnRef.current) {
				setVisiblePopup(false)
			}
		}
		document.body.addEventListener('click', closePopup)
		return () => document.body.removeEventListener('click', closePopup)
	}, [])

	return (
		<div
			className={cn(styles.filterOfferType, {
				[styles.filterMetro]: ClassName === 'filterMetro',
				[styles.filterDistricts]: ClassName === 'filterDistricts',
			})}
		>
			{title && <div className={styles.title}>{title}</div>}

			<button
				ref={btnRef}
				onClick={() => setVisiblePopup((prev) => !prev)}
				className={cn(styles.button, { [styles.buttonActive]: visiblePopup })}
			>
				{/* children это иконка метро*/}
				{children} {filterName} <Icons id={'arrow'} />
			</button>

			{/* выподающее меню */}
			{visiblePopup && (
				<div className={styles.dropdown}>
					<ul className={styles.list}>
						{list?.map((obj, i) => (
							<li
								key={i}
								onClick={() => toggleVisiblePopup(obj)}
								className={cn(styles.item, {
									// активный селект
									[styles.selectActiveMetro]: filterByMetro
										? obj?.name === filterByMetro?.name
										: '',
									[styles.selectActiveReg]: filterByRegions
										? obj?.name === filterByRegions?.name
										: '',
									[styles.selectActiveCiti]: filterByCities
										? obj?.name === filterByCities?.name
										: '',
									[styles.selectActiveRoom]: filterByRooms
										? obj?.name === filterByRooms?.name
										: '',
								})}
							>
								{obj.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}
