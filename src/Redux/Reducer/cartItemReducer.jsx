import { ADD_CART_ITEM, CART_ITEM, DELETE_CART_ITEM, COURSE_REGISTING } from "../Action/actionType";

let initialCartItem = [];

const CartItemReducer = (state = initialCartItem, { payload, type }) => {

    switch (type) {
        case ADD_CART_ITEM: {
            console.log("reducer giohang", payload);
            let giohangcapnhat = [...state];
            let index = giohangcapnhat.findIndex(sp =>
                sp.maKhoaHoc === payload.maKhoaHoc);
            if (index !== -1) {
                giohangcapnhat[index].i += 1;
            } else {
                giohangcapnhat.push(payload);
            }
            state = giohangcapnhat;

            return [...state];
        }
        case CART_ITEM: {
            state = payload;
            return [...state];
        }
        case DELETE_CART_ITEM: {
            console.log("payload", payload);
            let index = state.findIndex(sp => sp.maKhoaHoc === payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
            return [...state];
        }
        case COURSE_REGISTING: {
            console.log("thanh toan", payload);
        }
        default:
            return state;
    }
}

export default CartItemReducer;