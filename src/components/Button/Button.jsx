import React from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'
import { Icons } from '../Icons/Icons'
import { Link } from 'react-router-dom'

export const Button = ({ children, name, tag }) => {
	return (
		<>
			{tag === 'a' ? (
				<Link
					to='/'
					className={cn(styles.button, {
						[styles.openMap]: name === 'openMap',
						[styles.yellow]: name === 'yellow',
						[styles.show]: name === 'show',
					})}
				>
					{children}
				</Link>
			) : (
				<button
					className={cn(styles.button, {
						[styles.return]: name === 'return',
						[styles.addAdvert]: name === 'addAdvert',
						[styles.buttonDef]: name === 'buttonDef',
						[styles.error]: name === 'error',
						[styles.show]: name === 'show',
						[styles.yellow]: name === 'yellow',
					})}
				>
					{children}
				</button>
			)}
		</>
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
