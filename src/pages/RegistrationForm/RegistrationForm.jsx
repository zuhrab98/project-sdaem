import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button } from '../../components/Button/Button'
import { Label } from '../../components/Label/Label'
import { InputGroup } from '../../components/InputGroup/InputGroup'
import styles from './RegistrationForm.module.scss'

export const RegistrationForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ mode: 'onChange' })

	const onSubmit = (data) => {
		console.log(data)
		reset()
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.formBlock}>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.authForm}>
					<h1>Регистрация</h1>
					<InputGroup
						icon='user'
						errorIcon={errors?.login}
						register={register}
						type='login'
						placeholder='Логин'
					/>
					<InputGroup
						icon='mail'
						errorIcon={errors?.email}
						register={register}
						type='email'
						placeholder='Электронная почта'
					/>
					<InputGroup
						icon='castle'
						errorIcon={errors?.password}
						register={register}
						type='password'
						placeholder='Пароль'
					/>
					<Button name='buttonDef'>Зарегистрироваться</Button>
				</form>

				<div className={styles.description}>
					<span>Пользователь обязуется:</span>
					<p>
						предоставлять достоверную и актуальную информацию при регистрации и
						добавлении объекта;
					</p>
					<p>
						добавлять фотографии объектов соответствующие действительности.
						Администрация сайта sdaem.by оставляет за собой право удалять любую
						информацию, размещенную пользователем, если сочтет, что информация
						не соответствует действительности, носит оскорбительный характер,
						нарушает права и законные интересы других граждан либо действующее
						законодательство Республики Беларусь.
					</p>
					<div className={styles.rememberMe}>
						Уже есть аккаунта?{' '}
						<Link to='/authForm' className={styles.link}>
							Войдите
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
