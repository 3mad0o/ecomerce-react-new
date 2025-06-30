import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  reducers: {
    addToWishlist: (state, action) => {
        // Logic to add an item to the wishlist
        const itemExists = state.wishlistItems.find(
            (item) => item.id === action.payload.id
        );
        if (!itemExists) {
            state.wishlistItems.push(action.payload);
        }
    },
    removeFromWishlist: (state, action) => {
      // Logic to remove an item from the wishlist
    },
    clearWishlist: (state) => {
      // Logic to clear the entire wishlist
    },
  },
  initialState: {
    wishlistItems: [],
  },
});


export const { addToWishlist,removeFromWishlist,clearWishlist } = wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;