

const stateDefault = {
    cinemaCodeList:[{cinemaCode:"BHDStar"},{cinemaCode:"CGV"},{cinemaCode:"CineStar"},{cinemaCode:"Galaxy"},{cinemaCode:"LotteCinima"},{cinemaCode:"MegaGS"}],
    listCinemas:[]
}



export const ListCinemasReducer = (state=stateDefault,action)=>{
    switch(action.type){
        case 'GET_LIST_CINEMAS':{
            let arrayListCinema = [...state.listCinemas, action.listCinemas];
            // arrayListCinema = [...action.listCinemas];
            state.listCinemas = arrayListCinema;

            // state.listCinemas = action.listCinemas;
            return {...state}

        }
        default: return{...state};
    }
}