import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { Icons } from '../../components/Icons/Icons'
import Skeleton from '../../components/LocationCard/Skeleton'
import { NewsCards } from '../../components/newsCards/NewsCards'
import { Pagination } from '../../components/Pagination/Pagination'
import { Search } from '../../components/Search/Search'
import { Layout } from '../../Layout/Layout'
import styles from './News.module.scss'

export const News = () => {
	const [items, setitems] = React.useState([])
	const [isLoading, seLoading] = React.useState(true)
	const [searchInput, setSearchInput] = React.useState('')
	const [currentPage, setCurrentPage] = React.useState(1)

	React.useEffect(() => {
		const fetchNewsCards = async () => {
			const cartResponse = await axios.get(
				`https://62b821b603c36cb9b7c248ae.mockapi.io/newsCards?page=${currentPage}&limit=4`
			)
			setitems(cartResponse.data)
		}
		seLoading(false)
		fetchNewsCards()
	}, [currentPage])

	// По нажатию на кнопку поиска делаем фильтрацию новостных карточек
	const search = searchInput ? `search=${searchInput}` : ''
	const onClickSearch = async (e) => {
		e.preventDefault()
		const cartResponse = await axios.get(
			`https://62b821b603c36cb9b7c248ae.mockapi.io/newsCards?${search}`
		)
		setitems(cartResponse.data)
	}

	return (
		<Layout>
			<div className={styles.wrapper}>
				<div className='container'>
					<Link to='' className={styles.link}>
						<Icons id='home' fill='#4E64F9' />
						<span className={styles.text}>Новости</span>
					</Link>
					<div className={styles.headerRow}>
						<h1 className={styles.title}>Новости</h1>
						<Search
							onClickSearch={onClickSearch}
							setSearchInput={setSearchInput}
							searchInput={searchInput}
						/>
					</div>
					<div className={styles.newsCards}>
						{isLoading
							? // при загрузке рендерим 9 компонентов скелетон
							  [...new Array(items.length)].map((_, index) => (
									<Skeleton key={index} />
							  ))
							: items.map((cardNews) => (
									<NewsCards key={cardNews.id} data={cardNews} />
							  ))}
					</div>
					<Pagination onChangePage={(number) => setCurrentPage(number)} />
				</div>
			</div>
		</Layout>
	)
}
