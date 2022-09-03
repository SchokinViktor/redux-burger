import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCartFromLS } from '../../utils/getCartFromLS';
import { refreshTotalPrice } from '../../utils/refreshTotalPrice';
import { RootState } from '../store';

export type TCartItem = {
  id: number;
  weight?: number;
  price: number;
  counter: number;
  name?: string;
  imageUrl?: string;
};

export interface ICartSliceState {
  isModalActive: boolean;
  cartItems: TCartItem[];
  totalPrice: number;
}

const cartData = getCartFromLS();

const initialState: ICartSliceState = {
  isModalActive: false,
  cartItems: cartData.items,
  totalPrice: cartData.totalPrice,
};

const filtersSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setModalActive(state, action) {
      state.isModalActive = action.payload;
    },
    addToCart(state, action: PayloadAction<TCartItem>) {
      const findItem = state.cartItems.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.counter += action.payload.counter;
      } else {
        state.cartItems.push({
          ...action.payload,
        });
      }

      state.totalPrice = refreshTotalPrice(state.cartItems);
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      state.totalPrice = refreshTotalPrice(state.cartItems);
    },
    decrement(state, action: PayloadAction<TCartItem>) {
      const findItem = state.cartItems.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.counter--;
      }
      state.totalPrice = refreshTotalPrice(state.cartItems);
    },
    clearAll(state) {
      state.cartItems = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state: RootState) => state.cartReducer;

export default filtersSlice.reducer;
export const { setModalActive, addToCart, removeFromCart, decrement, clearAll } =
  filtersSlice.actions;
