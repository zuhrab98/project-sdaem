import React from 'react'

import { useForm, SubmitHandler } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from 'components/Button/Button'
import { InputGroup } from 'components/InputGroup/InputGroup'
import { FormValues } from 'type'
import { RegistShema } from 'utils/shemas/rgistrValidation'
import { Modal } from 'components/Modal/Modal'

import styles from './RegistrationForm.module.scss'

export const RegistrationForm: React.FC = () => {
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
        // eslint-disable-next-line
        console.log(data)
        setActiveModal(false)
        reset()
    }

    return (
        <div className={styles.wrapper}>
            {isActiveModal ? (
                <div className={styles.formBlock}>
                    <form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
                        <h1>Регистрация</h1>
                        <InputGroup
                            errorIcon={!!errors.login?.message}
                            helperText={errors.login?.message}
                            icon="user"
                            placeholder="Логин"
                            register={register}
                            type="login"
                        />
                        <InputGroup
                            errorIcon={!!errors.email?.message}
                            helperText={errors.email?.message}
                            icon="mail"
                            placeholder="Электронная почт"
                            register={register}
                            type="email"
                        />
                        <InputGroup
                            errorIcon={!!errors.password?.message}
                            helperText={errors.password?.message}
                            icon="castle"
                            placeholder="Пароль"
                            register={register}
                            type="password"
                        />
                        <InputGroup
                            errorIcon={!!errors.confirmPassword?.message}
                            helperText={errors.confirmPassword?.message}
                            icon="castle"
                            placeholder="Пароль"
                            register={register}
                            type="confirmPassword"
                        />
                        <Button name="buttonDef" type="submit">
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
                            <Link className={styles.link} to="/authForm">
                                Войдите
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <Modal action="Понятно" navigatPage="/home">
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
