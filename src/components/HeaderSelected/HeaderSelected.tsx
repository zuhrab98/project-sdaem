import React from 'react'
import styles from './HeaderSelected.module.scss'
import { Link } from 'react-router-dom'
import {
	setFiltered,
	setHeaderSelectName,
} from '../../redux/slices/filterSlice'
import { HeaderSelectedProps, SelectedsObj } from './interface'
import { useAppDispatch } from '../../redux/store'

export const HeaderSelected: React.FC<HeaderSelectedProps> = ({
	paramName,
	selecteds,
}) => {
	const dispatch = useAppDispatch()

	const handlerClick = (item: SelectedsObj, paramName: string): void => {
		dispatch(setFiltered({ name: item.citi, filterProperty: 'citi' }))
		dispatch(setHeaderSelectName({name: item.name, paramName: paramName}))
	}

	return (
		<div className={styles.selected}>
			{selecteds[paramName].map((item: SelectedsObj, i: number) => (
				<Link
					key={item.name}
					to={`/apartmentCatalog`}
					state={{ paramName }}
					onClick={() => handlerClick(item, paramName)}
				>
					{item.name}
				</Link>
			))}
		</div>
	)
}
