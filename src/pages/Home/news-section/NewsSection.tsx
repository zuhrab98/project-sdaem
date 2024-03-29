import React from 'react'

import { Icons } from 'components/Icons/Icons'
import data from 'api/data.json'
import { Link } from 'react-router-dom'

import styles from './NewsSection.module.scss'
import { NewsSectionProps } from './interface'

export const NewsSection: React.FC = () => {
    const [news, setWews] = React.useState([])
    const [apartment, setApartment] = React.useState<NewsSectionProps>()

    React.useEffect(() => {
        setWews(data.NEWS)
        setApartment(data.APARTAMET_FOR_DAY)
    }, [])

    return (
        <section className={styles.newsSection}>
            <div className="container">
                {apartment &&
                <div className={styles.wrapper}>
                    <div className={styles.apartmentForDay}>
                        <p className={styles.sdaemText}>
                            ЧТО ТАКОЕ <Link to="/">SDAEM.BY</Link>
                        </p>
                        <h3 className={styles.title}>Квартира на сутки в Минске</h3>
                        <div className={styles.content}>
                            <div className={styles.img}>
                                <img alt="apartment-img" src={apartment.img} />
                            </div>
                            <div className={styles.textColumn}>
                                <p
                                    className={styles.text}
                                    dangerouslySetInnerHTML={{ __html: apartment.contentText }}
                                >
                                </p>
                                <p
                                    className={styles.text}
                                    dangerouslySetInnerHTML={{ __html: apartment.contentText2 }}
                                >
                                </p>
                            </div>
                        </div>
                        <div className={styles.footerText}>
                            <p>{apartment.footerText}</p>
                        </div>
                    </div>
                    <div className={styles.newsBlock}>
                        <h3 className={styles.titleNews}>Новости</h3>
                        <div className={styles.conteiner}>
                            {news &&
                                news.map((item) => (
                                    <div key={item.id} className={styles.item}>
                                        <Link className={styles.titleLink} to={`/news/${item.id}`}>
                                            {item.title}
                                        </Link>
                                        <div className={styles.date}>{item.date}</div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={styles.newsViewAll}>
                            <Link className={styles.link} to="news">
                                Посмотреть все
                            </Link>
                            <Icons id={'arrow'} size={{ w: 12, h: 7 }} />
                        </div>
                    </div>
                </div>
                }
            </div>
        </section>
    )
}
