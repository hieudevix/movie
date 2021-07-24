

const stateDefault = {
    cinemaCodeList:[{cinemaCode:"BHDStar"},{cinemaCode:"CGV"},{cinemaCode:"CineStar"},{cinemaCode:"Galaxy"},{cinemaCode:"LotteCinima"},{cinemaCode:"MegaGS"}],
    cinemaDetailChoose:{ codeCinema:""},
    listCinemasDetail:[],
    cinemaList:[
        // {nameCinema:'', imgCinema:''}
    ],
    cinemaListByGroup:[],
}
export const ListCinemasReducer = (state=stateDefault,action)=>{
    switch(action.type){
        case 'GET_LIST_CINEMAS_DETAIL':{
            let arrayListCinema = [...state.listCinemasDetail, action.listCinemasDetail];
            // arrayListCinema = [...action.listCinemas];
            state.listCinemasDetail = arrayListCinema;

            // state.listCinemas = action.listCinemas;
            return {...state};

        }
        case 'CHOOSE_CINEMA_DETAIL':{
            
            return {...state};
        }
        case 'GET_LIST_CINEMAS':{
            state.cinemaList = [...state.cinemaList, {nameCinema:action.nameCinema,imgCinema:action.imgCinema}]
            return {...state};
        }
        case 'CLEAR_LIST_CINEMAS':{
            state.cinemaList = [];
            return {...state};
        }
        case 'GET_LIST_CINEMA_INFO':{
            state.cinemaList = {nameCinema:action.nameCinema,imgCinema:action.imgCinema}
            return {...state};
        }
        case 'GET_CINEMA_SYSTEM':{
            state.cinemaListByGroup = action.cinemaListByGroup;
            return {...state};
        }
        default: return{...state};
    }
}