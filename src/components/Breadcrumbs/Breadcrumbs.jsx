import React from 'react'
import cn from 'classnames'
import styles from './Breadcrumbs.module.scss'
import { Link } from 'react-router-dom'
import { Icons } from '../Icons/Icons'

export const Breadcrumbs = ({ breadcrumsb, pagaName }) => {
	return (
		<div className={styles.breadcrumsb}>
			{breadcrumsb.map((crumbs, i) => (
				<Link key={i} to={crumbs.path}>
					{crumbs.page === 'Home' ? (
						<Icons id='home' fill='#4E64F9' />
					) : (
						<span>{crumbs.page}</span>
					)}
				</Link>
			))}
			<p className={styles.text}>{pagaName}</p>
		</div>
	)
}
