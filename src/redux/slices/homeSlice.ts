import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { CardsType, Status, Tabs } from '../../type'
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
	tabs: Tabs
}

const initialState: HomeSliceState = {
	itemsCard: [],
	status: Status.LOADING,
	tabs: {
    name: "Квартиры на сутки",
    property: 'Комнаты',
    paramName:'rooms'
  }
}

export const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {
		setTabs(state, action) {
			state.tabs = action.payload
		},
	},
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
export const { setTabs } = homeSlice.actions

export default homeSlice.reducer
