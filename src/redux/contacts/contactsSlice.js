import { createSlice } from "@reduxjs/toolkit";
import {fetchContacts, addContact, deleteContact, updateContact} from './contactsOperations'

const initialState = {
    items: [],
    isLoading: false,
    error: null,
    events: null,
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, state => {
                state.isLoading = true;
                state.events = 'fetch';
            })
            .addCase(fetchContacts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.items = payload;
                state.events = null;
            })
            .addCase(fetchContacts.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
                state.events = null;
            })
            .addCase(addContact.pending, state => {
                state.isLoading = true;
                state.events = 'add';
            })
            .addCase(addContact.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.events = null;
                state.items.push(payload);
            })
            .addCase(addContact.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.events = null;
                state.error = payload;
            })
            .addCase(deleteContact.pending, (state, { meta }) => {
                state.isLoading = true;
                state.events = `${meta.arg}`;
            })
            .addCase(deleteContact.fulfilled, (state, { meta }) => {
                state.isLoading = false;
                state.error = null;
                state.events = null;
                const index = state.items.findIndex(item => item.id === meta.arg);
                state.items.splice(index, 1);
            })
            .addCase(deleteContact.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
                state.events = null;
            })
            .addCase(updateContact.pending, state => {
                state.isLoading = true;
                state.events = `update`;
            })
            .addCase(updateContact.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.events = null;
                const index = state.items.findIndex(item => item.id === payload.id);
                state.items.splice(index, 1, payload);
                })
            .addCase(updateContact.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
                state.events = null;
            });
    },
});

export default contactsSlice.reducer;