import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loading: true,
	filterByMetro: null,
	filterByRegions: null,
	filterByRooms: null,
	filterByCities: null,
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setLoadings: (state, action) => {
			state.loading = action.payload
		},
		setFilterByMetro: (state, action) => {
			state.filterByMetro = action.payload
		},
		setFilterByRegions: (state, action) => {
			state.filterByRegions = action.payload
		},
		setFilterByRooms: (state, action) => {
			state.filterByRooms = action.payload
		},
		setFilterByCities: (state, action) => {
			state.filterByCities = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const {
	setLoadings,
	setFilterByMetro,
	setFilterByRegions,
	setFilterByRooms,
	setFilterByCities,
} = filterSlice.actions

export default filterSlice.reducer
