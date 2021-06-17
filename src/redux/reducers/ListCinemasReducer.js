

const stateDefault = {
    cinemaCodeList:[{cinemaCode:"BHDStar"},{cinemaCode:"CGV"},{cinemaCode:"CineStar"},{cinemaCode:"Galaxy"},{cinemaCode:"LotteCinima"},{cinemaCode:"MegaGS"}],
    listCinemas:[],
    listCinemasDetail:[]
}



export const ListCinemasReducer = (state=stateDefault,action)=>{
    switch(action.type){
        case 'GET_LIST_CINEMAS_DETAIL':{
            let arrayListCinema = [...state.listCinemasDetail, action.listCinemasDetail];
            // arrayListCinema = [...action.listCinemas];
            state.listCinemasDetail = arrayListCinema;

            // state.listCinemas = action.listCinemas;
            return {...state}

        }
        default: return{...state};
    }
}