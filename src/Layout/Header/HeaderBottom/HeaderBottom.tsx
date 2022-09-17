import React from 'react'
import { Button } from 'components/Button/Button'
import { Link } from 'react-router-dom'
import { NavHeaderBottom } from 'components/NavHeaderBottom/NavHeaderBottom'
import data from 'api/data.json'

import styles from './HeaderBottom.module.scss'

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
