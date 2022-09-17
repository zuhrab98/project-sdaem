import React from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import cn from 'classnames'
import { Icons } from 'components/Icons/Icons'
import { InputGroup } from 'components/InputGroup/InputGroup'
import { Button } from 'components/Button/Button'
import { FormValues } from 'type'
import { Modal } from 'components/Modal/Modal'
import { Socials } from 'components/Socials/Socials'
import { ContactsShema } from 'utils/shemas/contactsValidation'
import data from 'api/data.json'

import styles from './Сontacts.module.scss'


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

export const Сontacts: React.FC = () => {
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
        // eslint-disable-next-line
        console.log(data)
        setActivModal(true)
        reset()
    }

    return (
        <div className={styles.wrapper}>
            <div className="container">
                <div className={styles.root}>
                    <div className={styles.left}>
                        <h1 className={styles.title1}>Контакты</h1>
                        <p className={styles.leftText}>
                            Если у Вас есть пожелания, предложения или претензии по
                            организации работы сайта мы всегда рады услышать Ваше мнение.
                        </p>
                        <div className={styles.info}>
                            <ul className={styles.leftList}>
                                {contacts?.INFO.map(({ desc, icon }) => (
                                    <li key={icon}>
                                        <div className={styles.contactsIcon}>
                                            <Icons fill="white" id={icon} size={{ w: 15, h: 15 }} />
                                        </div>
                                        {desc}
                                    </li>
                                ))}
                            </ul>

                            <div className={styles.nameUser}>
                                {contacts.DATA_NAME.map(({ name }) => (
                                    <p key={name}>{name}</p>
                                ))}
                            </div>
                        </div>
                        <div className={styles.warning}>
                            <Icons fill="#5039BD" id="error" size={{ w: 35, h: 35 }} />
                            Администрация сайта не владеет информацией о наличии свободных
                            квартир
                        </div>
                    </div>
                    <div className={styles.right}>
                        <form
                            className={styles.formBlock}
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className={styles.inputs}>
                                <div className={styles.inputGroup}>
                                    <label className={styles.label} htmlFor="name">Ваше имя</label>
                                    <InputGroup
                                        errorIcon={!!errors.name?.message}
                                        helperText={errors.name?.message}
                                        icon="user"
                                        id="name"
                                        placeholder="Ваше имя"
                                        register={register}
                                        type="name"
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label className={styles.label} htmlFor="email">Ваша электронная почта</label>
                                    <InputGroup
                                        errorIcon={!!errors.email?.message}
                                        helperText={errors.email?.message}
                                        icon="mail"
                                        id="email"
                                        placeholder="Введите"
                                        register={register}
                                        type="email"
                                    />
                                </div>
                            </div>
                            <div className={styles.message}>
                                <label htmlFor="message">Ваше сообщение</label>
                                <span className={styles.errorText}>
                                    {errors.message?.message}
                                </span>
                                <textarea
                                    {...register('message', {
                                        minLength: 5,
                                        maxLength: 100,
                                    })}
                                    className={cn(styles.textarea, {
                                        [styles.errorTextarea]: !!errors.message?.message,
                                    })}
                                    id="message"
                                    placeholder="Сообщение"
                                >
                                </textarea>
                            </div>
                            <Button>Отправить</Button>
                        </form>
                    </div>
                    <Socials
                        className="socialContact"
                        fill="#FFFFFF"
                        height={20}
                        socials={data.SOCIALS}
                        width={20}
                    />
                </div>
            </div>
            {isActivModal && (
                <Modal
                    action="Закрыть окно"
                    className="modalContacts"
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
