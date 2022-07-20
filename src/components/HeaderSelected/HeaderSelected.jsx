import React from 'react'
import styles from './HeaderSelected.module.scss'
import { Link } from 'react-router-dom'
import { setFilterByCities } from '../../redux/slices/filterSlice'
import { useDispatch } from 'react-redux'

export const HeaderSelected = ({ paramName, selecteds }) => {
	const dispatch = useDispatch()

	const handlerClick = (item) => {
		dispatch(setFilterByCities({ name: item.citi, filterProperty: 'citi' }))
	}

	return (
		<div className={styles.selected}>
			{selecteds[paramName].map((item, i) => (
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
