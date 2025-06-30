import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./Cart/CartSlice";
import { wishlistReducer } from "./Wishlist/WishlistSlice";
import { addressModalReducer } from "./Address/AddressModalSlice";
import { modalListReducer } from "./ModalList/ModalListSlice";

const store = configureStore({
  reducer: { 
    carts: cartReducer,
    wishlist:wishlistReducer,
    address:addressModalReducer,
    modalList:modalListReducer 
  },

});

export default store;