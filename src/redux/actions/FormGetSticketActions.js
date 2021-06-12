import axios from 'axios';

import {history} from '../../App';

export const getListFilmForm = () =>{

    return async (dispatch) =>{
        try{
            let result = await axios({
                url:`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03`,
                method:'GET'
            });
            // console.log(result.data);
            dispatch({type:'GET_DANH_SACH_FILM_FORM', listFilm: result.data})
        } catch(errors){
            console.log(errors);
        }
    }
}

export const getCinemaFilmForm = (maPhim) =>{
    return async (dispatch)=>{
        try{
            let result = await axios({
                url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method:'GET'
            })
            // console.log(result.data);
            dispatch({type:'GET_LIST_CINEMA', listCinema: result.data});
        }catch(errors){
            console.log(errors);
        }
    }
}

export const getMovieShowtimesAndCinemas = (maHeThongRap) => {
    return async (dispatch)=>{
        try{
            let result = await axios({
                url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?${maHeThongRap}=CGV&maNhom=GP01`,
                method:'GET'
            })
            dispatch({type:'GET_LIST_MOVIE_SHOW_TIME', listMovieShowTimes: result.data});
        }catch(errors){
            console.log(errors);
        }
    }

}