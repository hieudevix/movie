import { Group } from 'antd/lib/avatar';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getListFilmForm, getMovieShowtimesAndCinemas } from '../../redux/actions/FormGetSticketActions';
import { getCinemaFilmForm } from '../../redux/actions/FormGetSticketActions';

export default function FormGetSticket() {
    const {Film, listFilm, Cinema, listCinema, movieShowTimes, listMovieShowTimes} = useSelector(state=>state.FormGetSticketReducer);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getListFilmForm());
        if(Film.maPhim !== null){
            dispatch(getCinemaFilmForm(Film.maPhim));
        }
        if(listCinema.maHeThongRap !== null){
            dispatch(getMovieShowtimesAndCinemas(listCinema.maHeThongRap));
        }
    },[Film.tenPhim])
    console.log('listFilm',listFilm);
    console.log('Film',Film);
    console.log('Rap Chieu', Cinema);
    console.log('listCinema',listCinema.heThongRapChieu);
    // console.log('xuatChieu',listMovieShowTimes);
    const renderFilm = () =>{
        let arrListFilm = [];
        for(let i = 0; i < listFilm.length; i++){
            if(i == 10){
                break;
            }
            let arrData = <a className="dropdown-item" key={i} onClick={()=>{dispatch({type:'CHOOSE_FILM', tenPhim:listFilm[i].tenPhim, maPhim:listFilm[i].maPhim})}}>
               <img className="mr-1" style={{borderRadius:'50px'}} width={50} height={50} src={listFilm[i].hinhAnh}/> {listFilm[i].tenPhim}</a>;
             arrListFilm.push(arrData);
        }
        return arrListFilm;
    }
    const renderCinema = () =>{
        return listCinema.heThongRapChieu?.map((htr,index)=>{
            return htr.cumRapChieu?.map((cr,index)=>{
                return  <a className="dropdown-item" key={index} onClick={()=>{
                    dispatch({
                        type:'CHOOSE_CINEMA',
                        tenCumRap:cr.tenCumRap
                    })
                }}  ><img className="mr-1" src={htr.logo} width={50} height={50}/>{cr.tenCumRap}</a>
            })
            
        });
    }
    const renderXuatChieu = () =>{
        // let arrXuatChieu = [];
        // for(let i = 0; i < listCinema.heThongRapChieu.length; i++){
        //     for(let j = 0; j < listCinema.heThongRapChieu[i].length; j++){
        //         if(listCinema.heThongRapChieu[i][j].tenCumRap == Cinema){
        //             for(let h = 0; h < listCinema.heThongRapChieu[i][j].length; h++){
        //                 let arrData = <a className="dropdown-item" href="#">{listCinema.heThongRapChieu[i][j][h].ngayChieuGioChieu}</a>
        //                 arrXuatChieu.push(arrData);
        //             }
        //         }
        //     }
        // }
        // return arrXuatChieu;
    }
    return (
        <div>
            <div className="container formGetTicket" >
                    <div className="row" style={{ alignItems: 'center' }}>
                        <div className="col-4 selectFilm p-0" >
                            <div className="dropdown" >
                                <div className="selectMenu" style={{backgroundImage:"url('./images/dropdown-icon.png')"}}></div>
                                <div className="dropdown-title pl-4 pr-2 py-2" href="#" role="button" id="dropdownMenuFilm" data-toggle="dropdown"  aria-expanded="false">
                                    {Film.tenPhim}
                                </div>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuFilm">
                                    {renderFilm()}
                                </div>
                            </div>

                        </div>
                        <div className="col-2 selectCinema p-0">
                            <div className="dropdown ">
                                <div className="selectMenu" style={{backgroundImage:"url('./images/dropdown-icon.png')"}}></div>
                                <div className="dropdown-title p-2"  href="#" role="button" id="dropdownMenuCinema" data-toggle="dropdown"  aria-expanded="false">
                                    {Cinema} 
                                </div>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuCinema">
                                    {renderCinema()}
                                </div>
                            </div>
                        </div>
                        <div className="col-2 selectDate p-0">
                            <div className="dropdown ">
                                <div className="selectMenu" style={{backgroundImage:"url('./images/dropdown-icon.png')"}}></div>
                                <div  className="dropdown-title p-2"  href="#" role="button" id="dropdownMenuDate" data-toggle="dropdown"  aria-expanded="false">
                                    Ngày Xem
                                </div>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuDate">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 selectMovieScreening p-0">
                            <div className="dropdown " >
                                <div className="selectMenu" style={{backgroundImage:"url('./images/dropdown-icon.png')"}}></div>
                                <div  className="dropdown-title p-2"  href="#" role="button" id="dropdownMenuScreening" data-toggle="dropdown"  aria-expanded="false">
                                    {movieShowTimes.showTimes}
                                </div>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuScreening">
                                   {renderXuatChieu()}
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <button id="#btnBuy" className="btn btn-dark">MUA VÉ NGAY</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}
