import { createSlice } from "@reduxjs/toolkit";

const AddressModalSlice = createSlice({
  name: "addresses",
  initialState: {
    addresses: [], // Initial state with three empty objects
    isAddressModalOpen: false, // State to manage the cart side visibility
    isAddressModalLoading: false, // State to manage loading state
    selectedAddress: null, // State to manage the selected address
    index: 0,
    addressModalLists: [
      {
        title: "Addresses",
        component: "ChangeAddressList",
        children: [
          {
            title: "Edit Address",
            component: "EditAddress",
          },
        ],
      },
      {
        title: "Create Address",
        component: "CreateAddress",
      },
    ],
  },
  reducers: {
    toggleAddressModal: (state, action) => {
      state.isAddressModalOpen = !state.isAddressModalOpen; // Set the cart side visibility to true
    },

    editAddress: (state, action) => {
      state.selectedAddress = action.payload;
    },
    closeAddressModal: (state) => {
      state.isAddressModalOpen = false; // Set the cart side visibility to false
      state.selectedAddress = null; // Reset the selected address
      state.index = 0; // Reset the loading state
    },
    changeAddressModalIndex: (state, action) => {
      state.index = action.payload; // Update the index based on the action payload
    }
  },
});

export const { closeAddressModal,editAddress,toggleAddressModal,changeAddressModalIndex } =
  AddressModalSlice.actions;
export const addressModalReducer = AddressModalSlice.reducer;
