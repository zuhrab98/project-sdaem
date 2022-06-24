import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NewsListSection.module.scss'
import data from '../data.json'
import { NewsCards } from '../../../components/newsCards/NewsCards'

export const NewsListSection = () => {
	const [newscards, setNewsCards] = React.useState([])
  
	setNewsCards(data.newsList)

	return (
		<section className={styles.newsSection}>
			<div className='container'>
				<h3 className={styles.title}>Читайте также</h3>
				<div className={styles.cardsRow}>
					{newscards && newscards.map((card) => <NewsCards data={card} />)}
				</div>
			</div>
		</section>
	)
}
