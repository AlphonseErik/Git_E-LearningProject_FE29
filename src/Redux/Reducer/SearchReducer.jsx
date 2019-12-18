import { SEARCH_COURSE } from "../Action/actionType";

let initialState = [];

const SearchReducer = (state = initialState, { payload, type }) => {

  switch (type) {
    case SEARCH_COURSE: {
      console.log("payload search", payload);
      return payload;
    }
    default:
      return state;
  }
}

export default SearchReducer;