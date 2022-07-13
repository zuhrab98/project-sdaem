import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loading: true,
	newsDetail: null,
	breadcrums: [
		{ page: 'Home', path: '/' },
		{ page: 'Новости', path: '/news' },
	],
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
})

// Action creators are generated for each case reducer function
export const { setLoadings, setNewsDetail } = NewsDetailSlice.actions

export default NewsDetailSlice.reducer
