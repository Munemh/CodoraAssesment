import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getConfig } from '@/networking/backend/apiManager/index';
import { api } from '../rtkApis';
import { store } from '../store';
interface Product {
  productName?: string;
  id?: number;
  quantity?: number | 0;
}

interface ProductState {
  products: any[] | Product[];
  error: object | null;
  isLoading: boolean;
}

const initialState: ProductState = {
  products: [],
  error: null,
  isLoading: false,
};

export const productApi = createApi({
  reducerPath: 'availableProduct',
  baseQuery: fetchBaseQuery({ baseUrl: getConfig() }),
  endpoints: builder => ({
    getProducts: builder.query({
      query: id => ({ url: `products` }),
      // Pick out data and prevent nested properties in a hook or selector
      // transformResponse: response => response?.data,
      // Pick out error and prevent nested properties in a hook or selector
      // transformErrorResponse: (response) => response?.error,
      // `result` is the server response
      // providesTags: (result, error, id) => [{ type: 'Post', id }],
      // // trigger side effects or optimistic updates
      // onQueryStarted(id, { dispatch, getState, extra, requestId, queryFulfilled, getCacheEntry, updateCachedData }) {},
      // // handle subscriptions etc
      // onCacheEntryAdded(id, { dispatch, getState, extra, requestId, cacheEntryRemoved, cacheDataLoaded, getCacheEntry, updateCachedData }) {},
    }),
    getProduct: builder.query({
      query: id => ({ url: `products/${id}` }),
      // Pick out data and prevent nested properties in a hook or selector
      // transformResponse: (response) => response?.data,
      // // Pick out error and prevent nested properties in a hook or selector
      // transformErrorResponse: (response) => response?.error,
      // `result` is the server response
      // providesTags: (result, error, id) => [{ type: 'Post', id }],
      // // trigger side effects or optimistic updates
      // onQueryStarted(id, { dispatch, getState, extra, requestId, queryFulfilled, getCacheEntry, updateCachedData }) {},
      // // handle subscriptions etc
      // onCacheEntryAdded(id, { dispatch, getState, extra, requestId, cacheEntryRemoved, cacheDataLoaded, getCacheEntry, updateCachedData }) {},
    }),
  }),
});

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productAdd: state => {
      state.isLoading = false;
      state.error = null;
    },
    addProduct: (state, action) => {
      const item = state.products.findIndex((product) => product?.id === action.payload.id);

      if (item) {
        state.products[item].quantity += 1;
      } else {
        const newObj: Product = { "productName": action.payload.name, "quantity": 1, id: action.payload.id }
        state.products.push(newObj);

      }
    },
    removeProduct: (state, action) => {
      const item = state.products.findIndex((product) => product?.id === action.payload.id && product.quantity === 1);
      if (item)
        state.products = state.products.filter((item) => item.id !== action.payload)
      else
        state.products[item].quantity -= 1

    },
    cartEmpty: state => {
      state.products = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const { cartEmpty, productAdd, addProduct, removeProduct } =
  productSlice.actions;

export default productSlice.reducer;

export const {
  useGetProductQuery,
  useLazyGetProductQuery,
  useGetProductsQuery,
  useLazyGetProductsQuery,
} = productApi;
