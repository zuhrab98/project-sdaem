import React from 'react'
import cn from 'classnames'
import styles from './SelectFilterItem.module.scss'
import { Icons } from '../../../Icons/Icons'

export const SelectFilterItem = ({
	title,
	data,
	ClassName = '',
	name = 'Выберите',
	children,
}) => {
	const [active, setActive] = React.useState(null)
	const [visiblePopup, setVisiblePopup] = React.useState(false)
	const btnRef = React.useRef()

	const toggleVisiblePopup = (i) => {
		setVisiblePopup((prev) => !prev)
		setActive(i)
	}

	React.useEffect(() => {
		const closePopup = (e) => {
			console.log(e.path[0], btnRef)

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
				onClick={toggleVisiblePopup}
				className={cn(styles.button, {
					[styles.buttonActive]: visiblePopup,
				})}
			>
				{children} {name} <Icons id={'arrow'} />
			</button>

			<div
				className={cn(styles.dropdown, {
					[styles.toggleActive]: visiblePopup,
				})}
			>
				<ul className={styles.list}>
					{data.map((item, i) => (
						<li
							key={i}
							onClick={() => toggleVisiblePopup(i)}
							className={cn(styles.item, {
								[styles.listActive]: i === active,
							})}
						>
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
