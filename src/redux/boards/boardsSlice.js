import { createSlice } from '@reduxjs/toolkit';
import {
  addBoard,
  deletBoard,
  editBoard,
  featchBoards,
} from './boardsOperations';

const initialState = { loading: false, boards: [], error: null };

const boardSlice = createSlice({
  name: 'boards',
  initialState,
  selectors: { selectBoards: state => state.boards },
  reducers: {
    extraReducers: builder => {
      builder
        .addCase(addBoard.pending, state => {
          state.loading = true;
        })
        .addCase(addBoard.fulfilled, (state, action) => {
          state.loading = false;
          state.boards.push(action.payload);
        })
        .addCase(addBoard.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(featchBoards.pending, state => {
          state.loading = true;
        })
        .addCase(featchBoards.fulfilled, (state, action) => {
          state.loading = false;
          state.boards = action.payload;
        })
        .addCase(featchBoards.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(editBoard.pending, state => {
          state.loading = true;
        })
        .addCase(editBoard.fulfilled, (state, action) => {
          state.loading = false;

          state.boards = state.boards.map(board =>
            board.id === action.payload.id ? action.payload : board
          );
        })
        .addCase(editBoard.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(deletBoard.pending, state => {
          state.loading = true;
        })
        .addCase(deletBoard.fulfilled, (state, action) => {
          state.loading = false;
          state.boards = state.boards.filter(
            board => board.id !== action.payload.id
          );
        })
        .addCase(deletBoard.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  },
});
// export const {  } = boardSlice.actions;

export default boardSlice.reducer;
