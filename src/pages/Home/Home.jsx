import { Layout } from '../../Layout/Layout'
import React from 'react'
import styles from './Home.module.scss'
import { Tabs } from '../../components/Tabs/Tabs'

export const Home = () => {
	return (
		<Layout>
			<div className={styles.filterBlock}>
				<div className={styles.bg}></div>
				<Tabs />
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
