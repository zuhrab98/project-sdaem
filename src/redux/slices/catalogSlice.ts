import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { CardsType, Status } from '../../type'

// все его ключи строчки и все его значения тоже строчки <string, string>
// Первое передаем возврощаемый тип вторым аргументы => createAsyncThunk <CardsType[], Record<string, string>
export const fetchCatalogCards = createAsyncThunk<
	CardsType[],
	Record<string, string>
>('catalog/fetchCatalogCardsStatus', async ({ param, order }) => {
	// get <CardsType[]> => сказали, что вернет массив cards
	const { data } = await axios.get<CardsType[]>(
		`https://62b821b603c36cb9b7c248ae.mockapi.io/${param}?sortBy=price&order=${order}`
	)

	return data
})

interface CatalogSliceState {
	currentPage: number
	itemsCard: CardsType[]
	favorites: number[]
	status: Status
}

const initialState: CatalogSliceState = {
	currentPage: 1,
	itemsCard: [],
	favorites: [],
	status: Status.LOADING, // loading | success | error
}

export const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload
		},
		setFav(state, action: PayloadAction<number>) {
			const findId = state.favorites.find((id) => id === action.payload)
			if (findId) {
				state.favorites = state.favorites.filter((id) => id !== action.payload)
			} else {
				state.favorites.push(action.payload)
			}
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCatalogCards.pending, (state) => {
			state.status = Status.LOADING
			state.itemsCard = []
		})
		builder.addCase(
			fetchCatalogCards.fulfilled,
			(state, action: PayloadAction<CardsType[]>) => {
				state.status = Status.SUCCESS
				state.itemsCard = action.payload
			}
		)
		builder.addCase(fetchCatalogCards.rejected, (state) => {
			state.status = Status.ERROR
			state.itemsCard = []
		})
	},
})

// Action creators are generated for each case reducer function
export const { setCurrentPage, setFav } = catalogSlice.actions

export default catalogSlice.reducer
