import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	currentPage: 1,
}

export const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {
		setCurrentPage(state, action) {
			state.currentPage = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const {
  setCurrentPage
} = catalogSlice.actions

export default catalogSlice.reducer
