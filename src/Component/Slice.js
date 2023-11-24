import { createSlice } from "@reduxjs/toolkit";

const Slice=createSlice({
    name:"table",
    initialState:{
        arr:[]
    },
    reducers:{
        handlearr:(state,action)=>{
            state.arr=action.payload
        }
    }
})
export default Slice.reducer
export const {handlearr}=Slice.actions