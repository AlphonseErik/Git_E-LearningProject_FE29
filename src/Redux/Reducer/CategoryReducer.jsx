import { FETCH_CATEGORY } from "../Action/actionType";

let initialState = [];

const CategoryReducer = (state = initialState, {payload,type} )=>{
    switch (type) {
       case FETCH_CATEGORY:{
           state=payload;
           return [...state];
       }
    
        default:
          return state;
    }
}

export default CategoryReducer;