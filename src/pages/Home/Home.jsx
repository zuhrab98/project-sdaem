import { Layout } from '../../Layout/Layout'
import React from 'react'
import { Button } from '../../components/Button/Button'
import styles from './Home.module.scss'

export const Home = () => {
	return (
		<Layout>
			<div className={styles.home}>
				<div className={styles.bgHome}>Main</div>
			</div>

			{/* <Button icon={'home'} name={'return'}>
				Вернуться на главную
			</Button>
			<Button icon={'location'} name={'openMap'}>
				Открыть карту
			</Button>
			<Button name={'buttonDef'}>Войти</Button>
			<Button name={'error'} icon='error'>
				Ошибка ввода
			</Button> */}
		</Layout>
	)
}
