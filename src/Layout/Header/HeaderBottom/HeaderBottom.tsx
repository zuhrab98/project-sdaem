import React from 'react'
import cn from 'classnames'
import styles from './HeaderBottom.module.scss'
import { NavLinks } from '../NavLink/NavLink'
import { Button } from '../../../components/Button/Button'
import { Link } from 'react-router-dom'
import data from '../../../api/data.json'
import { NavHeaderBottom } from '../../../components/NavHeaderBottom/NavHeaderBottom'

export const HeaderBottom: React.FC = (): JSX.Element => {

	return (
		<div className={styles.bottom}>
			<div className='container'>
				<div className={styles.wrapper}>
					<Link to='/' className={styles.logo}>
						<img src='/img/logo.svg' width={134} height={19} alt='logo' />
					</Link>
          
					<div className={styles.nav}>
						<NavHeaderBottom param={data.NAVS_BY_PARAMS.rooms} />
						<NavHeaderBottom param={data.NAVS_BY_PARAMS.cottages} />
						<NavHeaderBottom param={data.NAVS_BY_PARAMS.baths} />
						<NavHeaderBottom param={data.NAVS_BY_PARAMS.cars} />
					</div>
					<div>
						<Button path='/advertisement' tag='a' name='addAdvert'>
							<span>+</span> Разместить объявление
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
