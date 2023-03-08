import { createSlice } from "@reduxjs/toolkit";
import {fetchContacts, addContact, deleteContact} from './operations'

const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

const handlePending = state => {
    state.isLoading = true;
}

const handleError = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.items = payload;
                state.error = null;
            })
            .addCase(fetchContacts.rejected, handleError)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.items.push(payload);
            })
            .addCase(addContact.rejected, (state, {payload})=> {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.error = null;
                const idx = state.items.findIndex(({ id }) => id === payload.id);
                state.items.splice(idx, 1);
            })
            .addCase(deleteContact.rejected, handleError)
        }
            
    });

export default contactsSlice.reducer;