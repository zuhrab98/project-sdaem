import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button } from '../../components/Button/Button'
import { InputGroup } from '../../components/InputGroup/InputGroup'
import { FormValues } from '../../type'

import styles from './AuthForm.module.scss'

export const AuthForm: React.FC = (): JSX.Element => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log(data)
		reset()
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.formBlock}>
				<h1>Авторизация</h1>
				<p>Авторизируйтесь, чтобы начать публиковать свои объявления</p>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.authForm}>
					<InputGroup
						icon='user'
						errorIcon={errors?.login}
						register={register}
						type='login'
						placeholder='Логин'
					/>

					<InputGroup
						icon='castle'
						errorIcon={errors?.password}
						register={register}
						type='password'
						placeholder='Пароль'
					/>

					<div className={styles.rememberMe}>
						<Link className={styles.link} to='*'>
							Забыли пароль?
						</Link>
					</div>
					<Button name='buttonDef'>Войти</Button>
					<div className={styles.footerText}>
						Еще нет аккаунта?{' '}
						<Link to='/registr' className={styles.link}>
							Создайте акканут
						</Link>
					</div>
				</form>
			</div>
		</div>
	)
}