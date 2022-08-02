import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { NewsCards, Status } from '../../type'

export const fetchNewsCards = createAsyncThunk<
	NewsCards[],
	Record<string, string>
>('newsCard/fetchNewsCardsStatus', async () => {
	const { data } = await axios.get<NewsCards[]>(
		`https://62b821b603c36cb9b7c248ae.mockapi.io/newsCards`
	)
	return data
})

interface NewsSliceState {
	loading: boolean
	currentPage: number
	search: string
	news: NewsCards[]
	status: Status
}

const initialState: NewsSliceState = {
	loading: true,
	currentPage: 1,
	search: '',
	news: [],
	status: Status.LOADING,
}

export const NewsSlice = createSlice({
	name: 'newsCard',
	initialState,
	reducers: {
		setLoadings(state, action: PayloadAction<boolean>) {
			state.loading = action.payload
		},
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload
		},
		setSearch(state, action: PayloadAction<string>) {
			state.search = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchNewsCards.pending, (state) => {
			state.status = Status.LOADING
			state.news = []
		})
		builder.addCase(
			fetchNewsCards.fulfilled,
			(state, action: PayloadAction<NewsCards[]>) => {
				state.status = Status.SUCCESS
				state.news = action.payload
			}
		)
		builder.addCase(fetchNewsCards.rejected, (state) => {
			state.status = Status.ERROR
			state.news = []
		})
	},
})

export const { setLoadings, setCurrentPage, setSearch } = NewsSlice.actions

export default NewsSlice.reducer
