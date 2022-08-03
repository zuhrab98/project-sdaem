import React from 'react'
import styles from './Lists.module.scss'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setFiltered } from '../../redux/slices/filterSlice'
import { ListProps } from './interface'

export const Lists: React.FC<ListProps> = ({ lists, tag }) => {
	const Tag = tag
	const dispatch = useDispatch()

	const handlerClick = (citi: string) => {
		citi && dispatch(setFiltered({ name: citi, filterProperty: 'citi' }))
	}

	return (
		<>
			{lists &&
				lists.map((item, i) => (
					<li key={i} className={styles.item}>
						{Tag && (
							<Link
								to={item.path ? item.path : '/apartmentCatalog'}
								state={{ paramName: item?.paramName }}
								onClick={() => handlerClick(item?.citi)}
							>
								{item.name}
							</Link>
						)}
						{Tag === undefined && item.name}
					</li>
				))}
		</>
	)
}