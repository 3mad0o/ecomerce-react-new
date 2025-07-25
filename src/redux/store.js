import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./Cart/CartSlice";
import { wishlistReducer } from "./Wishlist/WishlistSlice";
import { addressModalReducer } from "./Address/AddressModalSlice";
import { modalListReducer } from "./ModalList/ModalListSlice";
import { searchReducer } from "./Search/searchSlice";
import { categoryReducer } from "./Category/CategorySlice";

const store = configureStore({
  reducer: { 
    carts: cartReducer,
    wishlist:wishlistReducer,
    address:addressModalReducer,
    modalList:modalListReducer ,
    search:searchReducer,
    category:categoryReducer
  },

});

export default store;