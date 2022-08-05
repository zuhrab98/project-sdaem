import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	HomeFilters,
	GallerySections,
	NewsSection,
	RentSection,
	StartSection,
} from './index'
import { fetchHomeCards, selectHome } from '../../redux/slices/homeSlice'
import { useAppDispatch } from '../../redux/store'

export const Home = () => {
	const dispatch = useAppDispatch()
	const { itemsCard } = useSelector(selectHome)
	const [items, setItems] = React.useState([])

	React.useEffect(() => {
		dispatch(fetchHomeCards())
	}, [dispatch])

	React.useEffect(() => {
		setItems(itemsCard)
	}, [itemsCard])
  
	return (
		<>
			<HomeFilters />
			<GallerySections />
			<RentSection cards={items} />
			<StartSection />
			<NewsSection />
		</>
	)
}
