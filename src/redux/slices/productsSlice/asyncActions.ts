import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchProductsArgs } from "./types";

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
  