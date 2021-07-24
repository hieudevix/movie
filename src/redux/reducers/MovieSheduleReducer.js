const stateDefault = {
    listMovieShedule:[],
    listMovieSheduleCinema:{}
}

export const MovieSheduleReducer = (state=stateDefault, action) => {
    switch(action.type){
        
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
        case 'GET_MOVIE_SHEDULE_BY_CINEMA':{
            state.listMovieSheduleCinema = action.listMovieSheduleCinema;
            return {...state};
        }
        default:return {...state}
    }
}