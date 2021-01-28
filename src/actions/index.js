import { PRODUCT_TOGGLE } from "./actionType";
import { PRODUCT_FROM_ADD } from "./productFormType";

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
