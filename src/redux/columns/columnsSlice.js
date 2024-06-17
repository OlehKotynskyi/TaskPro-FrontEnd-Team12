import { createSlice } from '@reduxjs/toolkit';
import {
  createColumn,
  getColumn,
  deleteColumn,
  updateColumn,
} from './columnsOperations';

const columnsSlice = createSlice({
  name: 'columns',
  initialState: {
    columns: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createColumn.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createColumn.fulfilled, (state, action) => {
        state.loading = false;
        state.columns.push(action.payload);
      })
      .addCase(createColumn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getColumn.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getColumn.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.columns.findIndex(
          column => column._id === action.payload._id
        );
        if (index !== -1) {
          state.columns[index] = action.payload;
        } else {
          state.columns.push(action.payload);
        }
      })
      .addCase(getColumn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteColumn.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.loading = false;
        state.columns = state.columns.filter(
          column => column._id !== action.payload._id
        );
      })
      .addCase(deleteColumn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateColumn.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateColumn.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.columns.findIndex(
          column => column._id === action.payload._id
        );
        if (index !== -1) {
          state.columns[index] = action.payload;
        }
      })
      .addCase(updateColumn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default columnsSlice.reducer;
