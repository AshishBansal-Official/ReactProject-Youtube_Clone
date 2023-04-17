import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import homeVideosReducer from "./slices/homeVideosSlice";
import thunk from "redux-thunk";

const store = configureStore({
    reducer: {
        auth: authReducer,
        homeVideos: homeVideosReducer,
    },
    middleware: [thunk],
});

export default store;
