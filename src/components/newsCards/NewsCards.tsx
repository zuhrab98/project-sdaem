import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NewsCards.module.scss'
import { Button } from '../Button/Button'
import { Label } from '../Label/Label'
import { NewsCardsProps } from './interface'

export const NewsCards: React.FC<NewsCardsProps> = ({ data }): JSX.Element => {
	return (
		<div className={styles.card}>
			<div className={styles.headerCard}>
				<img src={data.img} alt='apartmentImg' />
			</div>
			<div className={styles.body}>
				<h3 className={styles.title}>{data.title}</h3>
				<p className={styles.desc}>{data.description}</p>
				<div className={styles.footer}>
					<Label tag='div' type='lightGrey'>
						<span>{data.date}</span>
					</Label>
					<Button tag='a' path={`/news/${data.id}`} name='lightPrimary'>
						<span>Читать</span>
					</Button>
				</div>
			</div>
		</div>
	)
}