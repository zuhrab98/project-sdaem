import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	filtered: {
		region: null,
		metro: null,
		room: null,
		citi: null,
		places: null,
		priceFrom: { price: '0', filterProperty: 'priceFrom' },
		priceTo: { price: '', filterProperty: 'priceTo' },
	},
	sortCards: null,
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setFiltered(state, action) {
			const key = action.payload.filterProperty
			state.filtered[key] = action.payload
		},
		setBreadcrums(state, action) {
			state.breadcrumbs.push(action.payload)
			state.breadcrumbs = state.breadcrumbs.filter(
				(item) => item.page !== action.payload.page
			)
		},
		setFiltersClear(state) {
			state.filtered.priceFrom = { price: '0', filterProperty: 'priceFrom' }
			state.filtered.priceTo = { price: '', filterProperty: 'priceTo' }
			state.filtered.room = null
			state.filtered.citi = null
			state.filtered.region = null
			state.filtered.metro = null
			state.filtered.places = null
			state.sortCards = null
		},
		setSort(state, action) {
			state.sortCards = action.payload
		},
	},
})

export const selectFilter = (state) => state.filter
export const { setFiltered, setBreadcrums, setFiltersClear, setSort } =
	filterSlice.actions

export default filterSlice.reducer
