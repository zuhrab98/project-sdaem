import React from 'react'

import styles from './Search.module.scss'
import { Icons } from '../Icons/Icons'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../redux/slices/NewsSlice'
import { SearchProps } from './interface'

export const Search: React.FC<SearchProps> = ({ onClickSearch, search }): JSX.Element => {
	const dispatch = useDispatch()

	return (
		<>
			<form className={styles.root}>
				<input
					onChange={(e) => dispatch(setSearch(e.target.value))}
					value={search}
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