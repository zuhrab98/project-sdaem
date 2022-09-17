import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'

import { Button } from 'components/Button/Button'
import { InputGroup } from 'components/InputGroup/InputGroup'
import { FormValues } from 'type'
import { LoginShema } from 'utils/shemas/loginValidation'

import styles from './AuthForm.module.scss'

export const AuthForm: React.FC = (): JSX.Element => {
	const navigate = useNavigate()
	const {
		register,
		            handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(LoginShema),
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log(data)
		navigate('/')
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
						register={register}
						type='login'
						placeholder='Логин'
						errorIcon={!!errors.login?.message}
						helperText={errors.login?.message}
					/>
					<InputGroup
						icon='castle'
						register={register}
						type='password'
						placeholder='Пароль'
						errorIcon={!!errors.password?.message}
						helperText={errors.password?.message}
					/>
					<div className={styles.rememberMe}>
						<Link className={styles.link} to='*'>
							Забыли пароль?
						</Link>
					</div>
					<Button type='submit' name='buttonDef'>
						Войти
					</Button>
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
