import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const createTodo = createAsyncThunk(
  'todos/createTodo',
  async ({ columnId, todoData }, thunkAPI) => {
    try {
      const response = await axios.post(
        `/api/todos/create/${columnId}`,
        todoData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTodo = createAsyncThunk(
  'todos/getTodo',
  async (todoId, thunkAPI) => {
    try {
      const response = await axios.get(`/api/todos/${todoId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (todoId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/todos/${todoId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async ({ todoId, todoData }, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/api/todos/update/${todoId}`,
        todoData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeTodoColumn = createAsyncThunk(
  'todos/changeTodoColumn',
  async ({ todoId, columnId }, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/api/todos/${todoId}/changeOwner/${columnId}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
