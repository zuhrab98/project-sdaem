import React from 'react'

import { Button } from 'components/Button/Button'
import { Icons } from 'components/Icons/Icons'

import styles from './NotFound.module.scss'

export const NotFound: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.root}>
                <div className={styles.left}>
                    <h1>Ошибка 404</h1>
                    <p>
                        Возможно, у вас опечатка в адресе страницы, или её просто не
                        существует
                    </p>
                    <Button name="buttonDef" path="/" tag="a">
                        <Icons id="home" />
                        Вернуться на главную
                    </Button>
                </div>
                <div className={styles.right}>
                    <img alt="404"  src="/404.png" />
                    {/* <h2 className={styles.title404}>404</h2> */}
                </div>
            </div>
        </div>
    )
}
