import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterTypeEnum } from '../../../components/Filters/Filters';
import { RootState } from '../../store';
import { IFilterSliceState } from './types';


const initialState: IFilterSliceState = {
  filterType: FilterTypeEnum.ALL,
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

export default filtersSlice.reducer;
export const { changeFilter, changeSort, changeSearchValue, changePageNumber } =
  filtersSlice.actions;
