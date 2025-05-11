import axiosPrivate from "../../api/axiosPrivate";
import axiosPrivateProfileServcie from "../../api/axiosPrivateProfileServcie";
import { adminUser, CountResponse, UserStatsResponse } from "./adminType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface AdminState {
  users: adminUser[];
  userStats: UserStatsResponse | null;
  pendingRequestCount: number | null;
  pendingStudentCount: number | null;
  pendingBusinessCount: number | null;

  draftJobCount: number | null;
  pendingJobCount: number | null;
  acceptedJobCount: number | null;
  rejectedJobCount: number | null;
  loading: boolean;
  error: string | null;
}

const initialState: AdminState = {
  users: [],
  userStats: null,
  loading: false,
  error: null,
  pendingRequestCount: null,
  pendingStudentCount: null,
  pendingBusinessCount: null,

  draftJobCount: null,
  pendingJobCount: null,
  acceptedJobCount: null,
  rejectedJobCount: null,
};

export const fetchUserStats = createAsyncThunk<
  UserStatsResponse,
  void,
  { rejectValue: string }
>("admin/fetchUserStats", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosPrivate.get<{ data: UserStatsResponse }>(
      "/users/stats/status"
    );
    return response.data.data;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || "Failed to fetch users"
    );
  }
});

export const countTotalPendingRequests = createAsyncThunk<
  number,
  void,
  { rejectValue: string }
>("admin/countTotalPendingRequests", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosPrivateProfileServcie.get<CountResponse>(
      "/v1/staff-admin/pending/total"
    );
    return response.data.data;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || "Failed to fetch pending requests"
    );
  }
});

export const countTotalPendingStudentRequests = createAsyncThunk<
  number,
  void,
  { rejectValue: string }
>("admin/countToltalPendingStudentRequests", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosPrivateProfileServcie.get<CountResponse>(
      "/v1/staff-admin/pending/students"
    );
    return response.data.data;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || "Failed to fetch pending requests"
    );
  }
});
export const countTotalPendingBusinessRequests = createAsyncThunk<
  number,
  void,
  { rejectValue: string }
>(
  "admin/countToltalPendingBusinessRequests",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosPrivateProfileServcie.get<CountResponse>(
        "/v1/staff-admin/pending/businesses"
      );
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch pending requests"
      );
    }
  }
);

export const countTotalPendingJobsRequests = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>(
  "admin/countTotalPendingJobsRequests",
  async (status, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.get<CountResponse>(
        `/job-postings/count/status?status=${status}`
      );
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch pending job requests"
      );
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Stats
    builder
      .addCase(fetchUserStats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserStats.fulfilled, (state, action) => {
        state.loading = false;
        state.userStats = action.payload;
      })
      .addCase(fetchUserStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch user stats";
      });

    // Total Pending
    builder
      .addCase(countTotalPendingRequests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(countTotalPendingRequests.fulfilled, (state, action) => {
        state.loading = false;
        state.pendingRequestCount = action.payload;
      })
      .addCase(countTotalPendingRequests.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || "Failed to fetch total pending requests";
      });

    // Student Pending
    builder
      .addCase(countTotalPendingStudentRequests.fulfilled, (state, action) => {
        state.pendingStudentCount = action.payload;
      })
      .addCase(countTotalPendingStudentRequests.rejected, (state, action) => {
        state.error =
          action.payload || "Failed to fetch pending student requests";
      });

    // Business Pending
    builder
      .addCase(countTotalPendingBusinessRequests.fulfilled, (state, action) => {
        state.pendingBusinessCount = action.payload;
      })
      .addCase(countTotalPendingBusinessRequests.rejected, (state, action) => {
        state.error =
          action.payload || "Failed to fetch pending business requests";
      })
      .addCase(countTotalPendingJobsRequests.fulfilled, (state, action) => {
        const status = action.meta.arg;

        switch (status) {
          case -1:
            state.draftJobCount = action.payload;
            break;
          case 0:
            state.pendingJobCount = action.payload;
            break;
          case 1:
            state.acceptedJobCount = action.payload;
            break;
          case 2:
            state.rejectedJobCount = action.payload;
            break;
          default:
            break;
        }
      })
      .addCase(countTotalPendingJobsRequests.rejected, (state, action) => {
        state.error = action.payload || "Failed to fetch job posting count";
      })

      .addCase(countTotalPendingJobsRequests.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
  },
});
export default adminSlice.reducer;
