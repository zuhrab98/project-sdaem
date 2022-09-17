import React from 'react'

import { Icons } from 'components/Icons/Icons'
import { Button } from 'components/Button/Button'
import cn from 'classnames'

import styles from './Card.module.scss'
import { CardProps } from './interface'

export const Card: React.FC<CardProps> = ({ data })=> {
    return (
        <div className={cn(styles.card, { [styles.gold]: data.type })}>
            <div className={styles.header}>
                {/* если есть типа то без картинки*/}
                {data.type ? (
                    <p className={styles.title}>{data.title}</p>
                ) : (
                    <>
                        <div className={styles.img}>
                            <img alt="start-ard-img" src={data.img} />
                        </div>
                        <p className={styles.title}>{data.title}</p>
                    </>
                )}
            </div>

            {/* если есть тип то два пораграфа */}
            {data.type ? (
                <div className={styles.goldText}>
                    <p dangerouslySetInnerHTML={{ __html: data.text1 }}></p>
                    <p dangerouslySetInnerHTML={{ __html: data.text2 }}></p>
                </div>
            ) : (
                <p
                    dangerouslySetInnerHTML={{ __html: data.text }}
                    className={styles.text}
                >
                </p>
            )}

            <Button name="yellowGradient" path="/" tag="a">
                <span>{data.bntText}</span>
                {data.id !== '1' ? (
                    <Icons fill="#242424" id={'arrow'} size={{ w: 12, h: 7 }} />
                ) : (
                    ''
                )}
            </Button>
        </div>
    )
}
