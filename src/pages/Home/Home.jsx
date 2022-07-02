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

export const HomeContext = React.createContext()

export const Home = () => {
	const [isLoading, setLoading] = React.useState(true)
	const [items, setItems] = React.useState([])

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
			// после завершения запроса удоляем компаненту скелетон
			setLoading(false)
		}

		fetchData()
	}, [])

	return (
		<Layout>
			<HomeContext.Provider
				value={{
					items,
					isLoading,
					filterByRooms,
					filterByCities,
					filterByMetro,
					filterByRegions,
				}}
			>
				<HomeFilters
					onChangeSortRooms={(rooms) => setFilterByRooms(rooms)}
					onChangeSortCities={(cities) => setFilterCities(cities)}
				/>
				<GallerySections />
				<RentSection
					onChangeSortMetro={(metro) => setFilterByMetro(metro)}
					onChangeSortRegions={(region) => setFilterRegions(region)}
				/>
			</HomeContext.Provider>

			<StartSection />
			<NewsSection />
		</Layout>
	)
}
