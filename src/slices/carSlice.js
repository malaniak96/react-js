import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    cars: [],
    carForUpdate: null,
    flag: null
}

let carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setResponse: (state = initialState, action) => {
        const cars =  action.payload;
        const carForUpdate= action.payload;
        const flag = action.payload;
        }
    }
})

const {reducer: carReducer, actions: getCars,
    create,
    update,
    deleteCar,
    setCarForUpdate} = carSlice;

const carActions = {
    getCars,
    create,
    update,
    deleteCar,
    setCarForUpdate
}

export {
    carReducer,
    carActions
}