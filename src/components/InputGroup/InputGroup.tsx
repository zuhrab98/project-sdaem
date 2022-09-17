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
            {errorIcon && <Icons fill="#EB5757" id="error" />}
            <span className={styles.errorText}>{helperText}</span>
            <input
                {...register(
                    `${type === 'confirmPassword' ? 'confirmPassword' : type}`,
                )}
                className={cn(styles.input, { [styles.errorInput]: errorIcon })}
                id={id}
                placeholder={placeholder}
                type={type === 'confirmPassword' ? 'password' : type}
            />
            <Icons fill="#686868" id={icon} size={{ w: 20, h: 20 }} />
        </div>
    )
}
