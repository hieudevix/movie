import axios from 'axios';

export const getListCinemas = (maHeThongRap) =>{

    return async (dispatch) =>{
        try{
            let result = await axios({
                url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap?maHeThongRap=${maHeThongRap}`,
                method:'GET'
            });
            // console.log(result.data);
            dispatch({type:'GET_LIST_CINEMAS', listCinemas: result.data})
        } catch(errors){
            console.log(errors);
        }
    }
}