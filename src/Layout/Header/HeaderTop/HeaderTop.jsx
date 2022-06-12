import React from 'react'
import cn from 'classnames'
import styles from './HeaderTop.module.scss'
import { NavLink } from '../NavLink/NavLink'
import { Icons } from '../../../components/Icons/Icons'

const navs = [
	{ name: 'Главная', href: '#' },
	{ name: 'Новости' },
	{ name: 'Размещение и тарифы', href: '#' },
	{ name: 'Объявления на карте', href: '#' },
	{ name: 'Контакты', href: '#' },
]

export const HeaderTop = () => {
	return (
		<div className={styles.top}>
			<div className={`container`}>
				<div className={styles.wrapper}>
					<NavLink navs={navs} appearance={'grey'} />
					<div className={styles.headerRight}>
						<ul className={styles.list}>
							<li className={styles.favorites}>
								<a href='#'>Закладки  <Icons id={'heart'} /></a>
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
