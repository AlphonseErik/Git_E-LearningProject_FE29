
let initialState ='';


export const SearchReducer = (state = initialState,{payload,type})=>{

        
  switch (type) {
      case "tim":{
          console.log("padyload search",payload)
          return payload;
      }
          
  
      default:
return state;
  }



}