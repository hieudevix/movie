const stateDefault = {
    isLoading:true,
    listMovieShowtime:{},
    listSeatBooking:[]
}

export const BookingSticketsReducer = (state=stateDefault, action)=>{
    switch(action.type){
        case 'GET_MOVIE_SHOWTIMES': {
            state.isLoading = action.isLoading;
            state.listMovieShowtime = action.listMovieShowtime;
            state.listSeatBooking = [];
            return {...state}
        }
        case 'SEAT_BOOKING':{
            let mangGheDangDat = [...state.listSeatBooking];
            let index = mangGheDangDat.findIndex(gheDD => gheDD.maGhe === action.seatBooking.maGhe);

            if(index !== -1){
                mangGheDangDat.splice(index,1);
            }else{
                mangGheDangDat.push(action.seatBooking)
            }
            state.listSeatBooking = mangGheDangDat;
            return {...state};

        }
        case 'RESET_LOADING_BOOKING':{
            state.isLoading = true;
            return {...state};
        }
        default:return{...state};
    }
}