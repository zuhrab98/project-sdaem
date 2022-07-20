import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'

import { Icons } from '../../components/Icons/Icons'
import { Label } from '../../components/Label/Label'
import { NewsCards } from '../../components/newsCards/NewsCards'
import styles from './NewsDetail.module.scss'
import data from './data.json'
import { selectFilter, setBreadcrums } from '../../redux/slices/filterSlice'
import { fetchnewsDetail } from '../../redux/slices/NewsDetaitSlice'
import { Skeleton } from '@mui/material'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'

const breadcrumsb = [
	{ page: 'Home', path: '/' },
	{ page: 'Новости', path: '/news' },
]

export const NewsDetail = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { newsCardsDetail, status } = useSelector((state) => state.newsDetail)

	const [socialIcons, setSocialIcons] = React.useState([])
	const [cardsList, setCardsList] = React.useState([])
	const [newsCardsDetaill, setNewsCardsDetail] = React.useState([])

	React.useEffect(() => {
		dispatch(fetchnewsDetail(id))
	}, [id, dispatch])

	React.useEffect(() => {
		setNewsCardsDetail(newsCardsDetail)
		setSocialIcons(data.socials)
		// Перемешиваем массив
		const shuffled = data?.newsList.sort(() => 0.5 - Math.random())
		// Получаем подмассив из первых 3 элементов после перемешивания
		let selected = shuffled.slice(0, 3)
		setCardsList(selected)
	}, [newsCardsDetail])

	if (status === 'error') {
		alert('Ошибка')
		navigate('/')
	}

	return (
		<>
			<div className={styles.headerSection}>
				<div className={styles.wrapperContainer}>
					<Breadcrumbs
						breadcrumsb={breadcrumsb}
						pagaName={newsCardsDetaill?.title}
					/>
					<h1 className={styles.title1}>
						{newsCardsDetaill && newsCardsDetaill?.title}
					</h1>
					<div className={styles.headerWrapper}>
						<Label tag='div' type='primary'>
							{newsCardsDetaill && newsCardsDetaill?.date}
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
						<img
							src={newsCardsDetaill.img}
							width={844}
							height={563}
							alt='mainImg'
						/>
					</div>
					<div className={styles.textBlock}>
						<p>{newsCardsDetaill?.fullDescription}</p>
					</div>
				</div>
				<div className={styles.newsCards}>
					<div className='container'>
						<h3 className={styles.title}>Читайте также</h3>
						<div className={styles.cardsRow}>
							{status === 'loading'
								? // при загрузке рендерим скелетон
								  [...new Array(3)].map((_, index) => <Skeleton key={index} />)
								: cardsList.map((cardNews) => (
										<NewsCards key={cardNews.id} data={cardNews} />
								  ))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
