import { createSlice } from "@reduxjs/toolkit";
import { register } from "./authOperations";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: builder => builder
        .addCase(register.pending, (state, action) =>state)
        .addCase(register.fulfilled, (state, {payload}) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        })
        .addCase(register.rejected, (state, action)=> state)
});

export default authSlice.reducer;