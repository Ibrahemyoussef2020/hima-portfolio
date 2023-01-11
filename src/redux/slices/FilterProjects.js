import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    web:'all'
}

const filter_Projects  = createSlice({
    name:'filetr_projects',
    initialState,
    reducers:{
        addFilter:(state,action)=>{
            state.web = action.payload || 'all'
        }
    }
})

export const {addFilter} = filter_Projects.actions

export default filter_Projects.reducer


