import React from 'react'
import styles from './Pagination.module.scss'
import cn from 'classnames'

export const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
	const pageNumbers = []
	const [state, setState] = React.useState(1)
	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		pageNumbers.push(i)
	}

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
							href='#'
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

// breakLabel='...'
// 			onPageChange={(e) => onPageChange(e.selected + 1)}
// 			pageRangeDisplayed={3}
// 			pageCount={Math.ceil(currentPage / items)}
// 			forcePage={currentPage - 1}
// 			renderOnZeroPageCount={null}
