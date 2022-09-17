import React from 'react'

import styles from './NewsCards.module.scss'
import { Button } from '../Button/Button'
import { Label } from '../Label/Label'
import { NewsCardsProps } from './interface'

export const NewsCards: React.FC<NewsCardsProps> = ({ data }) => {
    return (
        <div className={styles.card}>
            <div className={styles.headerCard}>
                <img alt="apartmentImg" src={data.img} />
            </div>
            <div className={styles.body}>
                <h3 className={styles.title}>{data.title}</h3>
                <p className={styles.desc}>{data.description}</p>
                <div className={styles.footer}>
                    <Label type="lightGrey">
                        <span>{data.date}</span>
                    </Label>
                    <Button name="lightPrimary" path={`/news/${data.id}`} tag="a">
                        <span>Читать</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}