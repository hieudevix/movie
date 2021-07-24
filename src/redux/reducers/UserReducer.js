import { USERLOGIN } from "../../util/setting";
import { LOGIN } from "../actions/type/UserType";

let userLogin = '';

if(localStorage.getItem(USERLOGIN)){
    let usLogin = JSON.parse(localStorage.getItem(USERLOGIN));

    userLogin = usLogin.taiKhoan;
}
const makeid =(length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

console.log(makeid(5));
const stateDefault = {
    isLoading:true,
    infoBookedUser:[],
    listMovieShedule:[],
    userAction:'',
    listUser:[],
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
        case 'GET_LIST_USER':{
            state.listUser = action.listUser;
            return{...state};
        }
        case 'GET_USER_BOOKED':{
            state.infoBookedUser = action.infoBookedUser;
            state.isLoading = false;
            return{...state};
        }
        case 'GET_MOVIE_SHEDULE':{
            let arrayListMovieShedule = [...state.listMovieShedule, action.listMovieShedule];
            // arrayListCinema = [...action.listCinemas];
            state.listMovieShedule = arrayListMovieShedule;
            return{...state};
        }
        case 'RESET_LIST_MOVIE_SHEDULE':{
            state.listMovieShedule = []
            return{...state};
        }
        case 'RESET_LOADING_USER':{
            state.isLoading = true;
            return{...state};
        }
        default:return {...state}
    }
}