
let initialGioHang =[];

export const GioHangReducer = (state =initialGioHang,{payload,type})=>{

    switch (type) {
         case "THEM_KHOA_HOC":{
             console.log("reducer giohang",payload);
                    state = payload;
                    return state;

                    }
        default:
           return state;
    }
   
}