import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import api from "../../../utils/api";

export const getCommentsOfVideoById = createAsyncThunk(
    "/comments",
    async (state, action) => {
        const { data } = await api("/commentThreads", {
            params: {
                part: "snippet,replies",
                videoId: state.id,
                pageToken:
                    action.getState().comments.nextPageToken == null
                        ? ""
                        : action.getState().comments.nextPageToken,
            },
        });
        return data;
    }
);

const initialState = {
    loading: false,
    comments: null,
    nextPageToken: "",
    error: "",
};

const commentsSlice = createSlice({
    name: "comments",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(getCommentsOfVideoById.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getCommentsOfVideoById.fulfilled, (state, action) => {
            const currentState = current(state);
            state.loading = false;
            state.comments =
                currentState.comments != null
                    ? [...currentState.comments, ...action.payload?.items]
                    : action.payload?.items;
            state.nextPageToken =
                action.payload.nextPageToken === null
                    ? null
                    : action.payload?.nextPageToken;
        });
        builder.addCase(getCommentsOfVideoById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            // console.log(action.error.message);
        });
    },
});

export default commentsSlice.reducer;
