import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { NewsCardsDetail, Status } from '../../type'

export const fetchnewsDetail = createAsyncThunk<NewsCardsDetail, string>(
    'newsDetail/fetchHomeCardsStatus',
    async (id) => {
        const { data } = await axios.get<NewsCardsDetail>(
            `https://62b821b603c36cb9b7c248ae.mockapi.io/newsCards/${id}`,
        )

        return data
    },
)

interface NewsDetailSliceState {
	loading: boolean
	newsCardsDetail: null | NewsCardsDetail
	status: Status
}

const initialState: NewsDetailSliceState = {
    loading: true,
    newsCardsDetail: null,
    status: Status.LOADING,
}

export const NewsDetailSlice = createSlice({
    name: 'news-detail',
    initialState,
    reducers: {
        setLoadings(state, action: PayloadAction<boolean>) {
            state.loading = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchnewsDetail.pending, (state) => {
            state.status = Status.LOADING
            state.newsCardsDetail = null
        })
        builder.addCase(
            fetchnewsDetail.fulfilled,
            (state, action: PayloadAction<NewsCardsDetail>) => {
                state.status = Status.SUCCESS
                state.newsCardsDetail = action.payload
            },
        )
        builder.addCase(fetchnewsDetail.rejected, (state) => {
            state.status = Status.ERROR
            state.newsCardsDetail = null
        })
    },
})

export const { setLoadings } = NewsDetailSlice.actions

export default NewsDetailSlice.reducer
