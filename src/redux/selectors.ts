import { IProductsState } from "./types";

export const getProducts = (state: { products: IProductsState }) => state.products.products;

export const getFilter = (state: IProductsState) => state.filter;
