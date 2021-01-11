import { PRODUCT_TOGGLE } from "../actions/actionType";

const productHandle = (state = {}) => {
    switch(state.type){
        case PRODUCT_TOGGLE:
            return state.productSelected; // ==> productSelected vi` ben `action/index.js showProductDetail() return {type , productSelected}`
        default:
            return state;
    }
}

export default productHandle;
