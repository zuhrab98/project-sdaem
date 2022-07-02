import React from 'react'
import cn from 'classnames'
import styles from './Pagination.module.scss'
import { Icons } from '../Icons/Icons'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import { useContext } from 'react'
import { NewsContext } from '../../pages/News/News'

export const Pagination = () => {
	const { setCurrentPage } = useContext(NewsContext)

	return (
		<ReactPaginate
			className={styles.root}
			breakLabel='...'
			onPageChange={(e) => setCurrentPage(e.selected + 1)}
			pageRangeDisplayed={3}
			pageCount={3}
			renderOnZeroPageCount={null}
		/>
	)
}
