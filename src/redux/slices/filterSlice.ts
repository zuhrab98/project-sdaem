import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterPropertyType } from '../../type'
import { RootState } from '../store'

interface FilterSliceState {
	filtered: {
		region: null | FilterPropertyType
		metro: null | FilterPropertyType
		room: null | FilterPropertyType
		citi: null | FilterPropertyType
		places: null | FilterPropertyType
		priceFrom: FilterPropertyType
		priceTo: FilterPropertyType
	}
	sortCards: null | FilterPropertyType
}

const initialState: FilterSliceState = {
	filtered: {
		region: null,
		metro: null,
		room: null,
		citi: null,
		places: null,
		priceFrom: { name: '0', filterProperty: 'priceFrom' },
		priceTo: { name: '', filterProperty: 'priceTo' },
	},
	sortCards: null,
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setFiltered(state, action: PayloadAction<FilterPropertyType>) {
			const key = action.payload.filterProperty
			state.filtered[key] = action.payload
		},
		setFiltersClear(state) {
			state.filtered.priceFrom = { name: '0', filterProperty: 'priceFrom' }
			state.filtered.priceTo = { name: '', filterProperty: 'priceTo' }
			state.filtered.room = null
			state.filtered.citi = null
			state.filtered.region = null
			state.filtered.metro = null
			state.filtered.places = null
			state.sortCards = null
		},
		setSort(state, action: PayloadAction<FilterPropertyType>) {
			state.sortCards = action.payload
		},
	},
})

export const selectFilter = (state: RootState) => state.filter

export const { setFiltered, setFiltersClear, setSort } = filterSlice.actions

export default filterSlice.reducer
