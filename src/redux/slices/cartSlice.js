import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalActive: true,
  cartItems: [],
  totalPrice: 0,
};

const filtersSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setModalActive(state, action) {
      state.isModalActive = action.payload;
    },
    addToCart(state, action) {
      const findItem = state.cartItems.find(
        (obj) => obj.id === action.payload.id
      );
      if (findItem) {
        findItem.counter += action.payload.counter;
      } else {
        state.cartItems.push({
          ...action.payload,
        });
      }

      state.totalPrice = state.cartItems.reduce((sum, item) => {
        return sum + item.price * item.counter;
      }, 0);
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.totalPrice = state.cartItems.reduce((sum, item) => {
        return sum + item.price * item.counter;
      }, 0);
    },
    decrement(state, action) {
      const findItem = state.cartItems.find(
        (obj) => obj.id === action.payload.id
      );
      if (findItem) {
        findItem.counter--;
      }
      state.totalPrice = state.cartItems.reduce((sum, item) => {
        return sum + item.price * item.counter;
      }, 0);
    },
    clearAll(state) {
      state.cartItems = [];
      state.totalPrice = 0;
    },
  },
});

export default filtersSlice.reducer;
export const {
  setModalActive,
  addToCart,
  removeFromCart,
  decrement,
  clearAll,
} = filtersSlice.actions;