import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "./authOperations";

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
        .addCase(register.rejected, (state, action) => state)
        .addCase(login.pending, (state, action) =>state)
        .addCase(login.fulfilled, (state, {payload}) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        })
        .addCase(login.rejected, (state, action) => state)
        .addCase(logout.pending, (state, action) => state)
        .addCase(logout.fulfilled, (state, {payload}) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        })
        .addCase(logout.rejected, (state, action)=> state)
});

export default authSlice.reducer;