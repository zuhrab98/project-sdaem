import React from 'react'
import cn from 'classnames'
import { Icons } from '../Icons/Icons'
import styles from './InputGroup.module.scss'
import { InputGroupProps } from './interface'

export const InputGroup: React.FC<InputGroupProps> = ({
	icon,
	register,
	type,
	placeholder,
	errorIcon,
	id,
	helperText,
}) => {
	return (
		<div className={styles.inputGroup}>
			{errorIcon && <Icons id='error' fill='#EB5757' />}
			<span className={styles.errorText}>{helperText}</span>
			<input
				{...register(
					`${type === 'confirmPassword' ? 'confirmPassword' : type}`
				)}
				type={type === 'confirmPassword' ? 'password' : type}
				id={id}
				placeholder={placeholder}
				className={cn(styles.input, { [styles.errorInput]: errorIcon })}
			/>
			<Icons id={icon} size={{ w: 20, h: 20 }} fill='#686868' />
		</div>
	)
}
