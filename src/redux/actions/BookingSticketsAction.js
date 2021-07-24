import axios from 'axios'
import Swal from 'sweetalert2'
import { STICKETINFO, TOKEN } from '../../util/setting';

export const getMovieShowtimeInfo = (maLichChieu) => {
    // fetch
    return async dispatch => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method: 'GET'
            });
            //Lấy dữ liệu từ api => dispatch lên reducer
            dispatch({
                type: 'GET_MOVIE_SHOWTIMES',
                listMovieShowtime: result.data,
                isLoading: false
            })
        } catch (errors) {
            console.log('errors', errors.response.data)
        }

    }
}


export const getSticketAction = (thongTinDatVe,thongTinVeDaDat, maLichChieu) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe', //be cung cấp
                method: 'POST',//be cung cấp
                data: thongTinDatVe,//be cung cấp
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
                }
            });
            if (result.status === 200) {
                Swal.fire({
                    title: 'Notification',
                    text:'Đặt vé thành công! Kiểm tra vé trong email!',
                    icon: 'success',
                    confirmButtonColor:'#44c020'
                }).then((result)=>{
                    if(result.isConfirmed){
                        let oldList= JSON.parse(localStorage.getItem(STICKETINFO)) || [];
                        let newList =thongTinVeDaDat;
                        oldList.push(newList);
                        localStorage.setItem(STICKETINFO, JSON.stringify(oldList));
                        // localStorage.setItem(STICKETINFO, JSON.stringify(thongTinVeDaDat));
                        // window.location.reload();
                        dispatch(getMovieShowtimeInfo(maLichChieu));
                    }
                })
            }
        } catch (errors) {
            Swal.fire({
                title: 'Đặt Vé Thất Bại!',
                text:errors.response?.data,
                icon: 'error',
            })
        }
    }
}