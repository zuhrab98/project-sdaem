import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchNewsCards = createAsyncThunk(
	'newsCard/fetchNewsCardsStatus',
	async () => {
		const { data } = await axios.get(
			`https://62b821b603c36cb9b7c248ae.mockapi.io/newsCards`
		)
		console.log(data)
		return data
	}
)

const initialState = {
	loading: true,
	currentPage: 1,
	search: '',
	news: [],
	state: 'loading',
}

export const NewsSlice = createSlice({
	name: 'newsCard',
	initialState,
	reducers: {
		setLoadings(state, action) {
			state.loading = action.payload
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload
		},
		setFilterPage(state, action) {
			state.currentPage = Number(action.payload.currentPage)
		},
		setSearch(state, action) {
			state.search = action.payload
		},
		extraReducers: {
			[fetchNewsCards.pending]: (state) => {
				state.status = 'loading'
				state.news = []
			},
			[fetchNewsCards.fulfilled]: (state, action) => {
				state.status = 'success'
				state.news = action.payload
			},
			[fetchNewsCards.rejected]: (state) => {
				state.status = 'error'
				state.news = []
			},
		},
	},
})

export const { setLoadings, setCurrentPage, setFilterPage, setSearch } =
	NewsSlice.actions

export default NewsSlice.reducer
