// src/features/auth/authSlice.ts

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosPublic from '../../api/axiosPublic';
import axiosPrivate from '../../api/axiosPrivate';
import { AuthState, LoginPayload, LoginResponse, User } from './authType';

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

// Async thunks
export const getProfile = createAsyncThunk<User>('auth/getProfile', async (_, thunkAPI) => {
  try {
    const res = await axiosPrivate.get('/users/my-info');
    return res.data;
  } catch (error: unknown) {
    const axiosError = error as { response?: { data?: { message?: string } } };
    return thunkAPI.rejectWithValue(
      axiosError.response?.data?.message || 'Không lấy được thông tin người dùng'
    );
  }
});

export const login = createAsyncThunk<LoginResponse, LoginPayload>(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axiosPublic.post('/auth/login', { email, password });
      const data = response.data.data;
      localStorage.setItem('accessToken', data.token);
      return data;
    } catch (error: unknown) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      return thunkAPI.rejectWithValue(
        axiosError.response?.data?.message || 'Đăng nhập thất bại'
      );
    }
  }
);

export const register = createAsyncThunk<
  { code: number; message: string; data?: string },
  { username: string; email: string; password: string },
  { rejectValue: string }
>('auth/register', async ({ username, email, password }, thunkAPI) => {
  try {
    const response = await axiosPublic.post('/auth/register', { username, email, password });
    const data = response.data;
    if (data.code !== 1000) {
      return thunkAPI.rejectWithValue(data.message);
    }
    return data;
  } catch (error: unknown) {
    const axiosError = error as { response?: { data?: { message?: string } } };
    return thunkAPI.rejectWithValue(
      axiosError.response?.data?.message || 'Đăng ký thất bại'
    );
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axiosPrivate.post('/auth/logout');
    localStorage.removeItem('accessToken');
    return;
  } catch (error: unknown) {
    const axiosError = error as { response?: { data?: { message?: string } } };
    return thunkAPI.rejectWithValue(
      axiosError.response?.data?.message || 'Đăng xuất thất bại'
    );
  }
});

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: { payload: User }) {
      state.user = action.payload;
      state.loading = false;
    },
    clearAuth(state) {
      state.user = null;
      state.token = null;
      state.loading = false;
      state.error = null;
      localStorage.removeItem('accessToken');
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        // Nếu API trả về user data, cập nhật state.user
        // state.user = action.payload.user || null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Get Profile
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.loading = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Register
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setUser, clearAuth } = authSlice.actions;
export default authSlice.reducer;