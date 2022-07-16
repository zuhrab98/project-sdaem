import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loading: true,
	filteredCards: [],
	rentalCards: [],
	filterByMetro: null,
	filterByRegions: null,
	filterByRooms: null,
	filterByCities: null,
	filterByPriceFrom: { price: '', value: 'от' },
	filterByPriceTo: { price: '', value: 'до' },
	breadcrumbs: [{ page: 'Home', path: '/' }],
	sortCards: null,
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setLoadings(state, action) {
			state.loading = action.payload
		},
		setCards(state, action) {
			state.rentalCards = action.payload
		},
		setFilteredCards(state, action) {
			state.filteredCards = action.payload
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
		setBreadcrums(state, action) {
			state.breadcrumbs.push(action.payload)
			state.breadcrumbs = state.breadcrumbs.filter(
				(item) => item.page !== action.payload.page
			)
		},
		setFiltersClear(state) {
			state.filterByPriceFrom = { price: '', value: 'от' }
			state.filterByPriceTo = { price: '', value: 'до' }
			state.filterByRooms = null
		},
		setSort(state, action) {
			state.sortCards = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const {
	setLoadings,
	setCards,
	setFilteredCards,
	setFilterByMetro,
	setFilterByRegions,
	setFilterByRooms,
	setFilterByCities,
	setFilterByPriceFrom,
	setFilterByPriceTo,
	setNewsDetail,
	setBreadcrums,
	setFiltersClear,
	setSort,
} = filterSlice.actions

export default filterSlice.reducer
