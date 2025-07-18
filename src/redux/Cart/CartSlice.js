import { createSlice } from "@reduxjs/toolkit";
import apiClient from "../../lib/axios_client";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: [], // Initial state with three empty objects
    isCartSlideOpen: false, // State to manage the cart side visibility
    isCartLoading: false, // State to manage loading state
    cartCount: 0, // State to manage the cart count
  },
  reducers: {
    updateCartCount: (state, action) => {
      state.cartCount = action.payload;
    },
    addToCart: (state, action) => {
      state.cartCount += 1; // Increment cart count
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

export const { addToCart, deleteFromCart, editFromCart,toggleCartSide,updateCartCount } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;