import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fake product database
const fakeProducts = [
  {
    id: 1,
    name: "Velvet Sneaker",
    size: "MD",
    price: "$20.00",
    quantity: 2,
    image: "https://readymadeui.com/images/product14.webp",
  },
  {
    id: 2,
    name: "Smart Watch Timex",
    size: "SM",
    price: "$60.00",
    quantity: 1,
    image: "https://readymadeui.com/images/watch5.webp",
  },
  {
    id: 3,
    name: "French Connection",
    size: "LG",
    price: "$40.00",
    quantity: 1,
    image: "https://readymadeui.com/images/watch4.webp",
  },
  {
    id: 4,
    name: "Leather Wallet",
    size: "SM",
    price: "$35.00",
    quantity: 1,
    image: "https://readymadeui.com/images/product8.webp",
  },
  {
    id: 5,
    name: "Running Shoes",
    size: "XL",
    price: "$70.00",
    quantity: 1,
    image: "https://readymadeui.com/images/product6.webp",
  },
  {
    id: 6,
    name: "Bluetooth Headphones",
    size: "One",
    price: "$90.00",
    quantity: 1,
    image: "https://readymadeui.com/images/headphone1.webp",
  },
  // ... Add more as needed
];

// Simulate API delay
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// Thunk: simulate fetching and filtering fake data
export const getProducts = createAsyncThunk(
  "search/getProducts",  // also changed the action name to match slice name (optional)
  async ({ page = 1, limit = 3 }, { getState }) => {
    const { searchKey } = getState().search;  // <-- FIXED here

    await delay(500); // simulate loading

    const filtered = fakeProducts.filter((product) =>
      product.name.toLowerCase().includes(searchKey.toLowerCase())
    );

    // Pagination logic stays the same
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginated = filtered.slice(start, end);

    return {
      items: paginated,
      hasMore: end < filtered.length,
    };
  }
);


// Slice
const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchKey: "",
    products: [],
    isSearchLoading: false,
    page: 1,
    hasMore: true,
    isOpenSearch:false,
  },
  reducers: {
    openSearchModal:(state,action)=>{
        state.isOpenSearch =!state.isOpenSearch;
    },
    closeModal:(state,action)=>{
      state.isOpenSearch =false;
      state.searchKey ='';
      state.products =[];

    },
    search: (state, action) => {
      state.searchKey = action.payload.searchKey;
      state.products = [];
      state.page = 1;
      state.hasMore = true;
    },
    incrementPage: (state) => {
      state.page += 1;
    },
    resetProducts: (state) => {
      state.products = [];
      state.page = 1;
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isSearchLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = [...state.products, ...action.payload.items];
        state.hasMore = action.payload.hasMore;
        state.isSearchLoading = false;
      })
      .addCase(getProducts.rejected, (state) => {
        state.isSearchLoading = false;
      });
  },
});

export const { search, incrementPage, resetProducts,openSearchModal,closeModal } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
