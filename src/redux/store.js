import { configureStore } from '@reduxjs/toolkit'
import catalogSlice from './slices/catalogSlice'
import filterSlice from './slices/filterSlice'
import homeSlice from './slices/homeSlice'
import NewsDetailSlice from './slices/NewsDetaitSlice'
import NewsSlice from './slices/NewsSlice'

export const store = configureStore({
	reducer: {
		filter: filterSlice,
		home: homeSlice,
		catalog: catalogSlice,
		news: NewsSlice,
		newsDetail: NewsDetailSlice,
	},
})
