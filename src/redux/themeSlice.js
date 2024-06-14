import { createSlice } from '@reduxjs/toolkit';
import { updateUser } from './auth/authOperations';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    currentTheme: 'light',
  },
  reducers: {
    setTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.currentTheme = action.payload.theme;
    });
  },
});

export const { setTheme } = themeSlice.actions;
export const selectCurrentTheme = state => state.theme.currentTheme;

export default themeSlice.reducer;
