import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

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

    await axios.post('/api/users/signOut');

    clearAuthHeader();
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

export const userCurrent = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const accessToken = thunkAPI.getState().auth.accessToken;
    const controller = new AbortController();
    thunkAPI.signal.addEventListener('abort', () => controller.abort());
    if (!accessToken) {
      return thunkAPI.rejectWithValue('No access token available');
    }
    setAuthHeader(accessToken);
    try {
      const resp = await axios.get('/api/users/current', {
        signal: controller.signal,
      });

      return resp.data;
    } catch (error) {
      toast.error('Failed to fetch user data');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async ({ formData }, thunkAPI) => {
    const accessToken = thunkAPI.getState().auth.accessToken;
    const controller = new AbortController();
    thunkAPI.signal.addEventListener('abort', () => controller.abort());

    if (!accessToken) {
      return thunkAPI.rejectWithValue('No access token available');
    }

    setAuthHeader(accessToken);

    try {
      const response = await axios.patch('/api/users/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        signal: controller.signal,
      });

      return response.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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


export const fetchBackgrounds = async () => {
  try {
    const response = await axios.get('/api/users/backgrounds');
    return response.data;
  } catch (error) {
    console.error('Error fetching backgrounds:', error);
    throw error;
  }
};


