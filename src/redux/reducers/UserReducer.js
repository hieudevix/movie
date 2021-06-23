import { USERLOGIN } from "../../util/setting";
import { LOGIN } from "../actions/type/UserType";

let userLogin = '';

if(localStorage.getItem(USERLOGIN)){
    let usLogin = JSON.parse(localStorage.getItem(USERLOGIN));

    userLogin = usLogin.taiKhoan;
}

const stateDefault = {
    userName: userLogin,
    userType:""
}

export const UserReducer = (state=stateDefault, action) => {
    switch(action.type){
        case LOGIN:{
            state.userName = action.userName;
            state.userType = action.userType;
            return {...state}
        }

        default:return {...state}
    }
}