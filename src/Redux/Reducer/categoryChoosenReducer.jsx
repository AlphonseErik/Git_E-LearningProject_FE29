
let initialChoosen = "Design";


const ChoosenCategory = (state = initialChoosen, { payload, type }) => {
  switch (type) {
    case "SET_CATEGORY": {
      console.log("reducer", payload);
      state = payload;
      return state;
    }
    default:
      return state;
  }

}

export default ChoosenCategory;
