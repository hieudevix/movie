import axios from 'axios';
import { TOKEN } from '../../util/setting';

import Swal from 'sweetalert2';

export const getListFilm = () => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03`,
                method: 'GET'
            });
            // console.log(result.data);
            dispatch({ type: 'GET_LIST_FILM', listFilm: result.data, isLoading: false })
        } catch (errors) {
            console.log(errors);
        }
    }
}



export const getFilmDetail = (maPhim) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
                method: 'GET'
            })
            dispatch({ type: 'GET_DETAIL_FILM', detailFilm: result.data, isLoading: false });
        } catch (errors) {
            console.log(errors);
        }
    }
}

export const updateFilmAction = (filmUpdate) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpLoad',
                method: 'POST',
                data: filmUpdate,//be cung cấp
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`,

                }
            })
            if (result.status === 200) {
                Swal.fire({
                    title: 'Cập nhật thành công!',
                    icon: 'success',
                    confirmButtonColor: '#44c020'
                }).then((result) => {
                    if(result.isConfirmed){
                        dispatch(getListFilm())
                    }
                })
            }
        } catch (errors) {
            console.log('lỗi', errors);
            Swal.fire({
                title: 'Cập nhật thất bại!',
                text: `${errors.response?.data}`,
                icon: 'error',
            })
        }
    }
}

export const insertFilmAction = (filmInsert) => {
    // filmInsert.maNhom = 'GP03';
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh',
                method: 'POST',
                data: filmInsert,//be cung cấp
            })
            if (result.status === 200) {
                Swal.fire({
                    title: 'Thêm thành công!',
                    icon: 'success',
                    confirmButtonColor: '#44c020'
                }).then((result)=>{
                    if(result.isConfirmed){
                        dispatch(getListFilm())
                    }
                })
            }
        } catch (errors) {
            console.log('lỗi', errors);
            Swal.fire({
                title: 'Thêm thất bại!',
                text: `${errors.response?.data}`,
                icon: 'error',
            })
        }
    }
}

export const removeFilmAction = (maPhim) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
                }
            })
            if (result.status === 200) {
                Swal.fire({
                    title: 'Xóa thành công!',
                    icon: 'success',
                    confirmButtonColor: '#44c020'
                }).then((result)=>{
                    if(result.isConfirmed){
                        dispatch(getListFilm())
                    }
                })
            }
        } catch (errors) {
            console.log('lỗi', errors);
            Swal.fire({
                title: 'Xóa thất bại!',
                text: `${errors.response?.data}`,
                icon: 'error',
            })
        }
    }
}

export const insertMovieSheduleAction = (movieShedule) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu',
                method: 'POST',
                data: movieShedule,//be cung cấp
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
                }
            })
            if (result.status === 200) {
                Swal.fire({
                    title: 'Thêm thành công!',
                    icon: 'success',
                    confirmButtonColor: '#44c020'
                }).then((result)=>{
                    if(result.isConfirmed){
                        dispatch({type:'RESET_LIST_MOVIE_SHEDULE'})
                        // window.location.reload();
                    }
                })
            }
        } catch (errors) {
            console.log('lỗi', errors);
            Swal.fire({
                title: 'Thêm thất bại!',
                text: `${errors.response?.data}`,
                icon: 'error',
            })
        }
    }
}