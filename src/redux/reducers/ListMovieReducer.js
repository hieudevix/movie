
const stateDefault = {
    listFilmShowing:[],
}


export const ListMovieReducer = (state=stateDefault, action)=>{
    switch(action.type){
        case 'GET_LIST_FILM':{
            state.listFilmShowing= action.listFilm;
            return {...state};
        }
        default: return {...state};
    }
} 