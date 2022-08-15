import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import cn from 'classnames'

import styles from './Сontacts.module.scss'
import { Icons } from '../../components/Icons/Icons'
import { InputGroup } from '../../components/InputGroup/InputGroup'
import { Button } from '../../components/Button/Button'
import { FormValues } from '../../type'
import { Modal } from '../../components/Modal/Modal'
import { ContactsShema } from '../../utils/shemas/contactsValidation'
import data from '../../api/data.json'
import { Socials } from '../../components/Socials/Socials'

const contacts = {
	INFO: [
		{ icon: 'location', desc: '220068, РБ, г. Минск, ул. Осипенко, 21, кв.23' },
		{ icon: 'phone', desc: '+375 29 621-48-33' },
		{ icon: 'mail', desc: 'sdaem@sdaem.by' },
		{ icon: 'time', desc: 'Режим работы: 08:00-22:00' },
	],
	DATA_NAME: [
		{ name: 'ИП Шушкевич Андрей Викторович' },
		{ name: 'УНП 192602485 Минским горисполкомом 10.02.2016' },
	],
}

export const Сontacts: React.FC = (): JSX.Element => {
	const [isActivModal, setActivModal] = React.useState(false)

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>({
		mode: 'onChange',
		resolver: yupResolver(ContactsShema),
	})

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log(data)
		setActivModal(true)
		reset()
	}

	return (
		<div className={styles.wrapper}>
			<div className='container'>
				<div className={styles.root}>
					<div className={styles.left}>
						<h1>Контакты</h1>
						<p>
							Если у Вас есть пожелания, предложения или претензии по
							организации работы сайта мы всегда рады услышать Ваше мнение.
						</p>
						<div className={styles.info}>
							<ul className={styles.list}>
								{contacts?.INFO.map(({ desc, icon }) => (
									<li key={icon}>
										<div className={styles.icon}>
											<Icons id={icon} fill='white' size={{ w: 15, h: 15 }} />
										</div>
										{desc}
									</li>
								))}
							</ul>

							<div className={styles.name}>
								{contacts.DATA_NAME.map(({ name }) => (
									<p key={name}>{name}</p>
								))}
							</div>
						</div>
						<div className={styles.warning}>
							<Icons id='error' fill='#5039BD' size={{ w: 35, h: 35 }} />
							Администрация сайта не владеет информацией о наличии свободных
							квартир
						</div>
					</div>
					<div className={styles.right}>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className={styles.formBlock}
						>
							<div className={styles.inputs}>
								<div className={styles.inputGroup}>
									<label htmlFor='name'>Ваше имя</label>
									<InputGroup
										icon='user'
										register={register}
										type='name'
										id='name'
										placeholder='Ваше имя'
										errorIcon={!!errors.name?.message}
										helperText={errors.name?.message}
									/>
								</div>
								<div className={styles.inputGroup}>
									<label htmlFor='email'>Ваша электронная почта</label>
									<InputGroup
										icon='mail'
										register={register}
										type='email'
										id='email'
										placeholder='Введите'
										errorIcon={!!errors.email?.message}
										helperText={errors.email?.message}
									/>
								</div>
							</div>
							<div className={styles.message}>
								<label htmlFor='message'>Ваше сообщение</label>
								<span className={styles.errorText}>
									{errors.message?.message}
								</span>
								<textarea
									{...register('message', {
										minLength: 5,
										maxLength: 100,
									})}
									id='message'
									placeholder='Сообщение'
									className={cn(styles.textarea, {
										[styles.errorTextarea]: !!errors.message?.message,
									})}
								></textarea>
							</div>
							<Button>Отправить</Button>
						</form>
					</div>
					<Socials
						className='socialContact'
						socials={data.SOCIALS}
						fill='#FFFFFF'
						width={20}
						height={20}
					/>
				</div>
			</div>
			{isActivModal && (
				<Modal
					action='Закрыть окно'
					className='modalContacts'
					isActive={setActivModal}
				>
					<>
						<h1>Ваше письмо отправлено!</h1>
						<p>
							Какое-то сообщение о том, что письмо отправлено, какое-то
							сообщение, что письмо отправлено.
						</p>
					</>
				</Modal>
			)}
		</div>
	)
}
