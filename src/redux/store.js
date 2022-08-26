import { combineReducers, configureStore } from "@reduxjs/toolkit";

import filtersReducer from "./slices/filtersSlice";

const rootReducer = combineReducers({
  filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
