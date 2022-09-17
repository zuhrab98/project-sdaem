import React from 'react'

import { Link } from 'react-router-dom'
import data from 'api/data.json'
import { Lists } from 'components/Lists/Lists'
import { Socials } from 'components/Socials/Socials'

import styles from './Footer.module.scss'

export const Footer: React.FC = () => {
    return (
        <footer>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.desc}>
                    <Link className="logo" to="/">
                        <img alt="logo" height={19} src="/img/logo.svg" width={134} />
                    </Link>
                    <p className={styles.descTitle}>СДАЁМ БАЙ</p>
                    <p>
                        ИП Шушкевич Андрей Викторович <br />
                        УНП 192602485 Минским горисполкомом <br />
                        10.02.2016
                        <br />
                        220068, РБ, г. Минск, ул. Осипенко, 21, кв.23
                        <br />
                        +375 29 621 48 33, sdaem@sdaem.by
                        <br />
                        Режим работы: 08:00-22:00
                        <br />
                    </p>
                </div>

                <div className={styles.content}>
                    <ul className={styles.listProduct}>
                        <Lists lists={data.LIST_PRODUCTS} tag="a" />
                    </ul>

                    <div className={styles.wrapperApartment}>
                        <div className={styles.apartmentTitle}>Квартиры</div>
                        <ul className={styles.listApartment}>
                            <Lists lists={data.APARTAMENTS} tag="a" />
                        </ul>
                    </div>

                    <ul className={styles.listServices}>
                        <Lists lists={data.NAVS_FOOTER} tag="a" />
                    </ul>
                </div>

                <div className={styles.wrapperPayment}>
                    <div className={styles.socials}>
                        Мы в соцсетях
                        <Socials
                            className="socialFooter"
                            fill="#1E2123"
                            height={23}
                            socials={data.SOCIALS}
                            width={23}
                        />
                    </div>
                    <ul className={styles.payment}>
                        {data?.PAYMENT.map((item, i) => (
                            <li key={i}>
                                <img alt={item.alt} src={item.src} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}
