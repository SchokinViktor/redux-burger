import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import filtersReducer from './slices/filtersSlice/filtersSlice';
import cartReducer from './slices/cartSlice/cartSlice';
import productsReducer from './slices/productsSlice/productsSlice';

export const store = configureStore({
  reducer: {
    productsReducer,
    filtersReducer,
    cartReducer,
  },
});

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
