import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../utils/api";

export const getPopularVideos = createAsyncThunk(
    "videos/home",
    async (state, action) => {
        const response = await api("/videos", {
            params: {
                part: "snippet,contentDetails,statistics",
                chart: "mostPopular",
                maxResults: 20,
                pageToken: "",
            },
        });
        return {
            data: response?.data,
            category: "All",
        };
    }
);

export const getVideosByCategory = createAsyncThunk(
    "videos/home",
    async (state, action) => {
        const response = await api("/search", {
            params: {
                part: "snippet",
                maxResults: 20,
                pageToken: action.getState().homeVideos.nextPageToken,
                q: state.category,
                type: "video",
            },
        });
        return {
            data: response?.data,
            category: state.category,
        };
    }
);

const initialState = {
    loading: false,
    videos: null,
    nextPageToken: null,
    activeCategory: "All",
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
            state.activeCategory = action.payload.category;
        });
        builder.addCase(getPopularVideos.rejected, (state, action) => {
            state.loading = false;
            console.log(action.error.message);
        });
    },
});

export default homeVideosSlice.reducer;
