import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    cars: [],
    trigger: null,
    carForUpdate: null
}

let carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setResponse: (state = initialState, action) => {
        state.cars = action.payload
        },
        trigger: state => {
            state.trigger = !state.trigger
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    }
})

const {reducer: carReducer, actions} = carSlice;

const carActions = {
   ...actions
}

export {
    carReducer,
    carActions
}