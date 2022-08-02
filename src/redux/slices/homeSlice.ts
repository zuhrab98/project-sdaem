import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { CardsType, Status } from '../../type'
import { filteredApartmentCatalog } from '../../utils/filteredCards'
import { RootState } from '../store'

export const fetchHomeCards = createAsyncThunk(
	'home/fetchHomeCardsStatus',
	async () => {
		const { data } = await axios.get<CardsType[]>(
			`https://62b821b603c36cb9b7c248ae.mockapi.io/rooms`
		)
		return data
	}
)

interface HomeSliceState {
	itemsCard: CardsType[]
	status: Status
}

const initialState: HomeSliceState = {
	itemsCard: [],
	status: Status.LOADING,
}

export const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchHomeCards.pending, (state) => {
			state.status = Status.LOADING
			state.itemsCard = []
		})
		builder.addCase(
			fetchHomeCards.fulfilled,
			(state, action: PayloadAction<CardsType[]>) => {
				state.status = Status.SUCCESS
				state.itemsCard = action.payload
			}
		)
		builder.addCase(fetchHomeCards.rejected, (state) => {
			state.status = Status.ERROR
			state.itemsCard = []
		})
	},
})

export const selectHome = (state: RootState) => state.home
export default homeSlice.reducer
