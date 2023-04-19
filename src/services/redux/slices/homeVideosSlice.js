import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import api from "../../../utils/api";

const getMaxResults = () => {
    if (window.innerWidth > 2502) {
        return 42;
    } else if (window.innerWidth > 2126) {
        return 35;
    } else if (window.innderWidth > 1750) {
        return 20;
    } else {
        return 18;
    }
};

export const getPopularVideos = createAsyncThunk(
    "videos/home",
    async (state, action) => {
        const response = await api("/videos", {
            params: {
                part: "snippet,contentDetails,statistics",
                chart: "mostPopular",
                maxResults: getMaxResults(),
                pageToken: action.getState().homeVideos.nextPageToken,
            },
        });
        return {
            data: response?.data,
            activeCategory: "All",
        };
    }
);

export const getVideosByCategory = createAsyncThunk(
    "videos/home",
    async (state, action) => {
        const response = await api("/search", {
            params: {
                part: "snippet",
                maxResults: getMaxResults(),
                pageToken: action.getState().homeVideos.nextPageToken,
                q: state.activeCategory,
                type: "video",
            },
        });
        return {
            data: response?.data,
            activeCategory: state.activeCategory,
        };
    }
);

const initialState = {
    loading: false,
    videos: [],
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
            const currentState = current(state);
            state.loading = false;
            state.videos =
                currentState.activeCategory === action.payload.activeCategory
                    ? [...currentState.videos, ...action.payload.data.items]
                    : action.payload.data.items;
            state.nextPageToken = action.payload.data.nextPageToken;
            state.activeCategory = action.payload.activeCategory;
        });
        builder.addCase(getPopularVideos.rejected, (state, action) => {
            state.loading = false;
            console.log(action.error.message);
        });
    },
});

export default homeVideosSlice.reducer;
