import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
// import { boardsApi } from 'store/boardsSlice';
// import { clearActiveBoardId } from 'store/activeBoardSlice';

axios.defaults.baseURL = 'https://project-team-12-taskpro-backend.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/signUp',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/users/signUp', credentials);
      setAuthHeader();

      //   await thunkAPI.dispatch(boardsApi.util.invalidateTags(['Boards']));

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/signIn',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/users/signIn', credentials);
      setAuthHeader(data.token);

      //   await thunkAPI.dispatch(boardsApi.util.invalidateTags(['Boards']));

      return data;
    } catch (error) {
      toast.error(
        'Error: "The email address or password is incorrect. Please retry..."'
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    thunkAPI.dispatch({ type: 'auth/clearState' });

    await axios.post('/api/users/logOut');

    
    clearAuthHeader();

    // thunkAPI.dispatch(clearActiveBoardId());
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const currentRefreshToken = thunkAPI.getState().auth.refreshToken;

    if (!currentRefreshToken) {
      return thunkAPI.rejectWithValue('No refresh token available');
    }
    try {
      const response = await axios.post('/api/users/refresh', {
        refreshToken: currentRefreshToken,
      });
      const { accessToken, newRefreshToken } = response.data;

      setAuthHeader(accessToken);

      return { accessToken, refreshToken: newRefreshToken };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const editProfile = createAsyncThunk(
//   'auth/editProfile',
//   async ({ formData, token }, thunkAPI) => {
//     try {
//       const resp = await axios.patch('api/users', formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       return resp.data.user;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const handleGoogleAuth = createAsyncThunk(
//   'auth/handleAuth',
//   async (_, thunkAPI) => {
//     try {
//       const urlParams = new URLSearchParams(window.location.search);
//       const token = urlParams.get('accessToken');

//       if (token) {
//         setAuthHeader(token);
//         thunkAPI.dispatch({
//           type: 'auth/saveTokens',
//           payload: { token },
//         });

//         return { token };
//       } else {
//         return thunkAPI.rejectWithValue(
//           'Access token or refresh token is missing'
//         );
//       }
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
