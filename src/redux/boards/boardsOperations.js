import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addBoard = createAsyncThunk(
  'boards/addBoard',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post('/api', payload);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const featchBoards = createAsyncThunk(
  'boards/featchBoards',
  async (params, thunkAPI) => {
    try {
      const { data } = await axios.get('/api', { params });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const editBoard = createAsyncThunk(
  'boards/editBoard',
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await axios.put('/api', payload);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deletBoard = createAsyncThunk(
  'boards/deletBoard',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.delete('/api', payload);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
