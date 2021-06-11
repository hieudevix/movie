

const stateDefautl = {
    Film:{tenPhim:"Phim",maPhim:null},
    listFilm : [],
    Cinema:["Rạp Chiếu"],
    listCinema: []

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
            return {...state};
        }
        case 'GET_LIST_CINEMA':{
            state.listCinema = action.listCinema;
            return {...state};
        }
        default: return {...state};
    }
}