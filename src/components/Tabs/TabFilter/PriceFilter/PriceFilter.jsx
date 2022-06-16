import React from 'react'
import cn from 'classnames'
import styles from './PriceFilter.module.scss'
import { Icons } from '../../../Icons/Icons'

export const PriceFilter = ({ ClassName }) => {
	return (
		<div
			className={cn(styles.filterPrice, {
				[styles.rentalPrice]: ClassName,
			})}
		>
			<div className={styles.title}>Цена за сутки (BYN)</div>
			<div className={styles.priceWrapper}>
				<input
					className={styles.input}
					name='price'
					type='number'
					placeholder='От'
				/>
				-
				<input
					className={styles.input}
					name='price'
					type='number'
					placeholder='До'
				/>
			</div>
		</div>
	)
}
