import { createSlice } from "@reduxjs/toolkit";

const modalListSlice = createSlice({
  name: "modalList",
  initialState: {
    isOpen: false,
    title: "",
    stack: [], // each item = { title, component }
    currentIndex: 0,
    props: {}, // optional: props passed to components
  },
  reducers: {
    openModal: (state, action) => {
      const { stack, title, props = {} } = action.payload;
      state.isOpen = true;
      state.title = title;
      state.stack = stack;
      state.currentIndex = 0;
      state.props = props;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.stack = [];
      state.currentIndex = 0;
      state.title = "";
      state.props = {};
    },
    nextModalScreen: (state, action) => {
      if (state.currentIndex < state.stack.length - 1) {
        state.currentIndex++;
      }
    },
    prevModalScreen: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex--;
      }
    },
    goToModalScreen: (state, action) => {
      state.currentIndex = action.payload;
    },
        pushModalScreen: (state, action) => {
      const newScreens = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];

      state.stack.push(...newScreens);
      state.currentIndex = state.stack.length - 1;
    },
  },
});

export const {
  openModal,
  closeModal,
  nextModalScreen,
  prevModalScreen,
  goToModalScreen,
} = modalListSlice.actions;

export const modalListReducer = modalListSlice.reducer;
