import React from 'react'
import cn from 'classnames'
import styles from './PriceFilter.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import {
	setFilterByPriceFrom,
	setFilterByPriceTo,
} from '../../../../redux/slices/filterSlice'

export const PriceFilter = ({ ClassName }) => {
  const dispatch = useDispatch()
	const { filterByPriceFrom, filterByPriceTo } = useSelector(
		(store) => store.filter
	)

	const onChangeInput = (price, value) => {
		if (value === 'от') {
			console.log(price)
			dispatch(setFilterByPriceFrom({ price, value }))
		} else if (value === 'до') {
			console.log(price)
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
					value={filterByPriceFrom.price}
					name='price'
					type='number'
					placeholder='От'
				/>
				-
				<input
					className={styles.input}
					onChange={(e) => onChangeInput(e.target.value, 'до')}
					name='price'
					value={filterByPriceTo.price}
					type='number'
					placeholder='До'
				/>
			</div>
		</div>
	)
}
