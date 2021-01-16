import { PRODUCT_TOGGLE } from "../actions/actionType";

const productHandle = (state = {}, action) => {
    switch(action.type){
        case PRODUCT_TOGGLE:
            return action.productSelected; // ==> productSelected vi` ben `action/index.js showProductDetail() return {type , productSelected}`
        default:
            return state;
    }
}

export default productHandle;
