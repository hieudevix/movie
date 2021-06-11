const stateDefault = {
    location:["Hồ Chí Minh"],
    listLocation:["Hồ Chí Minh","Hà Nội","Đà Nẵng","Hải Phòng","Biên Hòa","Nha Trang","Bình Dương","Phan Thiết","Hạ Long","Cần Thơ","Vũng Tàu"],
    // listLocation2:[{lo:"Hồ Chí Minh"},{lo:"Hà Nội"},{lo:"Đà Nẵng"},{lo:"Hải Phòng"},{lo:"Biên Hòa"},{lo:"Nha Trang"},{lo:"Bình Dương"},{lo:"Phan Thiết"},{lo:"Hạ Long"},{lo:"Cần Thơ"},{lo:"Vũng Tàu"}
    // ]
    
}

export const LocationReducer = (state=stateDefault,action)=>{
    switch(action.type){
        case "SET_LOCATION":{
            state.location = action.location;
            return {...state};
        }
        default: return{...state};
    }
}