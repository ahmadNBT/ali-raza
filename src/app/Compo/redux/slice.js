"use client"
import { createSlice } from "@reduxjs/toolkit"

const addingslice = createSlice({
    name:'addingslice',
    initialState:{
        lefti:false,
        tabs: "Home"
    },
    reducers:{
        leftn:(state)=>{
            return{
                ...state,lefti:true
            }
        },
        rightn:(state,action)=>{
            return{
                ...state,lefti:false
            }
        },
        changeTab:(state, action) => {
            state.tabs = action.payload
        }
    }
})
export const {leftn,rightn} = addingslice.actions
export default addingslice.reducer