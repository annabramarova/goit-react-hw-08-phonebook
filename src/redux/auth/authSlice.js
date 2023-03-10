import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register, current } from "./authOperations";

const initialState = {
    user: {},
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
};

const handlePending = state => {
    return state.error = null;
};

const handleError = (state, { payload }) => {
    state.error = payload;
    state.isLoggedIn = false;
}

const authSlice = createSlice({
    name: 'auth',
    initialState,

    extraReducers: builder => builder
        .addCase(register.pending, handlePending)
        .addCase(register.fulfilled, (state, {payload}) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        })
        .addCase(register.rejected, handleError)
        .addCase(login.pending, handlePending)
        .addCase(login.fulfilled, (state, {payload}) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        })
        .addCase(login.rejected, handleError)
        .addCase(logout.pending, (state) => {
            state.isRefreshing = true;
            state.error = null;
        })
        .addCase(logout.fulfilled, (state, { payload }) => {
            state.isRefreshing = false;
            state.user = {};
            state.token = null;
            state.isLoggedIn = false;
        })
        .addCase(logout.rejected, (state, { payload }) => {
            state.isRefreshing = false;
            state.error = payload;
        })
        .addCase(current.pending, state => {
            state.isRefreshing = true;
            state.error = null;
        })
        .addCase(current.fulfilled, (state, { payload }) => {
            state.isRefreshing = false;
            state.user = payload;
            state.isLoggedIn = true;
        })
        .addCase(current.rejected, (state, {payload}) => {
            state.isRefreshing = false;
            state.token = null;
            state.error = payload;
        })
});

export default authSlice.reducer;