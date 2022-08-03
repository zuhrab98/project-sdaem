import React from 'react'

import styles from './Pagination.module.scss'
import cn from 'classnames'
import { PaginationProps } from './interface'


export const Pagination:React.FC<PaginationProps> = ({ paginate, pageNumbers }):JSX.Element => {
	const [state, setState] = React.useState(1)

	const onClickPage = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, pageNumber: number) => {
		e.preventDefault()
		setState(pageNumber)
		paginate(pageNumber)
	}

	return (
		<div className={styles.root}>
			<ul className={styles.pagination}>
				{pageNumbers.map((number) => (
					<li key={number}>
						<span
							role='button'
							className={cn({ [styles.active]: number === state })}
							onClick={(e) => onClickPage(e, number)}
						>
							{number}
						</span>
					</li>
				))}
			</ul>
		</div>
	)
}