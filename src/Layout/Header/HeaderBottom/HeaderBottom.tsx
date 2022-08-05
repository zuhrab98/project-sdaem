import React from 'react'
import cn from 'classnames'
import styles from './HeaderBottom.module.scss'
import { NavLinks } from '../NavLink/NavLink'
import { Button } from '../../../components/Button/Button'
import { Link } from 'react-router-dom'
import  data  from '../../../api/data.json'


export const HeaderBottom: React.FC = (): JSX.Element => {
	return (
		<div className={styles.bottom}>
			<div className='container'>
				<div className={styles.wrapper}>
					<Link to='/' className={styles.logo}>
						<img src='/img/logo.svg' width={134} height={19} alt='logo' />
					</Link>
					<NavLinks
						navs={data.NAVS_BY_PARAMS}
						selecteds={data.SELECTEDS_HEADER}
						appearance='black'
					/>
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
