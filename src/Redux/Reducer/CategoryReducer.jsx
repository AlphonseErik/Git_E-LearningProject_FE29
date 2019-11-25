let initialState = [];


const CategoryReducer = (state = initialState, {payload,type} )=>{
    switch (type) {
       case "FETCH_CATEGORY":{
           console.log(payload);
           state=payload;
           return [...state];
       }
    
        default:
          return state;
    }
}

export default CategoryReducer;