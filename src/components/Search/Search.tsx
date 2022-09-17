import React from 'react'

import { useDispatch } from 'react-redux'

import styles from './Search.module.scss'
import { Icons } from '../Icons/Icons'
import { setSearch } from '../../redux/slices/NewsSlice'
import { SearchProps } from './interface'

export const Search: React.FC<SearchProps> = ({ onClickSearch, search }) => {
    const dispatch = useDispatch()

    return (
        <>
            <form className={styles.root}>
                <input
                    className={styles.input}
                    onChange={(e) => dispatch(setSearch(e.target.value))}
                    placeholder="Поиск по статьям"
                    value={search}
                />
                <button
                    className={styles.searchButton}
                    onClick={onClickSearch}
                    type="submit"
                >
                    <Icons id="search" />
                </button>
            </form>
        </>
    )
}
