import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilter, setFiltered } from '../../redux/slices/filterSlice'
import { PriceFilterProps } from './interface'
import cn from 'classnames'
import styles from './PriceFilter.module.scss'
import { FilterPropertyType } from '../../type'

export const PriceFilter: React.FC<PriceFilterProps> = ({
	ClassName,
}): JSX.Element => {
	const dispatch = useDispatch()
	const { filtered } = useSelector(selectFilter)

	const onChangeInput = (obj: FilterPropertyType) => {
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
							name: e.target.value,
							filterProperty: 'priceFrom',
						})
					}
					className={styles.input}
					value={filtered.priceFrom.name}
					name='price'
					type='number'
					placeholder='От'
				/>
				-
				<input
					className={styles.input}
					onChange={(e) =>
						onChangeInput({ name: e.target.value, filterProperty: 'priceTo' })
					}
					name='price'
					value={filtered.priceTo.name}
					type='number'
					placeholder='До'
				/>
			</div>
		</div>
	)
}
