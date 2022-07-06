import React from 'react'
import styles from './Pagination.module.scss'
import ReactPaginate from 'react-paginate'

export const Pagination = ({ onPageChange, currentPage }) => {
	return (
		<ReactPaginate
			className={styles.root}
			breakLabel='...'
			onPageChange={(e) => onPageChange(e.selected + 1)}
			pageRangeDisplayed={3}
			pageCount={12}
			farcePage={currentPage - 1}
			renderOnZeroPageCount={null}
		/>
	)
}
