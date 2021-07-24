import axios from 'axios';
import { TOKEN } from '../../util/setting';
import Swal from 'sweetalert2';



export const getInfoMovieSheduleAdmin = (maPhim) =>{
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method: 'GET'
            })
            dispatch({ type: 'GET_MOVIE_SHEDULE', listMovieShedule: result.data });
        } catch (errors) {
            console.log(errors);
        }
    }
}

export const getInfoMovieSheduleByCinema = (maHeThongRap) =>{
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP05`,
                method: 'GET'
            })
            dispatch({ type: 'GET_MOVIE_SHEDULE_BY_CINEMA', listMovieSheduleCinema: result.data });
        } catch (errors) {
            console.log(errors);
        }
    }
}