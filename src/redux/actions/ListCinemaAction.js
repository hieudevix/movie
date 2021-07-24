import axios from 'axios';


export const getListCinemaDetail = (maHeThongRap) =>{
    return async (dispatch) =>{
        try{
            let result = await axios({
                url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP05`,
                method:'GET'
            });
            // console.log(result.data);
            dispatch({type:'GET_LIST_CINEMAS_DETAIL', listCinemasDetail: result.data})
        } catch(errors){
            console.log(errors);
        }
    }
}

export const getInfoCinema = (maHeThongRap)=>{
    return async (dispatch) =>{
        try{
            let result = await axios({
                url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP05`,
                method:'GET'
            });
            // console.log('maHethon',result.data);
            dispatch({type:'GET_LIST_CINEMA_INFO', nameCinema: result.data[0].maHeThongRap, imgCinema: result.data[0].logo})
        } catch(errors){
            console.log(errors);
        }
    }
}

export const getListCinema = (maHeThongRap) =>{
    return async (dispatch) =>{
        try{
            let result = await axios({
                url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP05`,
                method:'GET'
            });
            // console.log('maHethon',result.data);
            dispatch({type:'GET_LIST_CINEMAS', nameCinema: result.data[0].maHeThongRap, imgCinema: result.data[0].logo})
        } catch(errors){
            console.log(errors);
        }
    }
}

export const LayThongTinCumRapTheoHeThong = (maHeThongRap) =>{
    return async (dispatch) =>{
        try{
            let result = await axios({
                url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}&maNhom=GP05`,
                method:'GET'
            });
            // console.log('maHethon',result.data);
            dispatch({type:'GET_CINEMA_SYSTEM', cinemaListByGroup:result.data})
        } catch(errors){
            console.log(errors);
        }
    }
}