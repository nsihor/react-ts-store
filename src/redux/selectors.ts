import { IProductsState } from "./types";

export const getProducts = (state: IProductsState) => state.products;

export const getFilter = (state: IProductsState) => state.filter;
