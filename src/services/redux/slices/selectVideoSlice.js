import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../utils/api";

export const getVideoById = createAsyncThunk(
    "/watch",
    async (state, action) => {
        const { data } = await api("/videos", {
            params: {
                part: "snippet,statistics",
                id: state.id,
            },
        });
        return data;
    }
);

const initialState = {
    loading: false,
    video: null,
    error: "",
};

const selectVideoSlice = createSlice({
    name: "selectVideo",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getVideoById.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getVideoById.fulfilled, (state, action) => {
            state.loading = false;
            state.video = action.payload.items[0];
        });
        builder.addCase(getVideoById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            // console.log(action.error.message);
        });
    },
});

export default selectVideoSlice.reducer;
