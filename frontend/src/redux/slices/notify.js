import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {
        error: false,
        message: '',
    }
}

export default createSlice({
    name: 'notify',
    initialState,
    reducers: {
        showNotify: (state, action) => {
            state.data = {...action.payload}
        },
        hideNotify: (state) => {
            state.data = {...initialState}
        }
    }
})