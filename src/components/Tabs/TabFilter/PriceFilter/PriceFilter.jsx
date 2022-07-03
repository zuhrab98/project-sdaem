import React from 'react'
import cn from 'classnames'
import styles from './PriceFilter.module.scss'

import { useDispatch } from 'react-redux'
import {
	setFilterByPriceFrom,
	setFilterByPriceTo,
} from '../../../../redux/slices/filterSlice'

export const PriceFilter = ({ ClassName }) => {
	const dispatch = useDispatch()

	const onChangeInput = (price, value) => {
		if (value === 'от') {
			dispatch(setFilterByPriceFrom({ price, value }))
		} else if (value === 'до') {
			dispatch(setFilterByPriceTo({ price, value }))
		}
	}

	return (
		<div
			className={cn(styles.filterPrice, {
				[styles.rentalPrice]: ClassName,
			})}
		>
			<div className={styles.title}>Цена за сутки (BYN)</div>
			<div className={styles.priceWrapper}>
				<input
					onChange={(e) => onChangeInput(e.target.value, 'от')}
					className={styles.input}
					name='price'
					type='number'
					placeholder='От'
				/>
				-
				<input
					className={styles.input}
					onChange={(e) => onChangeInput(e.target.value, 'до')}
					name='price'
					type='number'
					placeholder='До'
				/>
			</div>
		</div>
	)
}
