import { Group } from 'antd/lib/avatar';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Calendar } from 'antd';
import {Tag, DatePicker} from 'antd';
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

    const onChange = (date, dateString)=>{

    }
    // console.log('listFilm',listFilm);
    // console.log('Film',Film);
    // console.log('Rap Chieu', Cinema);
    // console.log('listCinema',listCinema.heThongRapChieu);
    // console.log('xuatChieu',listMovieShowTimes);
    // console.log('listMovieShowTime',listMovieShowTimes);
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
                // console.log('stateFilm',Film.tenPhim);
                    return  <a className="dropdown-item" key={index} onClick={()=>{
                        dispatch({
                            type:'CHOOSE_CINEMA',
                            nameCinema:cr.tenCumRap,
                            codeCinema:cr.maCumRap
                        })
                    }}  ><img className="mr-1" src={htr.logo} width={50} height={50}/>{cr.tenCumRap}</a>
            })
        });
    }
    const setColor = (codeCinema) =>{
        let color="red";
        if(codeCinema.indexOf("cns") !== -1 ){
            return  color="purple";
        }
        if(codeCinema.indexOf("cgv") !== -1){
            return  color="red";
        }
        if(codeCinema.indexOf("bhd") !== -1){
            return  color="green";
        }
        if(codeCinema.indexOf("glx") !== -1){
            return  color="volcano";
        }
        if(codeCinema.indexOf("megags") !== -1){
            return color="gold";
        }
        return color;
    }
    const renderXuatChieu = () =>{
        return listCinema.heThongRapChieu?.map((htr, index)=>{
            return htr.cumRapChieu?.map((crc, index) => {
                if(crc.maCumRap == Cinema.codeCinema){
                    return crc.lichChieuPhim?.map((lcp, index)=>{
                        return <a style={{padding:'0'}} key={index} onClick={()=>{
                            dispatch({
                                type:'CHOOSE_MOVIE_SHOW_TIME',
                                showTimes:lcp.ngayChieuGioChieu
                            })
                        }} className="dropdown-item" ><Tag  key={index} style={{width:'95%'}} color={setColor(crc.maCumRap)}  >{moment(lcp.ngayChieuGioChieu).format('MMMM Do YYYY, h:mm:ss a')} </Tag></a> 
                    })
                }
            })
        })
    }
    return (
        <div>
            <div className="container formGetTicket" >
                    <div className="row" style={{ alignItems: 'center' }}>
                        <div className="col-4 selectFilm p-0" >
                            <div className="dropdown" >
                                <div className="selectMenu" style={{backgroundImage:"url('./images/dropdown-icon.png')"}}></div>
                                <div className="dropdown-title pl-4 pr-2 py-2" href="#" role="button" id="dropdownMenuFilm" data-toggle="dropdown"  aria-expanded="false">
                                    {Film.tenPhim !== '' ? Film.tenPhim : 'Phim'}
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
                                    {Cinema.nameCinema !== '' ? Cinema.nameCinema : 'Rạp Chiếu'} 
                                </div>
                                <div className="dropdown-menu" style={{zIndex:'22'}} aria-labelledby="dropdownMenuCinema">

                                    {Film.tenPhim === '' ? <a className="dropdown-item">Vui lòng chọn phim!</a> : renderCinema()}
                                </div>
                            </div>
                        </div>
                        <div className="col-2 selectDate p-0" >
                            <div className="dropdown ">
                                <div className="selectMenu" style={{backgroundImage:"url('./images/dropdown-icon.png')"}}></div>
                                <div  className="dropdown-title p-2"  href="#" role="button" id="dropdownMenuDate" data-toggle="dropdown"  aria-expanded="false">
                                    Ngày Xem
                                </div>
                                <div className="dropdown-menu" style={{zIndex:'22'}} aria-labelledby="dropdownMenuCinema">
                                    {Film.tenPhim === '' ? <a className="dropdown-item">Vui lòng chọn phim!</a> : <Calendar fullscreen={false}  />}
                                </div>
                                {/* <DatePicker style={{width:'100%'}} placeholder="Ngày Xem" onChange={onChange} /> */}
                            </div>
                        </div>
                        <div className="col-2 selectMovieScreening p-0">
                            <div className="dropdown " >
                                <div className="selectMenu" style={{backgroundImage:"url('./images/dropdown-icon.png')"}}></div>
                                <div  className="dropdown-title p-2"  href="#" role="button" id="dropdownMenuScreening" data-toggle="dropdown"  aria-expanded="false">
                                    {movieShowTimes.showTimes !== '' ? moment(movieShowTimes.showTimes).format('MMMM Do YYYY, h:mm:ss a') : 'Xuất Chiếu'}
                                </div>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuScreening">
                                   {Film.tenPhim === '' ? <a className="dropdown-item">Vui lòng chọn phim!</a> : renderXuatChieu()}
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
