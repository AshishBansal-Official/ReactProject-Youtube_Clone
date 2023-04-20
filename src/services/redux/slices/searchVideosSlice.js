import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../utils/api";

export const getVideosBySearch = createAsyncThunk(
    "videos/search",
    async (state, action) => {
        const { data } = await api("/search", {
            params: {
                part: "snippet",
                maxResults: 20,
                q: state.query,
                type: "video",
            },
        });
        return data;
    }
);

const initialState = {
    loading: false,
    videos: [],
    error: "",
};

const searchVideosSlice = createSlice({
    name: "searchVideos",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(getVideosBySearch.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getVideosBySearch.fulfilled, (state, action) => {
            state.loading = false;
            state.videos = action.payload?.items;
        });
        builder.addCase(getVideosBySearch.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            // console.log(action.error.message);
        });
    },
});

export default searchVideosSlice.reducer;
