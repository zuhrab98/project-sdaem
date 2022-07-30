import React from 'react'
import styles from './HeaderTop.module.scss'
import { NavLinks } from '../NavLink/NavLink'
import { Icons } from '../../../components/Icons/Icons'
import data from '../../../api/data.json'
import { Link } from 'react-router-dom'

export const HeaderTop = () => {
	return (
		<div className={styles.top}>
			<div className={`container`}>
				<div className={styles.wrapper}>
					<NavLinks navs={data.NAVS} appearance='grey' />
					<div className={styles.headerRight}>
						<ul className={styles.list}>
							<li className={styles.favorites}>
								<Link to='/favorites'>
									Закладки <Icons id='heart' />
								</Link>
							</li>
							<li>
								<Link to='/authForm' className={styles.priamary}>
									Вход и регистрация
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
