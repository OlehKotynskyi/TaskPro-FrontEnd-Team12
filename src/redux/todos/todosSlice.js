import { createSlice } from '@reduxjs/toolkit';
import {
  createTodo,
  getTodo,
  deleteTodo,
  updateTodo,
  changeTodoColumn,
  updateTodoOrder,
} from './todosOperations';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createTodo.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos.push(action.payload);
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getTodo.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTodo.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.todos.findIndex(
          todo => todo._id === action.payload._id
        );
        if (index !== -1) {
          state.todos[index] = action.payload;
        } else {
          state.todos.push(action.payload);
        }
      })
      .addCase(getTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteTodo.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = state.todos.filter(
          todo => todo._id !== action.payload._id
        );
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateTodo.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.todos.findIndex(
          todo => todo._id === action.payload._id
        );
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(changeTodoColumn.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changeTodoColumn.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.todos.findIndex(
          todo => todo._id === action.payload._id
        );
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })
      .addCase(changeTodoColumn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateTodoOrder.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTodoOrder.fulfilled, (state, action) => {
        state.loading = false;
        const columnIndex = state.todos.findIndex(
          column => column._id === action.payload.columnId
        );
        if (columnIndex !== -1) {
          state.todos[columnIndex].todos = action.payload.todos;
        }
      })
      .addCase(updateTodoOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default todosSlice.reducer;
