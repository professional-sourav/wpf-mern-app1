import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSiteListing = createAsyncThunk('site/getSiteListing', async (userId: number) => {

    const config: any = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    console.log("UserID:", userId);

    const siteListingResponse = await axios.post(
        'http://localhost:4000/graphql', {
        query: `query GetAllSites($userId: Int) {
            getAllSites(user_id: $userId) {
              id,
              name,
              image,
              _count {
                tasks
              }
            }
          }`,
        variables: {
            user_id: userId
        }
    })

    console.log(siteListingResponse);

    return siteListingResponse;
})

const initialState = {
    loading: false,
    error: null,
    success: false,
    data: {}
}

const siteSlice = createSlice({
    name: 'site',
    initialState,
    reducers: {},
    extraReducers: {
        [getSiteListing.pending.type as any]: (state, action) => {
            state.loading = true;
        },
        [getSiteListing.fulfilled.type as any]: (state, action) => {
            state.loading = false;
            state.data = action.payload.data.data.getAllSites;
            console.log(state.data);
        }
    }
});


export default siteSlice.reducer