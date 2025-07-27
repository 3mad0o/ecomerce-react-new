import { createSlice } from "@reduxjs/toolkit";
import { get } from "react-hook-form";

const UserSlice = createSlice({
  name: "user",
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
      state.loading = false; // done loading after setting user
    },
    getUser: (state) => {
      return state.user;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    setUserLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: true,
  },
});

export const { setUser, getUser, clearUser, setUserLoading } = UserSlice.actions;
export const userReducer = UserSlice.reducer;
