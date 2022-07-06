import axios from 'axios'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import Skeleton from '../../components/LocationCard/Skeleton'
import { NewsCards } from '../../components/newsCards/NewsCards'
import { Pagination } from '../../components/Pagination/Pagination'
import { Search } from '../../components/Search/Search'
import { Layout } from '../../Layout/Layout'
import { setLoadings } from '../../redux/slices/NewsSlice'
import styles from './News.module.scss'
import cn from 'classnames'

export const NewsContext = React.createContext()

export const News = () => {
	const [items, setitems] = React.useState([])
	const [searchInput, setSearchInput] = React.useState('')
	const [currentPage, setCurrentPage] = React.useState(1)

	const { breadcrumbs, loading } = useSelector((store) => store.news)
	const dispatch = useDispatch()

	React.useEffect(() => {
		const fetchNewsCards = async () => {
			const cartResponse = await axios.get(
				`https://62b821b603c36cb9b7c248ae.mockapi.io/newsCards?page=${currentPage}&limit=4`
			)
			setitems(cartResponse.data)
			dispatch(setLoadings(false))
		}

		fetchNewsCards()
	}, [currentPage, dispatch])

	// По нажатию на кнопку поиска делаем фильтрацию новостных карточек
	const search = searchInput ? `search=${searchInput}` : ''
	const onClickSearch = async (e) => {
		dispatch(setLoadings(true))

		e.preventDefault()
		const cartResponse = await axios.get(
			`https://62b821b603c36cb9b7c248ae.mockapi.io/newsCards?${search}`
		)

		dispatch(setLoadings(false))
		setitems(cartResponse.data)
	}
	return (
		<Layout>
			<NewsContext.Provider
				value={{ onClickSearch, setSearchInput, searchInput, setCurrentPage }}
			>
				<div className={styles.wrapper}>
					<div className={cn(`${'container'}`, styles.wrapperContainer)}>
						<Breadcrumbs
							pagaName={'Новости'}
							breadcrumsb={breadcrumbs ? breadcrumbs : []}
						/>
						<div className={styles.headerRow}>
							<h1 className={styles.title}>Новости</h1>
							<Search />
						</div>
						<div className={styles.newsCards}>
							{loading
								? // при загрузке рендерим 4 компонентов скелетон
								  [...new Array(4)].map((_, index) => <Skeleton key={index} />)
								: items.map((cardNews) => (
										<NewsCards key={cardNews.id} data={cardNews} />
								  ))}
						</div>
						<Pagination />
					</div>
				</div>
			</NewsContext.Provider>
		</Layout>
	)
}
