import React from 'react'
import styles from './HeaderSelected.module.scss'
import { Link } from 'react-router-dom'
import { setFiltered } from '../../redux/slices/filterSlice'
import { useDispatch } from 'react-redux'
import { HeaderSelectedProps, Selecteds } from './interface'

export const HeaderSelected: React.FC<HeaderSelectedProps> = ({
	paramName,
	selecteds,
}) => {
	const dispatch = useDispatch()

	const handlerClick = (item: Selecteds): void => {
		dispatch(setFiltered({ name: item.citi, filterProperty: 'citi' }))
	}

	return (
		<div className={styles.selected}>
			{selecteds[paramName].map((item: Selecteds, i: number) => (
				<Link
					key={item.name}
					to={`/apartmentCatalog`}
					state={{ paramName }}
					onClick={() => handlerClick(item)}
				>
					{item.name}
				</Link>
			))}
		</div>
	)
}
