import React from 'react'
import cn from 'classnames'
import styles from './HeaderBottom.module.scss'
import { NavLinks } from '../NavLink/NavLink'
import { Button } from '../../../components/Button/Button'
import { Link } from 'react-router-dom'

const navs = [
	{ name: 'Квартиры на сутки', paramName: 'rooms' },
	{ name: 'Коттеджи и усадьбы', paramName: 'cottages' },
	{ name: 'Бани и Сауны', paramName: 'baths' },
	{ name: 'Авто напрокат', paramName: 'cars' },
]

const selecteds = {
	rooms: [
		{
			name: 'Квартиры на сутки в Минске',
			citi: 'Минск',
		},
		{
			name: 'Квартиры на сутки в Екатеринбурге',
			citi: 'Екатеринбург',
		},
		{
			name: 'Квартиры на сутки в Москве',
			citi: 'Москва',
		},
	],
	cottages: [
		{
			name: 'Коттеджи и усадьбы на сутки в Минске',
			citi: 'Минск',
		},
		{
			name: 'Коттеджи и усадьбы на сутки в Екатеринбурге',
			citi: 'Екатеринбург',
		},
		{
			name: 'Коттеджи и усадьбы на сутки в Москве',
			citi: 'Москва',
		},
	],
	cars: [
		{
			name: 'Авто на прокат в Минске',
			citi: 'Минск',
		},
		{
			name: 'Авто на прокат  в Екатеринбурге',
			citi: 'Екатеринбург',
		},
		{
			name: 'Авто на прокат  в Москве',
			citi: 'Москва',
		},
	],
	baths: [
		{ name: 'Бани и сауны в Минске', citi: 'Минске' },
		{ name: 'Бани и сауны в Екатеринбурге', citi: 'Екатеринбург' },
		{ name: 'Бани и сауны в Москве', citi: 'Москва' },
	],
}

export const HeaderBottom = () => {
	return (
		<div className={styles.bottom}>
			<div className='container'>
				<div className={styles.wrapper}>
					<Link to='/' className={styles.logo}>
						<img src='/img/logo.svg' width={134} height={19} alt='logo' />
					</Link>
					<NavLinks navs={navs} selecteds={selecteds} appearance='black' />
					<div>
						<Button path='*' tag='a' name='addAdvert'>
							<span>+</span> Разместить объявление
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
