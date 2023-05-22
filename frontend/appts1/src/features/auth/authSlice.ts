import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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
                  userInfo {
                    id,
                    email,
                    name,
                  }
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

// initialize userTOken from the localstorage
const userToken = localStorage.getItem('token')
    ? localStorage.getItem('token') : null;

const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {

    loading: false,
    userInfo, // for user object
    userToken, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state, action) => {
            localStorage.removeItem('token');
            state.loading = false;
            state.userInfo = {};
            state.userToken = null;
            state.error = null;
            state.success = false;
        }
    },
    extraReducers: {
        [userLogin.pending as any]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [userLogin.fulfilled as any]: (state, action) => {

            console.log(action.payload.headers);

            state.loading = false;

            const { data } = action.payload;

            try {
                const token = data.data.login?.token;

                if (token) {

                    const userInfo = data.data.login.userInfo;
                    state.userToken = token;
                    state.userInfo = userInfo;
                    state.success = true;

                    localStorage.setItem('token', token);
                    localStorage.setItem('userInfo', JSON.stringify(userInfo));

                } else {
                    state.success = false;
                }

            } catch (error) {
                state.success = false;
                console.error(error);
            }
        },
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;