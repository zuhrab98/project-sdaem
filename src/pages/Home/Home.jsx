import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {
	Layout,
	HomeFilters,
	GallerySections,
	NewsSection,
	RentSection,
	StartSection,
} from './index'

import { setCards, setLoadings } from '../../redux/slices/filterSlice'

export const Home = () => {
	const { rentalCards } = useSelector((store) => store.filter)
	const dispatch = useDispatch()
	const [items, setItems] = React.useState([])

	React.useEffect(() => {
		const fetchData = async () => {
			const itemsResponse = await axios.get(
				`https://62b821b603c36cb9b7c248ae.mockapi.io/items`
			)
			setItems(itemsResponse.data)
			dispatch(setCards(itemsResponse.data))
			// после завершения запроса удоляем компаненту загрузки
			dispatch(setLoadings(false))
		}
		fetchData()
	}, [dispatch])

	return (
		<Layout>
			<HomeFilters />
			<GallerySections />
			<RentSection cards={rentalCards} />
			<StartSection />
			<NewsSection />
		</Layout>
	)
}
