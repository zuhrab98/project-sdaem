import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { filteredApartmentCatalog } from '../../utils/filteredCards'

export const fetchHomeCards = createAsyncThunk(
	'home/fetchHomeCardsStatus',
	async () => {
		const { data } = await axios.get(
			`https://62b821b603c36cb9b7c248ae.mockapi.io/rooms`
		)
		return data
	}
)

const initialState = {
	itemsCard: [],
	status: 'loading', // loading | success | error
}

export const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {
		setCurrentPage(state, action) {
			state.currentPage = action.payload
		},
	},
	extraReducers: {
		[fetchHomeCards.pending]: (state) => {
			state.status = 'loading'
			state.itemsCard = []
		},
		[fetchHomeCards.fulfilled]: (state, action) => {
			state.status = 'success'
			state.itemsCard = action.payload
		},
		[fetchHomeCards.rejected]: (state) => {
			state.status = 'error'
			state.itemsCard = []
		},
	},
})

export const selectHome = (state) => state.home
export const { setCurrentPage } = homeSlice.actions

export default homeSlice.reducer
