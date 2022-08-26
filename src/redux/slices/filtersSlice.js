import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  typeName: "all",
  searchValue: "",
  sortId: 0,
  currentPageNumber: 1,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.typeName = action.payload;
    },
    changeSort(state, action) {
      state.sortId = action.payload;
    },
    changeSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    changePageNumber(state, action) {
      state.currentPageNumber = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const { changeFilter, changeSort, changeSearchValue, changePageNumber } =
  filtersSlice.actions;
