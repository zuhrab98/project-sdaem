import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

import { Layout } from '../../Layout/Layout'
import { Icons } from '../../components/Icons/Icons'
import { Label } from '../../components/Label/Label'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { NewsCards } from '../../components/newsCards/NewsCards'
import styles from './NewsDetail.module.scss'
import data from './data.json'
import axios from 'axios'

export const NewsDetail = () => {
	// const { newsDetail } = useSelector((store) => store.filter)
	const { id } = useParams()

	const [socialIcons, setSocialIcons] = React.useState([])
	const [mainBlock, setMainBlock] = React.useState({})
	const [newsCards, setNewsCards] = React.useState([])

	const { newsDetail } = useSelector((store) => store.newsDetail)

	React.useEffect(() => {
		const fetchNewsCards = async () => {
			const cartResponse = await axios.get(
				`https://62b821b603c36cb9b7c248ae.mockapi.io/newsCards?id=${Number(id)}`
			)
			setNewsCards(cartResponse.data[0])
		}
		fetchNewsCards()
		setSocialIcons(data.socials)
		setMainBlock(data)
	}, [id])

	console.log(newsCards)

	return (
		<Layout>
			<div className={styles.headerSection}>
				<div className={styles.wrapperContainer}>
					<Breadcrumbs
						pagaName={newsCards?.title}
						breadcrumsb={newsDetail.breadcrums ? newsDetail.breadcrums : []}
					/>
					<h1 className={styles.title1}>{newsCards?.title}</h1>
					<div className={styles.headerWrapper}>
						<Label tag='div' type='primary'>
							{newsCards?.date}
						</Label>
						<div className={styles.toShare}>
							<span className={styles.text}>Поделиться</span>
							{socialIcons &&
								socialIcons.map((item, i) => (
									<a
										className={styles.socialLink}
										key={i}
										target='_blank'
										rel='noreferrer'
										href={`${item.path}`}
									>
										<div className={styles.icon}>
											<Icons
												id={`${item.social}`}
												fill='#664EF9'
												size={{ w: '17', h: '17' }}
											/>
										</div>
									</a>
								))}
						</div>
					</div>
				</div>
			</div>
			<div className={styles.mainBlock}>
				<div className={styles.wrapper}>
					<div className={styles.imgBlock}>
						<img src={newsCards.img} width={844} height={563} alt='mainImg' />
					</div>
					<div className={styles.textBlock}>
						<p dangerouslySetInnerHTML={{ __html: data?.description.text }}></p>
					</div>
				</div>
				<div className={styles.newsCards}>
					<div className='container'>
						<h3 className={styles.title}>Читайте также</h3>
						<div className={styles.cardsRow}>
							{mainBlock.newsList &&
								mainBlock.newsList.map((card, index) => (
									<NewsCards key={index} data={card} />
								))}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
