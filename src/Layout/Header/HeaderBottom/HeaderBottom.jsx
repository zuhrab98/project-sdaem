import React from 'react'
import cn from 'classnames'
import styles from './HeaderBottom.module.scss'
import { NavLinks } from '../NavLink/NavLink'
import { Button } from '../../../components/Button/Button'

const navs = [
	{ name: 'Квартиры на сутки', path: 'rooms' },
	{ name: 'Коттеджи и усадьбы', path: 'cottage' },
	{ name: 'Бани и Сауны', path: 'bathhouse' },
	{ name: 'Авто напрокат', path: 'cars' },
]

export const HeaderBottom = () => {
	return (
		<div className={styles.bottom}>
			<div className='container'>
				<div className={styles.wrapper}>
					<a href='#' className={styles.logo}>
						<img src='img/logo.svg' width={134} height={19} alt='logo' />
					</a>
					<NavLinks navs={navs} appearance={'black'} />
					<Button name={'addAdvert'}>
						<span>+</span> Разместить объявление
					</Button>
				</div>
			</div>
		</div>
	)
}
