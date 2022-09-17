import React from 'react'

import { useForm, SubmitHandler } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from 'components/Button/Button'
import { InputGroup } from 'components/InputGroup/InputGroup'
import { FormValues } from 'type'
import { LoginShema } from 'utils/shemas/loginValidation'

import styles from './AuthForm.module.scss'

export const AuthForm: React.FC = () => {
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
        // eslint-disable-next-line
        console.log(data)
        navigate('/')
        reset()
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.formBlock}>
                <h1>Авторизация</h1>
                <p>Авторизируйтесь, чтобы начать публиковать свои объявления</p>
                <form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
                    <InputGroup
                        errorIcon={!!errors.login?.message}
                        helperText={errors.login?.message}
                        icon="user"
                        placeholder="Логин"
                        register={register}
                        type="login"
                    />
                    <InputGroup
                        errorIcon={!!errors.password?.message}
                        helperText={errors.password?.message}
                        icon="castle"
                        placeholder="Пароль"
                        register={register}
                        type="password"
                    />
                    <div className={styles.rememberMe}>
                        <Link className={styles.link} to="*">
                            Забыли пароль?
                        </Link>
                    </div>
                    <Button name="buttonDef" type="submit">
                        Войти
                    </Button>
                    <div className={styles.footerText}>
                        Еще нет аккаунта?{' '}
                        <Link className={styles.link} to="/registr">
                            Создайте акканут
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
