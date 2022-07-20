import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { filteredApartmentCatalog } from '../../utils/filteredCards'

export const fetchCatalogCards = createAsyncThunk(
	'catalog/fetchCatalogCardsStatus',
	async ({ param, order, filtered }) => {
		const { data } = await axios.get(
			`https://62b821b603c36cb9b7c248ae.mockapi.io/${param}?sortBy=price&order=${order}`
		)
		const filtersCard = filteredApartmentCatalog(
			data,
			filtered.room,
			filtered.citi,
			filtered.priceFrom,
			filtered.priceTo,
			filtered.metro,
			filtered.region,
			filtered.places
		)
		return filtersCard
	}
)

const initialState = {
	currentPage: 1,
	itemsCard: [],
	favorites: [],
	status: 'loading', // loading | success | error
}

export const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {
		setCurrentPage(state, action) {
			state.currentPage = action.payload
		},
		setFav(state, action) {
			const findId = state.favorites.find((id) => id === action.payload)
			if (findId) {
				state.favorites = state.favorites.filter((id) => id !== action.payload)
			} else {
				state.favorites.push(action.payload)
			}
		},
	},
	extraReducers: {
		[fetchCatalogCards.pending]: (state) => {
			state.status = 'loading'
			state.itemsCard = []
		},
		[fetchCatalogCards.fulfilled]: (state, action) => {
			state.status = 'success'
			state.itemsCard = action.payload
		},
		[fetchCatalogCards.rejected]: (state) => {
			state.status = 'error'
			state.itemsCard = []
		},
	},
})

// Action creators are generated for each case reducer function
export const { setCurrentPage, setFav } = catalogSlice.actions

export default catalogSlice.reducer
