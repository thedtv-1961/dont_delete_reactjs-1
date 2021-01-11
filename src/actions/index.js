import { PRODUCT_TOGGLE } from "./actionType";

export const showProductDetail = (productSelected) => {
    return {
        type: PRODUCT_TOGGLE,
        productSelected
    }
}
