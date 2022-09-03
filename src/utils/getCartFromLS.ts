import { refreshTotalPrice } from './refreshTotalPrice';

export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = refreshTotalPrice(items);

  return {
    items,
    totalPrice,
  };
};
