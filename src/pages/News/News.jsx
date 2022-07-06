import axios from 'axios'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	setCurrentPage,
	setFilterPage,
	setLoadings,
} from '../../redux/slices/NewsSlice'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'

import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import Skeleton from '../../components/LocationCard/Skeleton'
import { NewsCards } from '../../components/newsCards/NewsCards'
import { Pagination } from '../../components/Pagination/Pagination'
import { Search } from '../../components/Search/Search'
import { Layout } from '../../Layout/Layout'

import styles from './News.module.scss'
import cn from 'classnames'

export const NewsContext = React.createContext()

export const News = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [items, setitems] = React.useState([])
	const [searchInput, setSearchInput] = React.useState('')

	const { breadcrumbs, loading, currentPage } = useSelector(
		(store) => store.news
	)

	React.useEffect(() => {
		const fetchNewsCards = async () => {
			const cartResponse = await axios.get(
				`https://62b821b603c36cb9b7c248ae.mockapi.io/newsCards?page=${currentPage}&limit=10`
			)
			setitems(cartResponse.data)
			dispatch(setLoadings(false))
		}

		fetchNewsCards()
	}, [currentPage, dispatch])

	React.useEffect(() => {
		// парсим наш url и делаем из него объект
		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1))
			dispatch(setFilterPage(params))
			// {currentPage: '1'} пример
		}
	}, [])

	React.useEffect(() => {
		const queryString = qs.stringify({
			currentPage,
		})
		navigate(`?${queryString}`)
	}, [currentPage, navigate])

	// По нажатию на кнопку поиска делаем фильтрацию новостных карточек
	const onClickSearch = async (e) => {
		dispatch(setLoadings(true))
		const search = searchInput ? `search=${searchInput}` : ''

		e.preventDefault()
		const cartResponse = await axios.get(
			`https://62b821b603c36cb9b7c248ae.mockapi.io/newsCards?${search}`
		)

		dispatch(setLoadings(false))
		setitems(cartResponse.data)
	}

	const onPageChange = (number) => {
		dispatch(setCurrentPage(number))
	}

	return (
		<Layout>
			<NewsContext.Provider
				value={{ onClickSearch, setSearchInput, searchInput }}
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
						<Pagination currentPage={currentPage} onPageChange={onPageChange} />
					</div>
				</div>
			</NewsContext.Provider>
		</Layout>
	)
}
