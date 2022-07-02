import React from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import {
	Layout,
	HomeFilters,
	GallerySections,
	NewsSection,
	RentSection,
	StartSection,
} from './index'

import { setLoadings } from '../../redux/slices/filterSlice'

export const HomeContext = React.createContext()

export const Home = () => {
	// const { loading } = useSelector((store) => store.filter)
	const dispatch = useDispatch()
	const [items, setItems] = React.useState([])

	React.useEffect(() => {
		// рендерится компонент скелетон
		const fetchData = async () => {
			const itemsResponse = await axios.get(
				`https://62b821b603c36cb9b7c248ae.mockapi.io/items`
			)
			setItems(itemsResponse.data)
			// после завершения запроса удоляем компаненту скелетон
			dispatch(setLoadings(false))
		}

		fetchData()
	}, [dispatch])

	return (
		<Layout>
			<HomeFilters />
			<GallerySections />
			<RentSection cards={items} />
			<StartSection />
			<NewsSection />
		</Layout>
	)
}
