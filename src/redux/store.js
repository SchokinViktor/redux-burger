import { configureStore } from '@reduxjs/toolkit'

import FilterReducer from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    filter: FilterReducer,
  },
})

console.log(store);