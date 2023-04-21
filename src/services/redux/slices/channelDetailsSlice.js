import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api2 from "../../../utils/api";

export const getChannelDetails = createAsyncThunk(
    "/channel",
    async (state, action) => {
        const { data } = await api2("/channels", {
            params: {
                part: "snippet,statistics,contentDetails",
                id: state.channelId,
            },
        });
        return data;
    }
);

const initialState = {
    loading: false,
    channel: null,
    error: "",
};

const channelDetailsSlice = createSlice({
    name: "channel",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(getChannelDetails.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getChannelDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.channel = action.payload?.items[0];
        });
        builder.addCase(getChannelDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            // console.log(action.error.message);
        });
    },
});

export default channelDetailsSlice.reducer;
