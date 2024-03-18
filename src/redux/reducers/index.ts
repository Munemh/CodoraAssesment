import { productApi, productSlice } from '../slice/productSlice';
import { combineReducers } from '@reduxjs/toolkit';
const rootReducer = combineReducers({
product: productSlice.reducer,
[productApi.reducerPath]: productApi.reducer
});
export default rootReducer;