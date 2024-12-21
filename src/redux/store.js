import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../feature/counter/counterSlice.jsx'

export const store = configureStore({
    reducer:{
        counter: counterReducer,
    }
})