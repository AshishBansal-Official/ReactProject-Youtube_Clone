import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, provider } from "../../firebase";
import { signInWithPopup, signOut } from "firebase/auth";

export const loginUser = createAsyncThunk("user/login", async () => {
    const result = await signInWithPopup(auth, provider);
    return result;
});

export const logoutUser = createAsyncThunk("user/logout", async () => {
    const result = await signOut(auth);
    return result;
});

const initialState = {
    loading: false,
    accessToken: sessionStorage.getItem("ytd-clone-accessToken")
        ? sessionStorage.getItem("ytd-clone-accessToken")
        : null,
    user: sessionStorage.getItem("ytd-clone-user")
        ? JSON.parse(sessionStorage.getItem("ytd-clone-user"))
        : null,
    error: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.accessToken =
                action?.payload?._tokenResponse?.oauthAccessToken;
            state.user = {
                uid: action?.payload?.user?.uid,
                name: action?.payload?.user?.displayName,
                email: action?.payload?.user?.email,
                photoURL: action?.payload?.user?.photoURL,
            };
            sessionStorage.setItem("ytd-clone-accessToken", state.accessToken);
            sessionStorage.setItem(
                "ytd-clone-user",
                JSON.stringify(state.user)
            );
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            // console.log(action.error.message);
        });
        builder.addCase(logoutUser.fulfilled, (state, action) => {
            state.accessToken = null;
            state.user = null;
            sessionStorage.removeItem("ytd-clone-accessToken");
            sessionStorage.removeItem("ytd-clone-user");
        });
        builder.addCase(logoutUser.rejected, (state, action) => {
            state.error = action.error.message;
            // console.log(action.error.message);
        });
    },
});

export default authSlice.reducer;
