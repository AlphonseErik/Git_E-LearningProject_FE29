

let initialDanhMuc = [];


export const CategoryReducer =(state =initialDanhMuc,{payload,type})=>{


    switch (type) {
       case "FETCH_DANHMUC":{

           console.log(payload);
           state=payload;
           return [...state];
       }
    
        default:
          return state;
    }
}