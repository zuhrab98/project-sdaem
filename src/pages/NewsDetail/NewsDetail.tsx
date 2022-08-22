import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'

import { RootState, useAppDispatch } from '../../redux/store'
import { Label } from '../../components/Label/Label'
import { NewsCards } from '../../components/newsCards/NewsCards'
import styles from './NewsDetail.module.scss'
import data from '../../api/data.json'
import { fetchnewsDetail } from '../../redux/slices/NewsDetaitSlice'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { NewsCardsDetail } from '../../type'
import { Socials } from '../../components/Socials/Socials'
import { skeleton } from '../../utils/skeleton'
import { Icons } from '../../components/Icons/Icons'

const breadcrumsb = [
	{ page: 'Home', path: '/' },
	{ page: 'Новости', path: '/news' },
]

export const NewsDetail = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const { newsCardsDetail, status } = useSelector(
		(state: RootState) => state.newsDetail
	)

	const [socialIcons, setSocialIcons] = React.useState([])
	const [cardsList, setCardsList] = React.useState([])
	const [newsCardsDetaill, setNewsCardsDetail] =
		React.useState<NewsCardsDetail>()

	React.useEffect(() => {
		dispatch(fetchnewsDetail(id))
		window.scroll(0, 0)
	}, [id, dispatch])

	React.useEffect(() => {
		setNewsCardsDetail(newsCardsDetail)
		setSocialIcons(data.SOCIALS_NEWS)
		// Перемешиваем массив
		const shuffled = data?.NEWS_LIST.sort(() => 0.5 - Math.random())
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
					<h1 className={styles.title1}>{newsCardsDetaill?.title}</h1>
					<div className={styles.headerWrapper}>
						<Label type='primary'>{newsCardsDetaill?.date}</Label>
						<div className={styles.toShare}>
							<span className={styles.text}>Поделиться</span>
							<Socials
								className='socialNews'
								socials={socialIcons}
								fill='#664EF9'
								width={17}
								height={17}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.mainBlock}>
				<div className={styles.imgBlock}>
				<Icons id='circlesYellow' />
					<img
						src={newsCardsDetaill?.img}
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
							? skeleton(3)
							: cardsList.map((cardNews) => (
									<NewsCards key={cardNews.id} data={cardNews} />
							  ))}
					</div>
				</div>
			</div>
		</>
	)
}
