import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../helpers/auth-api'

export const signup = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const result = await api.signup(credentials);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response);
    }
  }
);


export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const result = await api.login(credentials);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response);
    }
  }
);


export const logout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
     const result = await api.logout();
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response);
    }
  }
)

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await api.getCurrent(auth.token);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
)

