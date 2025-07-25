import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
  name: "category",
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
  initialState: {
    categories: [],
  },
});


export const { categories ,setCategories} = CategorySlice.actions;
export const categoryReducer = CategorySlice.reducer;