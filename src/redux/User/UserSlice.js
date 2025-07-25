import { createSlice } from "@reduxjs/toolkit";
import { get } from "react-hook-form";

const UserSlice = createSlice({
  name: "user",
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    getUser: (state) => {
      return state.user;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    }
  },
  initialState: {
    user: null,
    isAuthenticated: false,

  },
});


export const { setUser,getUser,clearUser } = UserSlice.actions;
export const userReducer = UserSlice.reducer;