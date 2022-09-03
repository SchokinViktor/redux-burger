import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

type FetchProductsArgs = Record<string, string | number>;

export const fetchProducts = createAsyncThunk(
  'products/fetchProductsStatus',
  async (params: FetchProductsArgs) => {
    const { filterBy, sortBy, order, searchValue, currentPageNumber } = params;
    const response = await fetch(
      `https://63034f6d9eb72a839d7d7b58.mockapi.io/menu?page=${currentPageNumber}&limit=${6}${
        filterBy ? `&type=${filterBy}` : ''
      }&name=${searchValue}&sortBy=${sortBy}&order=${order}`,
    ).then((response) => {
      return response.json();
    });

    return response;
  },
);

export type TProduct = {
  id: number;
  weight: number;
  price: number;
  counter: number;
  name: string;
  imageUrl: string;
  description: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface IProductsSliceState {
  productsData: TProduct[];
  productsCount: number;
  status: Status;
}

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

export const selectProducts = (state: RootState) => state.productsReducer;

export default productsSlice.reducer;
export const { setProductsData } = productsSlice.actions;
