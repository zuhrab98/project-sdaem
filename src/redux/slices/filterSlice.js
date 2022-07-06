import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loading: true,
	rentalCards: [],
	filterByMetro: null,
	filterByRegions: null,
	filterByRooms: null,
	filterByCities: null,
	filterByPriceFrom: null,
	filterByPriceTo: null,
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setLoadings(state, action) {
			state.loading = action.payload
		},
		setCards(state, action) {
			console.log(action)
			state.rentalCards = action.payload
		},
		setFilterByMetro(state, action) {
			state.filterByMetro = action.payload
		},
		setFilterByRegions(state, action) {
			state.filterByRegions = action.payload
		},
		setFilterByRooms(state, action) {
			state.filterByRooms = action.payload
		},
		setFilterByCities(state, action) {
			state.filterByCities = action.payload
		},
		setFilterByPriceFrom(state, action) {
			state.filterByPriceFrom = action.payload
		},
		setFilterByPriceTo(state, action) {
			state.filterByPriceTo = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const {
	setLoadings,
	setCards,
	setFilterByMetro,
	setFilterByRegions,
	setFilterByRooms,
	setFilterByCities,
	setFilterByPriceFrom,
	setFilterByPriceTo,
	setNewsDetail,
} = filterSlice.actions

export default filterSlice.reducer
