import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice'
import siteReducer from '../features/auth/siteSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        sites: siteReducer
    }
});