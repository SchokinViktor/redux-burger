import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterType: "all",
  searchValue: "",
  sortId: 0,
  currentPageNumber: 1,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.filterType = action.payload;
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
