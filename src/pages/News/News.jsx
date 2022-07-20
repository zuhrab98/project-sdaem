import axios from 'axios'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	setCurrentPage,
	setLoadings,
	fetchNewsCards,
} from '../../redux/slices/NewsSlice'

import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import Skeleton from '../../components/LocationCard/Skeleton'
import { NewsCards } from '../../components/newsCards/NewsCards'
import { Pagination } from '../../components/Pagination/Pagination'
import { Search } from '../../components/Search/Search'

import styles from './News.module.scss'
import cn from 'classnames'
import { usePagination } from '../../hooks/usePagination'
import { useNavigate } from 'react-router'
import { skeleton } from '../../utils/skeleton'

const breadcrumsb = [{ page: 'Home', path: '/' }]

export const News = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { loading, currentPage, search, news } = useSelector(
		(store) => store.news
	)
	const [items, setitems] = React.useState([])
	const [itemsPerPage] = React.useState(8)

	React.useEffect(() => {
		dispatch(fetchNewsCards())
		dispatch(setLoadings(true))
		const fetchNewsCardsFunc = async () => {
			try {
				const { data } = await axios.get(
					`https://62b821b603c36cb9b7c248ae.mockapi.io/newsCards`
				)
				setitems(data)
				dispatch(setLoadings(false))
			} catch (error) {
				alert('Ошибка')
				navigate('/')
			}
		}
		fetchNewsCardsFunc()
		window.scroll(0, 0)
	}, [dispatch])

	// По нажатию на кнопку поиска делаем фильтрацию новостных карточек
	const onClickSearch = async (e) => {
		dispatch(setLoadings(true))
		const searchValue = search ? `search=${search}` : ''
		e.preventDefault()
		const cartResponse = await axios.get(
			`https://62b821b603c36cb9b7c248ae.mockapi.io/newsCards?${searchValue}`
		)
		dispatch(setLoadings(false))
		setitems(cartResponse.data)
	}

	const paginate = (pageNumber) => {
		dispatch(setCurrentPage(pageNumber))
	}

	const { currentItem, pageNumbers } = usePagination(
		currentPage,
		items,
		itemsPerPage
	)

	const newsCards = currentItem.map((cardNews) => (
		<NewsCards key={cardNews.id} data={cardNews} />
	))

	return (
		<div className={styles.wrapper}>
			<div className={cn(`${'container'}`, styles.wrapperContainer)}>
				<Breadcrumbs breadcrumsb={breadcrumsb} pagaName='Новости' />
				<div className={styles.headerRow}>
					<h1 className={styles.title}>Новости</h1>
					<Search onClickSearch={onClickSearch} search={search} />
				</div>
				<div className={styles.newsCards}>
					{loading ? skeleton(itemsPerPage) : newsCards}
				</div>
				<Pagination pageNumbers={pageNumbers} paginate={paginate} />
			</div>
		</div>
	)
}
