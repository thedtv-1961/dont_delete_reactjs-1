import { PRODUCT_FROM_ADD } from "../actions/productFormType";

const productFormHandle = (state = {}, action) => {
    switch(action.type){
        case PRODUCT_FROM_ADD:
            return action.product; // /src/actions/index.js addNewProduct() -> return {type , product} -> `action.product`
        default:
            return state;
    }
}

export default productFormHandle;
