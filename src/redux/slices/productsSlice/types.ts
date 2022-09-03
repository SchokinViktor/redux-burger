export type TProduct = {
  id: number;
  weight: number;
  price: number;
  counter: number;
  name: string;
  imageUrl: string;
  description: string;
};

export type FetchProductsArgs = Record<string, string | number>;

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface IProductsSliceState {
  productsData: TProduct[];
  productsCount: number;
  status: Status;
}
