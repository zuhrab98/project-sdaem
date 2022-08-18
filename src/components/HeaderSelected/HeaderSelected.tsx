import React from 'react'
import styles from './HeaderSelected.module.scss'
import { Link } from 'react-router-dom'
import {
	setFiltered,
	setHeaderSelectName,
} from '../../redux/slices/filterSlice'
import { HeaderSelectedProps, SelectedsObj } from './interface'
import { useAppDispatch } from '../../redux/store'
import { setTabs } from '../../redux/slices/homeSlice'

export const HeaderSelected: React.FC<HeaderSelectedProps> = ({
	paramName,
	selecteds,
}) => {
	const dispatch = useAppDispatch()

	const handleOnClick = (item: SelectedsObj, paramName: string): void => {
		dispatch(setFiltered({ name: item.citi, filterProperty: 'citi' }))
		dispatch(setHeaderSelectName({name: item.name, paramName: paramName}))
    dispatch(setTabs({name: item.name, paramName, property: item.property}))
	}

	return (
		<div className={styles.selected}>
			{selecteds[paramName].map((item: SelectedsObj, i: number) => (
				<Link
					key={item.name}
					to={`/apartmentCatalog`}
					state={{ paramName }}
					onClick={() => handleOnClick(item, paramName)}
				>
					{item.name}
				</Link>
			))}
		</div>
	)
}
