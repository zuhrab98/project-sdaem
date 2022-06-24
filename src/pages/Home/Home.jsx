import React from 'react'
import axios from 'axios'

import {
	Layout,
	HomeFilters,
	GallerySections,
	NewsSection,
	RentSection,
	StartSection,
} from './index'

export const Home = () => {
	const [isLoading, setLoading] = React.useState(true)
	const [items, setItems] = React.useState([])
	const [data, setData] = React.useState([])

	const [filterByMetro, setFilterByMetro] = React.useState(null)
	const [filterByRegions, setFilterRegions] = React.useState(null)
	const [filterByRooms, setFilterByRooms] = React.useState(null)
	const [filterByCities, setFilterCities] = React.useState(null)

	React.useEffect(() => {
		// рендерится компонент скелетон
		setLoading(true)

		const fetchData = async () => {
			const itemsResponse = await axios.get(
				`https://62b821b603c36cb9b7c248ae.mockapi.io/items`
			)

			setItems(itemsResponse.data)
			setData(itemsResponse.data)

			// после завершения запроса удоляем компаненту скелетон
			setLoading(false)
		}
		fetchData()
	}, [])

	return (
		<Layout>
			<HomeFilters
				onChangeSortRooms={(rooms) => setFilterByRooms(rooms)}
				valueRooms={filterByRooms}
				onChangeSortCities={(cities) => setFilterCities(cities)}
				valueCities={filterByCities}
			/>
			<GallerySections />
			<RentSection
				cards={items}
				loading={isLoading}
				onChangeSortMetro={(metro) => setFilterByMetro(metro)}
				valueMetro={filterByMetro}
				onChangeSortRegions={(region) => setFilterRegions(region)}
				valueRegions={filterByRegions}
			/>
			<StartSection />
			<NewsSection />
		</Layout>
	)
}
