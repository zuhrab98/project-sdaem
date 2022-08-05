import React from 'react'
import { useSelector } from 'react-redux'

import styles from './Favorites.module.scss'
import { Icons } from '../../components/Icons/Icons'
import { Button } from '../../components/Button/Button'
import { LocationCard } from '../../components/LocationCard/LocationCard'
import axios from 'axios'
import { useState } from 'react'

export const Favorites: React.FC = (): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div className='container'>
				<div className={styles.header}>
					<h1>Мои закладки</h1>
				</div>
				<div className={styles.row}></div>
			</div>
		</div>
	)
}
