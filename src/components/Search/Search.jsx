import React from 'react'
import cn from 'classnames'
import styles from './Search.module.scss'
import { Icons } from '../Icons/Icons'
import { Link } from 'react-router-dom'

export const Search = ({ searchInput, setSearchInput, onClickSearch }) => {
	return (
		<>
			<form className={styles.root}>
				<input
					onChange={(e) => setSearchInput(e.target.value)}
					value={searchInput}
					className={styles.input}
					placeholder='Поиск по статьям'
				/>
				<button
					onClick={onClickSearch}
					className={styles.searchButton}
					type='submit'
				>
					<Icons id='search' />
				</button>
			</form>
		</>
	)
}
