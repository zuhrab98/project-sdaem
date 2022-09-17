import React from 'react'

import cn from 'classnames'
import { Icons } from 'components/Icons/Icons'
import data from 'api/data.json'
import { Link } from 'react-router-dom'

import { NavLinks } from '../NavLink/NavLink'
import styles from './HeaderTop.module.scss'

export const HeaderTop: React.FC = () => {
    return (
        <div className={styles.top}>
            <div className="container">
                <div className={styles.wrapper}>
                    <NavLinks appearance="grey" navs={data.NAVS} />
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link
                                className={cn(styles.link, styles.linkGrey)}
                                to="/favorites"
                            >
                                Закладки
                            </Link>
                            <Icons id="heart" />
                        </li>
                        <li className={cn(styles.item, styles.registration)}>
                            <Link
                                className={cn(styles.link, styles.linkPrimary)}
                                to="/authForm"
                            >
                                Вход и регистрация
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
