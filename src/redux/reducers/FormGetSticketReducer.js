

const stateDefautl = {
    Film:{tenPhim:"",maPhim:null},
    listFilm : [],
    Cinema:{nameCinema:"", codeCinema:""},
    listCinema: [],
    movieShowTimes:{showTimes:""},
    movieTimeWatch:{time:"", codeShowTimes:"", codeCinema:""},
    listMovieShowTimes: []

}

export const FormGetSticketReducer = (state=stateDefautl, action) =>{
    switch(action.type){
        case 'GET_DANH_SACH_FILM_FORM':{
            state.listFilm = action.listFilm;
            return {...state};
        }
        case 'CHOOSE_FILM':{
            state.Film.tenPhim = action.tenPhim;
            state.Film.maPhim  = action.maPhim;
            state.Cinema.nameCinema = "";
            state.movieShowTimes.showTimes = "";
            state.movieTimeWatch.time = "";
            state.movieTimeWatch.codeShowTimes = "";
            state.movieTimeWatch.codeCinema = "";
            return {...state};
        }
        case 'GET_LIST_CINEMA':{
            state.listCinema = action.listCinema;
            return {...state};
        }
        case 'CHOOSE_CINEMA':{
            state.Cinema.nameCinema = action.nameCinema;
            state.Cinema.codeCinema = action.codeCinema;
            state.movieShowTimes.showTimes = "";
            state.movieTimeWatch.time = "";
            state.movieTimeWatch.codeShowTimes = "";
            state.movieTimeWatch.codeCinema = "";
            return {...state};
        }
        case 'CHOOSE_MOVIE_SHOW_TIME':{
            state.movieShowTimes.showTimes = action.showTimes
            state.movieTimeWatch.time = "";
            state.movieTimeWatch.codeShowTimes = "";
            state.movieTimeWatch.codeCinema = "";
        }
        case 'GET_LIST_MOVIE_SHOW_TIME':{
            state.listMovieShowTimes = action.listMovieShowTimes;
            return {...state};
        }
        case 'CHOOSE_MOVIE_TIME':{
            state.movieTimeWatch.time = action.time;
            state.movieTimeWatch.codeShowTimes = action.codeShowTimes;
            state.movieTimeWatch.codeCinema = action.codeCinema;
            return {...state};
        }
        default: return {...state};
    }
}