import { Button } from '@mui/material'
import React from 'react'
import { Layout } from '../../Layout/Layout'
import styles from './NotFound.module.scss'

export const NotFound = () => {
	return (
		<Layout>
			<div className={styles.wrapper}>
				<div className='container'>
					<h1>Ошибка 404</h1>
					<p>
						Возможно, у вас опечатка в адресе страницы, или её просто не
						существует
					</p>
					<Button icon={'home'} name={'return'}>
						Вернуться на главную
					</Button>
				</div>
			</div>
		</Layout>
	)
}
