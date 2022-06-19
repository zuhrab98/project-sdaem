import React from 'react'
import styles from './HeaderTop.module.scss'
import { NavLinks } from '../NavLink/NavLink'
import { Icons } from '../../../components/Icons/Icons'
import data from './data.json'

export const HeaderTop = () => {
	return (
		<div className={styles.top}>
			<div className={`container`}>
				<div className={styles.wrapper}>
					<NavLinks navs={data.NAVS} appearance={'grey'} />
					<div className={styles.headerRight}>
						<ul className={styles.list}>
							<li className={styles.favorites}>
								<a href='#'>
									Закладки <Icons id={'heart'} />
								</a>
							</li>
							<li>
								<a href='#' className={styles.priamary}>
									Вход и регистрация
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
