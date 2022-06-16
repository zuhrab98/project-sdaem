import React from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'
import { Icons } from '../Icons/Icons'

export const Button = ({ children, icon, name }) => {
	return (
		<button
			className={cn(styles.button, {
				[styles.return]: name === 'return',
				[styles.addAdvert]: name === 'addAdvert',
				[styles.openMap]: name === 'openMap',
				[styles.buttonDef]: name === 'buttonDef',
				[styles.error]: name === 'error',
			})}
		>
			{icon && <Icons id={icon} />}
			{children}
		</button>
	)

	{
		/* <Button icon={'home'} name={'return'}>
				Вернуться на главную
			</Button>
			<Button icon={'location'} name={'openMap'}>
				Открыть карту
			</Button>
			<Button name={'buttonDef'}>Войти</Button>
			<Button name={'error'} icon='error'>
				Ошибка ввода
			</Button> */
	}
}
