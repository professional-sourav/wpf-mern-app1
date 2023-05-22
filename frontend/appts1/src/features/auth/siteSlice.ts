import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    siteInfo: {}
}

const siteSlice = createSlice({
    name: 'site',
    initialState,
    reducers: {},
    extraReducers: {}
});