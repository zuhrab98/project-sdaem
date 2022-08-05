import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import styles from './Сontacts.module.scss'
import { Icons } from '../../components/Icons/Icons'
import { InputGroup } from '../../components/InputGroup/InputGroup'
import { Button } from '../../components/Button/Button'
import { FormValues } from '../../type'

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
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ mode: 'onChange' })

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log(data)
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
										errorIcon={errors?.name}
										register={register}
										type='name'
										id='name'
										placeholder='Ваше имя'
									/>
								</div>
								<div className={styles.inputGroup}>
									<label htmlFor='email'>Ваша электронная почта</label>
									<InputGroup
										icon='mail'
										errorIcon={errors?.email}
										register={register}
										type='email'
										id='email'
										placeholder='Введите'
									/>
								</div>
							</div>
							<div className={styles.message}>
								<label htmlFor='message'>Ваше сообщение</label>
								<textarea
									{...register('message', {
										required: 'required field!',
										minLength: 5,
										maxLength: 100,
									})}
									id='message'
									placeholder='Сообщение'
								></textarea>
							</div>
							<Button>Отправить</Button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
