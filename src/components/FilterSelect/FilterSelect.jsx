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

export const FilterSelect = ({
	title,
	list,
	ClassName = '',
	children,
	name,
}) => {
	const [visiblePopup, setVisiblePopup] = React.useState(false)
	const [filterName, setFilterName] = React.useState(name)
	const btnRef = React.useRef()

	// useSelector по сути слушатеь на изминения store.filter, далее компонент перерисовывается
	const { filterByRooms, filterByCities, filterByMetro, filterByRegions } =
		useSelector((store) => store.filter)

	const dispatch = useDispatch()

	const onClickListItem = (obj) => {
		// console.log(obj)
		// Обновляем имя
		setFilterName(obj.name)
		switch (obj.filterProperty) {
			case 'metro':
				dispatch(setFilterByMetro(obj))
				return
			case 'region':
				dispatch(setFilterByRegions(obj))
				return
			case 'citi':
				dispatch(setFilterByCities(obj))
				return
			case 'room':
				dispatch(setFilterByRooms(obj))
				return
			default:
				break
		}
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
				[styles.rentalApartment]: ClassName === 'rentalApartment',
				[styles.sortPrice]: ClassName === 'sortPrice',
			})}
		>
			{title && <div className={styles.title}>{title}</div>}

			<div
				ref={btnRef}
				onClick={() => setVisiblePopup((prev) => !prev)}
				className={cn(styles.button, { [styles.buttonActive]: visiblePopup })}
			>
				{/* children это иконка метро либо другая*/}
				{children} {filterName} <Icons id={'arrow'} />
			</div>

			{/* выподающее меню */}
			{visiblePopup && (
				<div className={styles.dropdown}>
					<ul className={styles.list}>
						{list?.map((obj) => (
							<li
								key={obj?.name}
								onClick={() => onClickListItem(obj)}
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
