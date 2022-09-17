import React from 'react'

import { Link } from 'react-router-dom'

import styles from './Breadcrumbs.module.scss'
import { Icons } from '../Icons/Icons'
import { BreadcrumbsProps } from './interface'

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
    breadcrumsb,
    pagaName,
}) => {
    return (
        <div className={styles.breadcrumsb}>
            {breadcrumsb.map((crumbs, i) => (
                <Link key={i} to={crumbs.path}>
                    {crumbs.page === 'Home' ? (
                        <Icons fill="#4E64F9" id="home" />
                    ) : (
                        <span className={styles.pageName}>{crumbs.page}</span>
                    )}
                </Link>
            ))}
            <p className={styles.text}>{pagaName}</p>
        </div>
    )
}
