
const stateDefault = {
    isLoading:true,
    listFilmShowing:[],
    filmDetail:[],
}


export const ListMovieReducer = (state=stateDefault, action)=>{
    switch(action.type){
        case 'GET_LIST_FILM':{
            state.listFilmShowing= action.listFilm;
            state.isLoading = action.isLoading;
            return {...state};
        }
        case 'GET_DETAIL_FILM':{
            state.filmDetail = action.detailFilm;
            state.isLoading = action.isLoading;
            return {...state};
        }
        case 'RESET_LOADING':{
            state.isLoading = true;
            return {...state};
        }
        
        default: return {...state};
    }
} 