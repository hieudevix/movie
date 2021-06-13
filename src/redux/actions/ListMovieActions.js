import axios from 'axios';

export const getListFilm = () =>{
    return async(dispatch)=>{
        try{
            let result = await axios({
                url:`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP08`,
                method:'GET'
            });
            console.log(result.data);
            dispatch({type:'GET_LIST_FILM', listFilm: result.data})
        } catch(errors){
            console.log(errors);
        }
    }
}