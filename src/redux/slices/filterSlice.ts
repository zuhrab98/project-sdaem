import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FilterPropertyType, FilterType } from '../../type'
import { RootState } from '../store'

interface FilterSliceState {
	filtered: {
		region: FilterPropertyType
		metro:  FilterPropertyType
		room: FilterPropertyType
		citi: FilterPropertyType
		places: FilterPropertyType
		priceFrom: FilterPropertyType
		priceTo: FilterPropertyType
	}
	headerSelectName: { name: string; paramName: string }
	sortCards: FilterType
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
    headerSelectName: { name: null, paramName: null },
    sortCards: null,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFiltered(state, action: PayloadAction<FilterType>) {
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
        setSort(state, action: PayloadAction<FilterType>) {
            state.sortCards = action.payload
        },
        setHeaderSelectName(state, action) {
            state.headerSelectName = action.payload
        },
    },
})

export const selectFilter = (state: RootState) => state.filter

export const { setFiltered, setFiltersClear, setSort, setHeaderSelectName } =
	filterSlice.actions

export default filterSlice.reducer
