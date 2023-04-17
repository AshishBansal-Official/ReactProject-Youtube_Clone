import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../utils/api";

export const getPopularVideos = createAsyncThunk("videos/home", async () => {
    const response = await api("/videos", {
        params: {
            part: "snippet,contentDetails,statistics",
            chart: "mostPopular",
            regionCode: "IN",
            maxResults: 20,
            pageToken: "",
        },
    });
    return response;
});

const initialState = {
    loading: false,
    videos: null,
    nextPageToken: null,
    error: "",
};

const homeVideosSlice = createSlice({
    name: "home_videos",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(getPopularVideos.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getPopularVideos.fulfilled, (state, action) => {
            state.loading = false;
            state.videos = action.payload.data.items;
            state.nextPageToken = action.payload.data.nextPageToken;
        });
        builder.addCase(getPopularVideos.rejected, (state, action) => {
            state.loading = false;
            console.log(action.error.message);
        });
    },
});

export default homeVideosSlice.reducer;
