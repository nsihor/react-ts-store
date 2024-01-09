export interface IProduct {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}

export interface IFilter {
    category: string,
    query: string
}

export interface IProductsState {
    products: [IProduct] | [];
    productById: IProduct | {};
    filter: IFilter;
    isLoading: boolean;
    error: string | null;
}