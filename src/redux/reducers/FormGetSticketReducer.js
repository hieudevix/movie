

const stateDefautl = {
    listFilm : [],

}

export const FormGetSticketReducer = (state=stateDefautl, action) =>{
    switch(action.type){
        case 'GET_DANH_SACH_FILM_FORM':{
            state.listFilm = action.listFilm;
            return {...state};
        }
        default: return {...state};
    }
}