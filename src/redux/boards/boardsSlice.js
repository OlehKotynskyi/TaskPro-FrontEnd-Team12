import { createSlice } from '@reduxjs/toolkit';
import {
  addBoard,
  deleteBoard,
  editBoard,
  fetchBoards,
  getBoard,
} from './boardsOperations';

const initialState = {
  loading: false,
  boards: [],
  error: null,
  currentBoard: null,
};

const boardSlice = createSlice({
  name: 'boards',
  initialState,
  selectors: {
    selectBoards: state => state.boards,
    selectCurrentBoard: state => state.currentBoard,
  },
  extraReducers: builder => {
    builder
      .addCase(addBoard.pending, state => {
        state.loading = true;
      })
      .addCase(addBoard.fulfilled, (state, action) => {
        state.loading = false;
        state.boards.push({ ...action.payload });
      })
      .addCase(addBoard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchBoards.pending, state => {
        state.loading = true;
      })
      .addCase(fetchBoards.fulfilled, (state, action) => {
        state.loading = false;
        state.boards = action.payload;
      })
      .addCase(fetchBoards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editBoard.pending, state => {
        state.loading = true;
      })
      .addCase(editBoard.fulfilled, (state, action) => {
        state.loading = false;
        state.boards = state.boards.map(board =>
          board._id === action.payload._id ? action.payload : board
        );
        if (
          state.currentBoard &&
          state.currentBoard.board._id === action.payload._id
        ) {
          state.currentBoard = { ...state.currentBoard, board: action.payload };
        }
      })
      .addCase(editBoard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteBoard.pending, state => {
        state.loading = true;
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.loading = false;
        state.boards = state.boards.filter(
          board => board._id !== action.payload._id
        );
        if (
          state.currentBoard &&
          state.currentBoard.board._id === action.payload._id
        ) {
          state.currentBoard = null;
        }
      })
      .addCase(deleteBoard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getBoard.pending, state => {
        state.loading = true;
      })
      .addCase(getBoard.fulfilled, (state, action) => {
        state.loading = false;
        state.currentBoard = action.payload;
      })
      .addCase(getBoard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { selectBoards, selectCurrentBoard } = boardSlice.selectors;
export default boardSlice.reducer;
