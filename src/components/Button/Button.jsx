import React from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setNewsDetail } from '../../redux/slices/NewsDetaitSlice'
import filteredCards from '../../filteredCards'

export const Button = ({ children, name, tag, path, onClick }) => {
	return (
		<>
			{tag === 'a' ? (
				<Link
					to={`${path}`}
					className={cn(styles.button, {
						[styles.openMap]: name === 'openMap',
						[styles.yellowGradient]: name === 'yellowGradient',
						[styles.yellow]: name === 'yellow',
						[styles.show]: name === 'show',
						[styles.addAdvert]: name === 'addAdvert',
						[styles.lightYellow]: name === 'lightYellow',
						[styles.lightPrimary]: name === 'lightPrimary',
					})}
				>
					{children}
				</Link>
			) : (
				<button
					onClick={onClick}
					className={cn(styles.button, {
						[styles.return]: name === 'return',
						[styles.buttonDef]: name === 'buttonDef',
						[styles.lightYellow]: name === 'lightYellow',
						[styles.error]: name === 'error',
						[styles.show]: name === 'show',
						[styles.yellowGradient]: name === 'yellow',
						[styles.fav]: name === 'fav',
						[styles.beige]: name === 'beige',
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
