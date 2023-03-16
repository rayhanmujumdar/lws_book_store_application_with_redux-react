import { createSlice } from "@reduxjs/toolkit";
// initial State
const initialState = {
    list: "All",
    search: ""
}

// make a slice for filter
const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filterList: (state,action) => {
            state.list = action.payload
        },
        filterSearch: (state,action) => {
            state.search = action.payload
        }
    }
})

export default filterSlice.reducer
export const {filterList,filterSearch} = filterSlice.actions