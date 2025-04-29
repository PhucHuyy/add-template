import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMyBusiness } from '../../service/user/getMyBusinessService';

export const fetchBusinessInfo = createAsyncThunk('business/me', async () => {
  const response = await getMyBusiness();
  return response.data;
});

const businessSlice = createSlice({
  name: 'business',
  initialState: {
    isApproved: false,
    status: 'idle',
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBusinessInfo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBusinessInfo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isApproved = action.is_approved ?? false;
      })
      .addCase(fetchBusinessInfo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Lỗi không xác định';
      });
  },
});

export default businessSlice.reducer;
