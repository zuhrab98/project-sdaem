import { Layout } from '../Layout/Layout'
import React from 'react'
import { Button } from '../components/Button/Button'

export const Home = () => {
	return (
		<Layout>
			<Button icon={'home'} name={'return'}>
				Вернуться на главную
			</Button>
			<Button icon={'location'} name={'openMap'}>
				Открыть карту
			</Button>
			<Button name={'buttonDef'}>Войти</Button>
			<Button name={'error'} icon='error'>
				Ошибка ввода
			</Button>
		</Layout>
	)
}
