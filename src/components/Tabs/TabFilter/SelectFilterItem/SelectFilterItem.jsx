import React from 'react'
import cn from 'classnames'
import styles from './SelectFilterItem.module.scss'
import { Icons } from '../../../Icons/Icons'

export const SelectFilterItem = ({ title, data }) => {
	const [active, setActive] = React.useState(null)
	const [visiblePopup, setVisiblePopup] = React.useState(false)

	const refFilter = React.useRef(null)

	const toggleVisiblePopup = (i) => {
		setVisiblePopup((prev) => !prev)
		setActive(i)
	}

	return (
		<div ref={refFilter} className={styles.filterOfferType}>
			<div className={styles.title}>{title}</div>
			<button
				onClick={toggleVisiblePopup}
				className={cn(styles.button, {
					[styles.buttonActive]: visiblePopup,
				})}
			>
				Выберите <Icons id={'arrow'} />
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
							{item.id}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
