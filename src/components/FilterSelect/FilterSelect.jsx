import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import cn from 'classnames'
import styles from './FilterSelect.module.scss'
import { Icons } from '../Icons/Icons'
import {
	selectFilter,
	setFiltered,
	setSort,
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
	const { filtered } = useSelector(selectFilter)

	const dispatch = useDispatch()

	const onClickListItem = (obj) => {
		// Обновляем имя
		setFilterName(obj.name)
		dispatch(setFiltered(obj))

		// если фильтрвция по возрастанию или убыванию
		if (obj.filterProperty === 'desc' || obj.filterProperty === 'asc') {
			dispatch(setSort(obj))
		}
		// закрыть popup
		setVisiblePopup(false)
	}

	// когда делаем очистку фильтров обновляем имя фильтр
	React.useEffect(() => {
		setFilterName(name)
	}, [name])

	React.useEffect(() => {
		// если клик произошел в не области выподающего списка
		const closePopup = (e) => {
			// console.log(btnRef.current);
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
				[styles.moreOptionsFilter]: ClassName === 'moreOptionsFilter',
				[styles.filterDistricts]: ClassName === 'filterDistricts',
				[styles.rentalApartment]: ClassName === 'rentalApartment',
				[styles.sortPrice]: ClassName === 'sortPrice',
			})}
		>
			{title && <span className={styles.title}>{title}</span>}

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
									[styles.selectActiveMetro]: filtered.metro
										? obj?.name === filtered.metro?.name
										: '',
									[styles.selectActiveReg]: filtered.region
										? obj?.name === filtered.region?.name
										: '',
									[styles.selectActiveCiti]: filtered.citi
										? obj?.name === filtered.citi?.name
										: '',
									[styles.selectActiveRoom]: filtered.room
										? obj?.name === filtered.room?.name
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
