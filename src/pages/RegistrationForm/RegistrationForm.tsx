import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'

import { Button } from 'components/Button/Button'
import { InputGroup } from 'components/InputGroup/InputGroup'
import styles from './RegistrationForm.module.scss'
import { FormValues } from 'type'
import { RegistShema } from 'utils/shemas/rgistrValidation'
import { Modal } from 'components/Modal/Modal'

export const RegistrationForm: React.FC = (): JSX.Element => {
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		mode: 'onChange',
		resolver: yupResolver(RegistShema),
	})

	const [isActiveModal, setActiveModal] = React.useState(true)

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log(data)
		setActiveModal(false)
		reset()
	}

	return (
		<div className={styles.wrapper}>
			{isActiveModal ? (
				<div className={styles.formBlock}>
					<form onSubmit={handleSubmit(onSubmit)} className={styles.authForm}>
						<h1>Регистрация</h1>
						<InputGroup
							icon='user'
							register={register}
							type='login'
							placeholder='Логин'
							errorIcon={!!errors.login?.message}
							helperText={errors.login?.message}
						/>
						<InputGroup
							icon='mail'
							register={register}
							type='email'
							placeholder='Электронная почт'
							errorIcon={!!errors.email?.message}
							helperText={errors.email?.message}
						/>
						<InputGroup
							icon='castle'
							register={register}
							type='password'
							placeholder='Пароль'
							errorIcon={!!errors.password?.message}
							helperText={errors.password?.message}
						/>
						<InputGroup
							icon='castle'
							register={register}
							type='confirmPassword'
							placeholder='Пароль'
							errorIcon={!!errors.confirmPassword?.message}
							helperText={errors.confirmPassword?.message}
						/>
						<Button type='submit' name='buttonDef'>
							Зарегистрироваться
						</Button>
					</form>
					<div className={styles.description}>
						<h4 className={styles.title}>Пользователь обязуется:</h4>
						<ul className={styles.list}>
							<li className={styles.item}>
								предоставлять достоверную и актуальную информацию при
								регистрации и добавлении объекта;
							</li>
							<li className={styles.item}>
								добавлять фотографии объектов соответствующие действительности.
								Администрация сайта sdaem.by оставляет за собой право удалять
								любую информацию, размещенную пользователем, если сочтет, что
								информация не соответствует действительности, носит
								оскорбительный характер, нарушает права и законные интересы
								других граждан либо действующее законодательство Республики
								Беларусь.
							</li>
						</ul>
						<div className={styles.rememberMe}>
							Уже есть аккаунта?{' '}
							<Link to='/authForm' className={styles.link}>
								Войдите
							</Link>
						</div>
					</div>
				</div>
			) : (
				<Modal action='Понятно' navigatPage='/home'>
					<>
						<h1>Подтвердите регистрацию</h1>{' '}
						<p>
							Письмо для подтверждения аккаунта отправлено почту. Перейдите по
							ссылке, указанной в письме. Если письма нет, то проверьте спам.
						</p>
					</>
				</Modal>
			)}
		</div>
	)
}
