import { ADD_CART_ITEM, CART_ITEM } from "../Action/actionType";

let initialCartItem = [];

const CartItemReducer = (state = initialCartItem, { payload, type }) => {

    switch (type) {
        case ADD_CART_ITEM: {
            console.log("reducer giohang", payload);
            state = payload;
            return state;
        }
        case CART_ITEM: {
            state = payload;
            return [...state];
        }
        default:
            return state;
    }
}

export default CartItemReducer;