import React from 'react'

import styles from './Pagination.module.scss'
import cn from 'classnames'

export const Pagination = ({ paginate, pageNumbers }) => {
	const [state, setState] = React.useState(1)

	const onClickPage = (e, pageNumber) => {
		e.preventDefault()
		setState(pageNumber)
		paginate(pageNumber)
	}

	return (
		<div className={styles.root}>
			<ul className={styles.pagination}>
				{pageNumbers.map((number) => (
					<li key={number}>
						<a
							role='button'
							className={cn({ [styles.active]: number === state })}
							onClick={(e) => onClickPage(e, number)}
						>
							{number}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}