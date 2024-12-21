import { createSlice } from "@reduxjs/toolkit";

export const counterSlice= createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increment: state=>{
            state.value+=1
        },
        decrement: state=>{
            state.value-=1
        },
        reset: state=>{
            state.value=0
        },
        IncrementByAmount: (state,action)=>{
            state.value+=action.payload
        }
        

    }
})

export const {increment,decrement,IncrementByAmount,reset} =counterSlice.actions

export default counterSlice.reducer