import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import api from "../../../utils/api";

export const getRelatedVideos = createAsyncThunk(
    "/relatedVideos",
    async (state, action) => {
        const { data } = await api("/search", {
            params: {
                part: "snippet",
                relatedToVideoId: state.id,
                maxResults: 25,
                type: "video",
            },
        });
        return data;
    }
);

const initialState = {
    loading: false,
    relatedVideos: [],
    error: "",
};

const relatedVideosSlice = createSlice({
    name: "relatedVideos",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(getRelatedVideos.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getRelatedVideos.fulfilled, (state, action) => {
            const currentState = current(state);
            state.loading = false;
            state.relatedVideos =
                currentState.relatedVideos != null
                    ? [...currentState.relatedVideos, ...action.payload?.items]
                    : action.payload?.items;
        });
        builder.addCase(getRelatedVideos.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            // console.log(action.error.message);
        });
    },
});

export default relatedVideosSlice.reducer;
