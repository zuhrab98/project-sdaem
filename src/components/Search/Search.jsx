import React from 'react'

import styles from './Search.module.scss'
import { Icons } from '../Icons/Icons'
import { NewsContext } from '../../pages/News/News'

export const Search = () => {
	const { onClickSearch, setSearchInput, searchInput } =
		React.useContext(NewsContext)

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
