import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodesService} from "../../services/episodeService";
import {charactersService} from "../../services/characterService";


const initialState ={
    characters: []
}



const getByIds =createAsyncThunk(
    'charactersSlice/getByIds',
    async ({ids}, thunkApi) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1500))
            const {data} = await charactersService.getByIds(ids);
            return thunkApi.fulfillWithValue(data)
        } catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
        }
    }
)



const charactersSlice = createSlice({
    name: 'characterSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getByIds.fulfilled, (state, action) => {
            state.characters = action.payload
            state.isLoading = false
            state.errors = null
        })
        .addCase(getByIds.rejected, (state, action) => {
            state.errors = action.payload
            state.isLoading = false
        })
        .addCase(getByIds.pending, (state) => {
            state.isLoading = true
        })
})

const {reducer: charactersReducer, actions} = charactersSlice;

const charactersActions = {
    ...actions,
    getByIds
}


export {
    charactersReducer,
    charactersActions
}