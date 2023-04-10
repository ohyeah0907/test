import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    data: {
        loading: true
    }
}

export default createSlice({
    name: 'loading', 
    initialState, 
    reducers: {
        showLoading: (state) => {
            state.data.loading = false;
        },
        hideLoading: (state) => {
            state = {...initialState};
        }
}})