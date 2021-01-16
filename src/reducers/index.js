import { combineReducers } from "redux";
import products from './productReducer';
import productHandle from './productHandleReducer';

export default combineReducers({
    products,
    productHandle
});
