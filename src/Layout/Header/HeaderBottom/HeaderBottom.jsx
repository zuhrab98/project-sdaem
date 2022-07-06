import React from 'react'
import cn from 'classnames'
import styles from './HeaderBottom.module.scss'
import { NavLinks } from '../NavLink/NavLink'
import { Button } from '../../../components/Button/Button'
import { Link } from 'react-router-dom'

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
					<Link to='/' className={styles.logo}>
						<img src='/img/logo.svg' width={134} height={19} alt='logo' />
					</Link>
					<NavLinks navs={navs} appearance={'black'} />
					<div>
						<Button path='/' tag='a' name={'addAdvert'}>
							<span>+</span> Разместить объявление
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
