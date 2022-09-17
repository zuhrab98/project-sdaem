import React from 'react'

import { useSelector } from 'react-redux'
import { fetchHomeCards, selectHome } from 'redux/slices/homeSlice'
import { useAppDispatch } from 'redux/store'

import {
    HomeFilters,
    GallerySections,
    NewsSection,
    RentSection,
    StartSection,
} from './index'

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
