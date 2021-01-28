import { combineReducers } from "redux";
import products from './productReducer';
import productHandle from './productHandleReducer';
import productFormHandle from './productFormHandleReducer';

export default combineReducers({
    products,
    productHandle,
    productFormHandle
});
