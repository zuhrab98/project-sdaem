import React from 'react'

import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { RootState, useAppDispatch } from 'redux/store'
import { Label } from 'components/Label/Label'
import { NewsCards } from 'components/newsCards/NewsCards'
import data from 'api/data.json'
import { fetchnewsDetail } from 'redux/slices/NewsDetaitSlice'
import { Breadcrumbs } from 'components/Breadcrumbs/Breadcrumbs'
import { NewsCardsDetail } from 'type'
import { Socials } from 'components/Socials/Socials'
import { Icons } from 'components/Icons/Icons'
import { Skeleton } from 'components/Skeleton/Skeleton'
import ContentLoader from 'react-content-loader'

import styles from './NewsDetail.module.scss'

const breadcrumsb = [
    { page: 'Home', path: '/' },
    { page: 'Новости', path: '/news' },
]

export const NewsDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const { newsCardsDetail, status } = useSelector(
        (state: RootState) => state.newsDetail,
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
                        <Label type="primary">{newsCardsDetaill?.date}</Label>
                        <div className={styles.toShare}>
                            <span className={styles.text}>Поделиться</span>
                            <Socials
                                className="socialNews"
                                fill="#664EF9"
                                height={17}
                                socials={socialIcons}
                                width={17}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.mainBlock}>
                {status === 'loading' ?
                    <ContentLoader
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                        height={550}
                        speed={2}
                        viewBox="0 0 860 550"
                        width={860}
                    >
                        <rect height="12" rx="0" ry="0" width="0" x="153" y="180" />
                        <rect height="9" rx="0" ry="0" width="0" x="153" y="192" />
                        <rect height="366" rx="14" ry="14" width="551" x="7" y="7" />
                        <rect height="21" rx="5" ry="5" width="552" x="7" y="397" />
                        <rect height="20" rx="5" ry="5" width="366" x="7" y="477" />
                        <rect height="21" rx="5" ry="5" width="552" x="7" y="422" />
                        <rect height="21" rx="5" ry="5" width="552" x="7" y="450" />
                    </ContentLoader> :
                    <>
                        <div className={styles.imgBlock}>
                            <Icons id="circlesYellow" />
                            <img
                                alt="mainImg"
                                height={563}
                                src={newsCardsDetaill?.img}
                                width={844}
                            />
                        </div>
                        <div className={styles.textBlock}>
                            <p>{newsCardsDetaill?.fullDescription}</p>
                        </div>
                    </>
                }
            </div>

            <div className={styles.newsCards}>
                <div className="container">
                    <h3 className={styles.title}>Читайте также</h3>
                    <div className={styles.cardsRow}>
                        {status === 'loading'
                            ? <Skeleton col={3} />
                            : cardsList.map((cardNews) => (
                                <NewsCards key={cardNews.id} data={cardNews} />
							  ))}
                    </div>
                </div>
            </div>
        </>
    )
}
