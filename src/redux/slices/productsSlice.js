import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProductsStatus",
  async (params) => {
    const { filterBy, sortBy, order, searchValue, currentPageNumber } = params;

    const response = await fetch(
      `https://63034f6d9eb72a839d7d7b58.mockapi.io/menu?page=${currentPageNumber}&limit=${6}${
        filterBy ? `&type=${filterBy}` : ""
      }&name=${searchValue}&sortBy=${sortBy}&order=${order}`
    ).then((response) => {
      return response.json();
    });

    return response;
  }
);

const initialState = {
  productsData: [],
  productsCount: 0,
  status: "loading", //loading | success | error
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductsData(state, action) {
      state.productsData = action.payload;
    },
  },

  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = "success";
      state.productsData = action.payload.items;
      state.productsCount = action.payload.count;
    },
    [fetchProducts.pending]: (state) => {
      state.status = "loading";
      state.productsData = [];
    },
    [fetchProducts.rejected]: (state) => {
      state.status = "error";
      state.productsData = [];
      state.productsCount = 0;
    },
  },
});

export default productsSlice.reducer;
export const { setProductsData } = productsSlice.actions;
