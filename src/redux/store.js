import { combineReducers, configureStore } from "@reduxjs/toolkit";

import filtersReducer from "./slices/filtersSlice";
import cartReducer from "./slices/cartSlice";

const rootReducer = combineReducers({
  filtersReducer,
  cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
