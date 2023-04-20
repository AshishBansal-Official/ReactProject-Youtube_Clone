import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import authReducer from "./slices/authSlice";
import homeVideosReducer from "./slices/homeVideosSlice";
import selectVideoReducer from "./slices/selectVideoSlice";
import channelDetailsReducer from "./slices/channelDetailsSlice";
import commentsReducer from "./slices/commentsSlice";
import relatedVideosReducer from "./slices/relatedVideosSlice";
import searchVideosReducer from "./slices/searchVideosSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        homeVideos: homeVideosReducer,
        selectVideo: selectVideoReducer,
        channelDetails: channelDetailsReducer,
        comments: commentsReducer,
        relatedVideos: relatedVideosReducer,
        searchVideos: searchVideosReducer,
    },
    middleware: [thunk],
});

export default store;
