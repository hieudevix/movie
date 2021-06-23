

import axios from 'axios';
import {history} from '../../App';
import { LOGIN } from './type/UserType';
import {USERLOGIN, TOKEN, TYPE_USER} from '../../util/setting';

export const loginAction = (userLogin) => { //userLogin : {taiKhoan:'',matKhau:''}

    return async (dispatch) => {


        try {
            const result = await axios({
                url:'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
                method:'POST',
                data: userLogin //{taiKhoan:'',matKhau:''}
            });

            console.log('result',result.data)
            //123@admin
            //148

            dispatch({
                type:LOGIN,
                userName:result.data.taiKhoan,
                userType: result.data.maLoaiNguoiDung

            })
            localStorage.setItem(TOKEN,result.data.accessToken);
            
            localStorage.setItem(USERLOGIN, JSON.stringify(result.data));

            localStorage.setItem(TYPE_USER, JSON.stringify(result.data.maLoaiNguoiDung))

            if(result.data.maLoaiNguoiDung == 'QuanTri'){
                history.push('/admin');
            }else{
                // props.history.push()
                history.push('/');
            }
            

        }catch (errors) {
            console.log('errors',errors.response.data)
        }
    }
}