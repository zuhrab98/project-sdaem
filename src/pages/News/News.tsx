import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import cn from 'classnames'
import { useNavigate } from 'react-router'

import {
	setCurrentPage,
	setLoadings,
	fetchNewsCards,
} from 'redux/slices/NewsSlice'
import { usePagination } from 'hooks/usePagination'
import { Breadcrumbs } from 'components/Breadcrumbs/Breadcrumbs'
import { NewsCards } from 'components/newsCards/NewsCards'
import { Pagination } from 'components/Pagination/Pagination'
import { Search } from 'components/Search/Search'

import styles from './News.module.scss'
import { RootState, useAppDispatch } from 'redux/store'
import { Skeleton } from 'components/Skeleton/Skeleton'

const breadcrumsb = [{ page: 'Home', path: '/' }]

export const News: React.FC = (): JSX.Element => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const { loading, currentPage, search } = useSelector(
		(store: RootState) => store.news
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
	}, [dispatch, navigate])

	// По нажатию на кнопку поиска делаем фильтрацию новостных карточек
	const onClickSearch = async (e: React.MouseEvent) => {
		e.preventDefault()
		dispatch(setLoadings(true))
		const searchValue = search ? `search=${search}` : ''
		try {
			const cartResponse = await axios.get(
				`https://62b821b603c36cb9b7c248ae.mockapi.io/newsCards?${searchValue}`
			)
			dispatch(setLoadings(false))
			setitems(cartResponse.data)
		} catch (error) {
			alert('По вашему запросу нет новостей')
		}
	}

	const paginate = (pageNumber: number) => {
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
					{loading ? <Skeleton col={itemsPerPage} /> : newsCards}
				</div>
				<Pagination pageNumbers={pageNumbers} paginate={paginate} />
			</div>
		</div>
	)
}
