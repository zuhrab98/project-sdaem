import axios from 'axios'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentPage, setLoadings } from '../../redux/slices/NewsSlice'

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
	const { loading, currentPage } = useSelector((store) => store.news)
	const { breadcrumbs } = useSelector((store) => store.filter)

	const [items, setitems] = React.useState([])
	const [searchInput, setSearchInput] = React.useState('')
	const [itemsPerPage] = React.useState(8)

	React.useEffect(() => {
		const fetchNewsCards = async () => {
			const cartResponse = await axios.get(
				`https://62b821b603c36cb9b7c248ae.mockapi.io/newsCards`
			)
			setitems(cartResponse.data)
			dispatch(setLoadings(false))
		}
		fetchNewsCards()
		window.scroll(0, 0)
	}, [currentPage, dispatch])

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

	const paginate = (pageNumber) => {
		dispatch(setCurrentPage(pageNumber))
	}

	// получаем индекс первой страницы, последней
	const lastItemIndex = currentPage * itemsPerPage
	const firstItemIndex = lastItemIndex - itemsPerPage
	const currentItem = items.slice(firstItemIndex, lastItemIndex)

	return (
		<Layout>
			<NewsContext.Provider
				value={{ onClickSearch, setSearchInput, searchInput }}
			>
				<div className={styles.wrapper}>
					<div className={cn(`${'container'}`, styles.wrapperContainer)}>
						<Breadcrumbs pagaName={'Новости'} breadcrumsb={breadcrumbs} />
						<div className={styles.headerRow}>
							<h1 className={styles.title}>Новости</h1>
							<Search />
						</div>
						<div className={styles.newsCards}>
							{loading
								? // при загрузке рендерим скелетон
								  [...new Array(itemsPerPage)].map((_, index) => (
										<Skeleton key={index} />
								  ))
								: currentItem.map((cardNews) => (
										<NewsCards key={cardNews.id} data={cardNews} />
								  ))}
						</div>
						<Pagination
							itemsPerPage={itemsPerPage}
							totalItems={items.length}
							paginate={paginate}
						/>
					</div>
				</div>
			</NewsContext.Provider>
		</Layout>
	)
}
