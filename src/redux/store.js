import {configureStore} from "@reduxjs/toolkit";

let carReducer;
const store = configureStore({
    reducer: {
        cars: carReducer
    }
});

export {
    store
}