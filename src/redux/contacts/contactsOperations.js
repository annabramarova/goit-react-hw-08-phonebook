import { createAsyncThunk } from '@reduxjs/toolkit';
import {getContacts, addContactApi, deleteContactApi} from 'helpers/contacts-api'

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const data = await getContacts();
            return data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const result = await addContactApi(contact);
            return result;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            await deleteContactApi(id);
            return id;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);