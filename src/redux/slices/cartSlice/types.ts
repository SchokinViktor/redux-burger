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
