import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Nullable } from "../globalTypes";
import { GitHubUser, userService } from "../api/servises/userService";
import { RootState } from "../store/store"; //alias
import { isAxiosError } from "axios";

interface UserState {
  user: Nullable<GitHubUser>;
  isLoading: boolean;
  error: Nullable<string>;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null,
};

export const getUserByUserName = createAsyncThunk(
  "members/banMemberById",
  async ({ userName }: { userName: string }, { rejectWithValue }) => {
    try {
      const userData = await userService.getUserByUserName(userName);
      return userData.data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error?.response?.data || error);
      }
      return rejectWithValue(error as Error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserByUserName.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getUserByUserName.fulfilled,
        (state, action: PayloadAction<GitHubUser>) => {
          state.user = action.payload;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(
        getUserByUserName.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload?.message;
        }
      );
  },
});

export const { resetUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;

export const userReducer = userSlice.reducer;
