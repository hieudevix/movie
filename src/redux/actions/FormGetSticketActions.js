import axios from 'axios';

import {history} from '../../App';

export const getListFilmForm = () =>{

    return async (dispatch) =>{
        try{
            let result = await axios({
                url:`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP15`,
                method:'GET'
            });
            console.log(result.data);
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
                url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
            })
            console.log(result.data);
            dispatch({type:'GET_LIST_CINEMA', listCinema: result.data});
        }catch(errors){
            console.log(errors);
        }
    }
}