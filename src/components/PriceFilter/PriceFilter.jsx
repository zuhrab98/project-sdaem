import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilter, setFiltered } from '../../redux/slices/filterSlice'
import cn from 'classnames'
import styles from './PriceFilter.module.scss'

export const PriceFilter = ({ ClassName }) => {
	const dispatch = useDispatch()
	const { filtered } = useSelector(selectFilter)

	const onChangeInput = (obj) => {
		dispatch(setFiltered(obj))
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
					onChange={(e) =>
						onChangeInput({
							price: e.target.value,
							filterProperty: 'priceFrom',
						})
					}
					className={styles.input}
					value={filtered.priceFrom.price}
					name='price'
					type='number'
					placeholder='От'
				/>
				-
				<input
					className={styles.input}
					onChange={(e) =>
						onChangeInput({ price: e.target.value, filterProperty: 'priceTo' })
					}
					name='price'
					value={filtered.priceTo.price}
					type='number'
					placeholder='До'
				/>
			</div>
		</div>
	)
}
