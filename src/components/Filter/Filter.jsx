import React from 'react'
import cn from 'classnames'
import styles from './Filter.module.scss'
import { Icons } from '../Icons/Icons'

export const Filter = ({
	valueMetro,
	onChangeSortMetro,
	valueRegions,
	onChangeSortRegions,
	valueRooms,
	onChangeSortRooms,
	valueCities,
	onChangeSortCities,

	title,
	list,
	ClassName = '',
	children,
	name,
}) => {
	const [visiblePopup, setVisiblePopup] = React.useState(false)
	const [filterName, setFilterName] = React.useState(name)
	const btnRef = React.useRef()

	const toggleVisiblePopup = (obj) => {
		setVisiblePopup(false)

		// вызывается функ чтоб получить тот элемент на который нажали
		onChangeSortMetro && onChangeSortMetro(obj)
		onChangeSortRegions && onChangeSortRegions(obj)
		onChangeSortCities && onChangeSortCities(obj)
		onChangeSortRooms && onChangeSortRooms(obj)

		// Обновляем имя
		setFilterName(obj ? obj.name : '')
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
									[styles.selectActiveMetro]: valueMetro
										? obj?.name === valueMetro?.name
										: '',
									[styles.selectActiveReg]: valueRegions
										? obj?.name === valueRegions?.name
										: '',
									[styles.selectActiveCiti]: valueCities
										? obj?.name === valueCities?.name
										: '',
									[styles.selectActiveRoom]: valueRooms
										? obj?.name === valueMetro?.name
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
