import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loading: true,
	currentPage: 1,
	breadcrumbs: [{ page: 'Home', path: '/' }],
}

export const NewsSlice = createSlice({
	name: 'news-detail',
	initialState,
	reducers: {
		setLoadings(state, action) {
			state.loading = action.payload
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload
		},
		setFilterPage(state, action) {
			console.log(Number(action.payload.currentPage))
			state.currentPage = Number(action.payload.currentPage)
		},
	},
})

// Action creators are generated for each case reducer function
export const { setLoadings, setCurrentPage, setFilterPage } = NewsSlice.actions

export default NewsSlice.reducer
