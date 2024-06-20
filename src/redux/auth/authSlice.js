import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  userCurrent,
  updateUser,
  handleGoogleAuth,
} from './authOperations.js';

const initialState = {
  user: { name: '', email: '', avatarURL: null },
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  boards: [],
  backgroundUrl: '',
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearState: () => initialState,
    setBackgroundUrl: (state, action) => {
      state.backgroundUrl = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.user = user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.user = user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = initialState.user;
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      })
      .addCase(userCurrent.pending, state => {
        state.status = 'loading';
        state.isLoggedIn = true;
      })
      .addCase(userCurrent.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.boards = action.payload.boards;
        state.isLoggedIn = true;
      })
      .addCase(userCurrent.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        toast.success('User profile updated successfully');
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.payload;
        toast.error('Failed to update user profile');
      })
      .addCase(handleGoogleAuth.fulfilled, (state, action) => {
        const { accessToken, refreshToken } = action.payload;
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
        state.isLoggedIn = true;
      })
      .addCase(handleGoogleAuth.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { clearState, setBackgroundUrl } = authSlice.actions;

export const selectBackgroundUrl = state => state.auth.backgroundUrl;

export default authSlice.reducer;
