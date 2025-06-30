import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: [], // Initial state with three empty objects
    isCartSlideOpen: false, // State to manage the cart side visibility
    isCartLoading: false, // State to manage loading state
  },
  reducers: {
    addToCart: (state, action) => {
      state.carts = [...state.carts, action.payload];
    },
    deleteFromCart: (state, action) => {
      state.carts = state.carts.filter(
        (item) => item.id !== action.payload.id
      );
    },
    editFromCart: (state, action) => {
      const index = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.carts[index] = action.payload;
      }
    },

    toggleCartSide: (state) => {
        state.isCartSlideOpen = !state.isCartSlideOpen;
    }
  },
});

export const { addToCart, deleteFromCart, editFromCart,toggleCartSide } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;