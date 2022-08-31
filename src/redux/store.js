import { combineReducers, configureStore } from "@reduxjs/toolkit";

import filtersReducer from "./slices/filtersSlice";
import cartReducer from "./slices/cartSlice";
import productsReducer from "./slices/productsSlice";

const rootReducer = combineReducers({
  productsReducer,
  filtersReducer,
  cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
