import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodesService} from "../../services/episodeService";


const initialState = {
    episodes: [],
    info: { prev: null,
            next: null},
    errors: null,
    isLoading: null,
    chapter: null
}


const getAll = createAsyncThunk(
    'episodesSlice/getAll',
    async ({page}, thunkApi) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1500))
            const {data} = await episodesService.getAll(page);
            return thunkApi.fulfillWithValue(data)
        } catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
        }
    }
)


const episodesSlice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers: {
        setChapter: (state, action) => {
            state.chapter = action.payload}
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {info: {prev, next}, results} = action.payload;
                state.pages = {prev, next}
                state.episodes = results
                state.chapter = null

                state.isLoading = false
                state.errors = null

            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload
                state.isLoading = false
            })
            .addCase(getAll.pending, (state) => {
                state.isLoading = true
            })
})


const {reducer: episodesReducer, actions} = episodesSlice;

const episodesActions = {
    ...actions,
    getAll
}

export {
    episodesReducer,
    episodesActions

}