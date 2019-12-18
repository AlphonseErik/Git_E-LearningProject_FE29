import { SEARCH_USER_DETAIL } from "../Action/actionType";

let initialState = [];

const SearchReducer = (state = initialState, { payload, type }) => {

  switch (type) {
    case SEARCH_USER_DETAIL: {
      state = payload
      console.log("payload search", state);
      return [ ...state ];
    }
    default:
      return state;
  }
}

export default SearchReducer;