import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface IFilterSliceState {
  filterType: string;
  searchValue: string;
  sortId: number;
  currentPageNumber: number;
}

const initialState: IFilterSliceState = {
  filterType: 'all',
  searchValue: '',
  sortId: 0,
  currentPageNumber: 1,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter(state, action: PayloadAction<string>) {
      state.filterType = action.payload;
    },
    changeSort(state, action: PayloadAction<number>) {
      state.sortId = action.payload;
    },
    changeSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    changePageNumber(state, action: PayloadAction<number>) {
      state.currentPageNumber = action.payload;
    },
  },
});

export const selectFilters = (state: RootState) => state.filtersReducer;

export default filtersSlice.reducer;
export const { changeFilter, changeSort, changeSearchValue, changePageNumber } =
  filtersSlice.actions;
