import { PRODUCT_TOGGLE } from "./actionType";
import { PRODUCT_FROM_ADD } from "./productFormType";
import { FETCH_TODO_LIST_FAIL, FETCH_TODO_LIST_SUCCESS, TODO_LIST } from "./todoType";

export const showProductDetail = (productSelected) => {
    return {
        type: PRODUCT_TOGGLE,
        productSelected
    }
}

export const addNewProduct = (newProduct) => {
    return {
        type: PRODUCT_FROM_ADD,
        product: newProduct
    }
}

export const fetchTodo = () => {
    return {
        type: TODO_LIST,
    }
}

export const fetchToDoSuccess = (todos) => {
    return {
        type: FETCH_TODO_LIST_SUCCESS,
        todos
    }
}

export const fetchToDoFail = (error) => {
    return {
        type: FETCH_TODO_LIST_FAIL,
        error
    }
}
