import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button } from '../../components/Button/Button'
import { Icons } from '../../components/Icons/Icons'
import styles from './AuthForm.module.scss'

export const AuthForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ mode: 'onChange' })

	const onSubmit = (data) => {
		console.log(`Your name ${data}`)
		console.log(data)
		reset()
	}
	console.log(errors)

	return (
		<div className={styles.wrapper}>
			<div className={styles.formBlock}>
				<h1>Авторизация</h1>
				<p>Авторизируйтесь, чтобы начать публиковать свои объявления</p>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.authForm}>
					{errors?.login && (
						<div
							style={{
								color: 'red',
								fontSize: 12,
								textAlign: 'left',
								marginBottom: 5,
							}}
						>
							{errors.login.message}
						</div>
					)}
					<div className={styles.inputGroup}>
						<Icons id='user' size={{ w: 20, h: 20 }} fill='#664EF9' />
						<input
							{...register('login', { required: 'required field!' })}
							type='text'
							placeholder='Логин'
						/>
					</div>

					{errors.password && (
						<div
							style={{
								color: 'red',
								fontSize: 12,
								textAlign: 'left',
								marginBottom: 5,
							}}
						>
							{errors.password.message}
						</div>
					)}
					<div className={styles.inputGroup}>
						<Icons id='castle' />
						<input
							{...register('password', {
								required: 'required field!',
							})}
							type='password'
							placeholder='Пароль'
						/>
					</div>

					<div className={styles.rememberMe}>
						<Link className={styles.link} to='*'>
							Забыли пароль?
						</Link>
					</div>
					<Button name='buttonDef'>Войти</Button>
					<div className={styles.footerText}>
						Еще нет аккаунта? <Link to='/registr' className={styles.link}>
							Создайте акканут
						</Link>
					</div>
				</form>
			</div>
		</div>
	)
}
