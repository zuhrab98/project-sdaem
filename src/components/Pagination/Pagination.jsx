import React from 'react'
import cn from 'classnames'
import styles from './Pagination.module.scss'
import { Icons } from '../Icons/Icons'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

export const Pagination = ({ onChangePage }) => {
	return (
		<ReactPaginate
			className={styles.root}
			breakLabel='...'
			nextLabel='>'
			onPageChange={(e) => onChangePage(e.selected + 1)}
			pageRangeDisplayed={3}
			pageCount={3}
			previousLabel='<'
			renderOnZeroPageCount={null}
		/>
	)
}
