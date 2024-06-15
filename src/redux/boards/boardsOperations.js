import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const addBoard = createAsyncThunk(
  'boards/addBoard',
  async (payload, thunkAPI) => {
    try {
<<<<<<< HEAD
      const { data } = await axios.post('/api/boards/create', payload);
=======
      const { data } = await axios.post('/api/boards/create', payload); 
>>>>>>> 904ea2b83fc64816461c56130ff85c655b3519fa
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
<<<<<<< HEAD
export const getBoard = createAsyncThunk(
  'boards/oneBoard',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/boards/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
=======

>>>>>>> 904ea2b83fc64816461c56130ff85c655b3519fa

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
<<<<<<< HEAD
      const params = {
        title: payload.title,
        background: payload.background,
        icon: payload.icon,
      };
      const { data } = await axios.patch(
        `/api/boards/update/${payload.id}`,
        params
      );
=======
      const { data } = await axios.patch(`/api/boards/update/${id}`, payload);

>>>>>>> 904ea2b83fc64816461c56130ff85c655b3519fa
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
<<<<<<< HEAD
export const deletBoard = createAsyncThunk(
  'boards/deletBoard',
  async (params, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/api/boards/${params.id}`);
      params.callback();

      return data.deletedBoard;
=======

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/api/boards/${id}`);
      return data;
>>>>>>> 904ea2b83fc64816461c56130ff85c655b3519fa
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
