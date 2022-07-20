import React from 'react'
import { Icons } from '../../components/Icons/Icons'
import styles from './InputGroup.module.scss'

export const InputGroup = ({
	icon,
	register,
	type,
	placeholder,
	errorIcon,
	id,
}) => {
	// волидация для email
	const pattern = type === 'email' && {
		value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
		message: 'Please enter valid email',
	}

	// волидация для password если меньше 5 символов
	const minLength = type === 'password' && 5

	return (
		<div className={styles.inputGroup}>
			{errorIcon && <Icons id='error' fill='#EB5757' />}
			<input
				{...register(`${type}`, {
					required: 'required field!',
					pattern,
					minLength: minLength,
				})}
        type={type}
				placeholder={placeholder}
				id={id}
			/>
			<Icons id={icon} size={{ w: 20, h: 20 }} fill='#686868' />
		</div>
	)
}
