import axios, { AxiosResponse } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://fakestoreapi.com/products';

export const fetchProducts = createAsyncThunk(
    'products/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const { data }: AxiosResponse = await axios.get('/');
            return data;
        } catch (e) {
            if (axios.isAxiosError(e)) {
                return rejectWithValue(e.message);
            }
            throw e;
        }
    }
);

export const fetchProductById = createAsyncThunk(
    'products/fetchOne',
    async (id: number, { rejectWithValue }) => {
        try {
            const { data }: AxiosResponse = await axios.get(`/${id}`);
            return data;
        } catch (e) {
            if (axios.isAxiosError(e)) {
                return rejectWithValue(e.message);
            }
            throw e;
        }
    }
);

export const fetchProductByCategory = createAsyncThunk(
    'products/fetchByCategory',
    async (category: string, { rejectWithValue }) => {
        try {
            const { data }: AxiosResponse = await axios.get(`/category/${category}`);
            return data;
        } catch (e) {
            if (axios.isAxiosError(e)) {
                return rejectWithValue(e.message);
            }
            throw e;
        }
    }
);
