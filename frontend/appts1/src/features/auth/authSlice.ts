import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LOGIN } from '../../graphql/query';

export const userLogin = createAsyncThunk(
    'auth/login',
    async (loginData: { email: string, password: string }, { rejectWithValue }) => {
        const config: any = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const response = await axios.post("http://localhost:4000/graphql", {
            query: `query Login($email: String!, $password: String!) {
                login(email: $email, password: $password) {
                    token
                }
            }`,
            variables: {
                email: loginData.email,
                password: loginData.password
            },
        });


        return response;
    }
);

const initialState = {

    loading: false,
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [userLogin.pending as any]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [userLogin.fulfilled as any]: (state, action) => {
            console.log(action.payload);

        },
    }
});

export default authSlice.reducer;