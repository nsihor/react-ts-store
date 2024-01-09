import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import {fetchProducts, fetchProductById, fetchProductByCategory} from './operations';
import {IFilter, IProductsState} from "./types";

const initialState: IProductsState = {
    products: [],
    productById: {},
    filter: {category: '', query: ''},
    isLoading: false,
    error: null,
};

const handlePending = (state: IProductsState) => {
    state.isLoading = true;
    state.error = null;
};

const handleFulfilled = (state: IProductsState) => {
    state.isLoading = false;
};

const handleRejected = (state: IProductsState, action: PayloadAction<{ error: string }>) => {
    state.isLoading = false;
    state.error = action.payload.error;
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setFilter(state: IProductsState, action: PayloadAction<IFilter>) {
            state.filter = action.payload;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.productById = action.payload;
            })
            .addCase(fetchProductByCategory.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addMatcher(({type}) => type.endsWith('/pending'), handlePending)
            .addMatcher(({type}) => type.endsWith('/fulfilled'), handleFulfilled)
            .addMatcher(({type}) => type.endsWith('/rejected'), handleRejected),
});

const persistConfig = {
    key: 'products',
    storage,
};

export const productsReducer = persistReducer(persistConfig, productsSlice.reducer);
export const {setFilter} = productsSlice.actions;
