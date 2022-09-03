import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './asyncActions';
import { IProductsSliceState, Status } from './types';


const initialState: IProductsSliceState = {
  productsData: [],
  productsCount: 0,
  status: Status.LOADING,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsData(state, action) {
      state.productsData = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = Status.LOADING;
      state.productsData = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.productsData = action.payload.items;
      state.productsCount = action.payload.count;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = Status.ERROR;
      state.productsData = [];
      state.productsCount = 0;
    });
  },
});


export default productsSlice.reducer;
export const { setProductsData } = productsSlice.actions;
