import React from 'react'
import cn from 'classnames'

import styles from './HeaderTop.module.scss'
import { NavLinks } from '../NavLink/NavLink'
import { Icons } from 'components/Icons/Icons'
import data from 'api/data.json'
import { Link } from 'react-router-dom'

export const HeaderTop: React.FC = (): JSX.Element => {
	return (
		<div className={styles.top}>
			<div className='container'>
				<div className={styles.wrapper}>
					<NavLinks navs={data.NAVS} appearance='grey' />
					<ul className={styles.list}>
						<li className={styles.item}>
							<Link
								to='/favorites'
								className={cn(styles.link, styles.linkGrey)}
							>
								Закладки
							</Link>
							<Icons id='heart' />
						</li>
						<li className={cn(styles.item, styles.registration)}>
							<Link
								to='/authForm'
								className={cn(styles.link, styles.linkPrimary)}
							>
								Вход и регистрация
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
