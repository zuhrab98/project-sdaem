import React from 'react'

import { Icons } from '../../../components/Icons/Icons'
import styles from './NewsSection.module.scss'
// import { Button } from '../../../components/Button/Button'
import data from './data.json'
import { Link } from 'react-router-dom'

export const NewsSection = () => {
	const [news, setWews] = React.useState([])

	React.useEffect(() => {
		setWews(data.NEWS)
	}, [])

	return (
		<section className={styles.startSection}>
			<div className='container'>
				<div className={styles.wrapper}>
					<div className={styles.apartmentForDay}>
						<Link to='/'>
							<span className={styles.text}>ЧТО ТАКОЕ SDAEM.BY</span>
						</Link>
						<h3 className={styles.title}>Квартира на сутки в Минске</h3>
						<div className={styles.content}>
							<div className={styles.img}>
								<img src='' alt='apartment-img' />
							</div>
							<p className={styles.text}>
								<b>Нужна квартира на сутки в Минске?</b> На веб-сайте sdaem.by
								вас ждет масса выгодных предложений. Каталог насчитывает более
								500 квартир. Благодаря удобной навигации вы быстро найдете
								подходящий вариант. В каталоге представлены комфортабельные
								однокомнатные квартиры на сутки и квартиры с большим количеством
								комнат в разных районах города, с различной степенью удобства от
								дешевых до VIP с джакузи.
							</p>
						</div>
						<div className={styles.footerText}>
							<p>
								Чтобы снять квартиру на сутки в Минске, вам достаточно
								определиться с выбором и связаться с владельцем для уточнения
								условий аренды и заключить договор. Заметим, на сайте
								представлены исключительно квартиры на сутки без посредников,
								что избавляет посетителей от необходимости взаимодействовать с
								агентствами, тратя свое время и деньги. Также пользователи сайта
								могут совершенно бесплатно размещать объявления о готовности
								сдать квартиру на сутки.
							</p>
						</div>
					</div>
					<div className={styles.news}>
						<h3 className={styles.news}>Новости</h3>
						<div className={styles.conteiner}>
							{news &&
								news.map((item) => (
									<div className={styles.item}>
										<div className={styles.date}>{item.date}</div>
										<a href='#' className={styles.title}>
											{item.title}
										</a>
									</div>
								))}
						</div>
						<div className={styles.newsViewAll}>
							<a href='#' className={styles.link}>
								Посмотреть все
							</a>
							<Icons id={'arrow'} size={{ w: 12, h: 7 }} />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
