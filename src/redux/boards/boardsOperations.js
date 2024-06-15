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

export const fetchBoards = createAsyncThunk(
  'boards/fetchBoards',
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
  async ({ id, payload }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/api/boards/update/${id}`, payload);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/api/boards/${id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
