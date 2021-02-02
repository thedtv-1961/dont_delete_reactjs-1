import { PRODUCT_TOGGLE } from "./actionType";
import { PRODUCT_FROM_ADD } from "./productFormType";
import { TODO_FETCH, TODO_FETCH_SUCCESS, TODO_FETCH_FAIL } from "./todoType";

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
        type: TODO_FETCH
    }
}

export const fetchTodoSuccess = (data) => {
    return {
        type: TODO_FETCH_SUCCESS,
        data
    }
}

export const fetchTodoFail = (error) => {
    return {
        type: TODO_FETCH_FAIL,
        error
    }
}
