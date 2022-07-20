import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchnewsDetail = createAsyncThunk(
	'newsDetail/fetchHomeCardsStatus',
	async (id) => {
		const { data } = await axios.get(
			`https://62b821b603c36cb9b7c248ae.mockapi.io/newsCards/${id}`
		)
		return data
	}
)

const initialState = {
	loading: true,
	newsCardsDetail: null,
	status: 'loading',
}

export const NewsDetailSlice = createSlice({
	name: 'news-detail',
	initialState,
	reducers: {
		setLoadings(state, action) {
			state.loading = action.payload
		},
		setNewsDetail(state, action) {
			state.newsDetail = action.payload
		},
	},
	extraReducers: {
		[fetchnewsDetail.pending]: (state) => {
			state.status = 'loading'
			state.newsCardsDetail = []
		},
		[fetchnewsDetail.fulfilled]: (state, action) => {
			state.status = 'success'
			state.newsCardsDetail = action.payload
		},
		[fetchnewsDetail.rejected]: (state) => {
			state.status = 'error'
			state.newsCardsDetail = []
		},
	},
})

export const { setLoadings, setNewsDetail } = NewsDetailSlice.actions

export default NewsDetailSlice.reducer
