import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addBoard = createAsyncThunk(
  'boards/addBoard',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/boards/create', payload);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const featchBoards = createAsyncThunk(
  'boards/featchBoards',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/boards');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const editBoard = createAsyncThunk(
  'boards/editBoard',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.patch(
        `/api/update/boards/${payload.id}`,
        payload
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deletBoard = createAsyncThunk(
  'boards/deletBoard',
  async (id, thunkAPI) => {
    console.log(id);
    try {
      const { data } = await axios.delete(`/api/boards/${id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
