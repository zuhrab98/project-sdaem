import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
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

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch