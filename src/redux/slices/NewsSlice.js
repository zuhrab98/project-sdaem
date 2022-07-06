import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loading: true,
	breadcrumbs: [{ page: 'Home', path: '/' }],
}

export const NewsSlice = createSlice({
	name: 'news-detail',
	initialState,
	reducers: {
		setLoadings(state, action) {
			state.loading = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { setLoadings } = NewsSlice.actions

export default NewsSlice.reducer
