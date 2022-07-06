import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice'
import NewsDetailSlice from './slices/NewsDetaitSlice'
import NewsSlice from './slices/NewsSlice'

export const store = configureStore({
	reducer: {
		filter: filterSlice,
		newsDetail: NewsDetailSlice,
		news: NewsSlice,
	},
})
