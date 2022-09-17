import React from 'react'

import cn from 'classnames'

import styles from './Pagination.module.scss'
import { PaginationProps } from './interface'


export const Pagination: React.FC<PaginationProps> = ({ paginate, pageNumbers }) => {
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
                            className={cn({ [styles.active]: number === state })}
                            onClick={(e) => onClickPage(e, number)}
                            role="button"
                        >
                            {number}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}