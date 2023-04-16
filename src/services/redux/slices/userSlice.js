import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, provider } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const authUser = createAsyncThunk("user/login", async () => {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    console.log(credential.accessToken);
    console.log(result._tokenResponse.oauthAccessToken);
    return result;
});

const initialState = {
    loading: false,
    accessToken: sessionStorage.getItem("ytd-clone-accessToken")
        ? sessionStorage.getItem("ytd-clone-accessToken")
        : null,
    user: sessionStorage.getItem("ytd-clone-user")
        ? sessionStorage.getItem("ytd-clone-user")
        : null,
    error: "",
};

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(authUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(authUser.fulfilled, (state, action) => {
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
            console.log(action.payload);
        });
        builder.addCase(authUser.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
    },
});

export default userSlice.reducer;
