import { combineReducers } from "redux";
import products from './productReducer';
import productHandle from './productHandleReducer';
import productFormHandle from './productFormHandleReducer';
import todoReducer from './todoReducer';

export default combineReducers({
    products,
    productHandle,
    productFormHandle,
    todoReducer
});
