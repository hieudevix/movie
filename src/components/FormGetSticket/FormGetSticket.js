import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'
import { history } from '../../App';
import moment from 'moment';
import { Tag } from 'antd';
import { getListFilmForm, getMovieShowtimesAndCinemas } from '../../redux/actions/FormGetSticketActions';
import { getCinemaFilmForm } from '../../redux/actions/FormGetSticketActions';
import { USERLOGIN } from '../../util/setting';
import { getSticketAction } from '../../redux/actions/BookingSticketsAction';

export default function FormGetSticket() {
    const { Film, listFilm, Cinema, listCinema, movieShowTimes, listMovieShowTimes, movieTimeWatch } = useSelector(state => state.FormGetSticketReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListFilmForm());
        if (Film.maPhim !== null) {
            dispatch(getCinemaFilmForm(Film.maPhim));
        }
        if (listCinema.maHeThongRap !== null) {
            dispatch(getMovieShowtimesAndCinemas(listCinema.maHeThongRap));
        }
    }, [Film.tenPhim])

    const renderFilm = () => {
        let arrListFilm = [];
        for (let i = 0; i < listFilm.length; i++) {
            if (i == 30) {
                break;
            }
            let arrData = <a className="dropdown-item" key={i} onClick={() => { dispatch({ type: 'CHOOSE_FILM', tenPhim: listFilm[i].tenPhim, maPhim: listFilm[i].maPhim }) }}>
                <img className="mr-1" style={{ borderRadius: '50px' }} width={50} height={50} src={listFilm[i].hinhAnh} /> {listFilm[i].tenPhim}</a>;
            arrListFilm.push(arrData);
        }
        return arrListFilm;
    }
    const renderCinema = () => {
        return listCinema.heThongRapChieu?.map((htr, index) => {
            return htr.cumRapChieu?.map((cr, index) => {
                // console.log('stateFilm',Film.tenPhim);
                return <a className="dropdown-item" key={index} onClick={() => {
                    dispatch({
                        type: 'CHOOSE_CINEMA',
                        nameCinema: cr.tenCumRap,
                        codeCinema: cr.maCumRap
                    })
                }}  ><img className="mr-1" src={htr.logo} width={50} height={50} />{cr.tenCumRap}</a>
            })
        });
    }
    const setColor = (codeCinema) => {
        let color = "red";
        if (codeCinema.indexOf("cns") !== -1) {
            return color = "purple";
        }
        if (codeCinema.indexOf("cgv") !== -1) {
            return color = "red";
        }
        if (codeCinema.indexOf("bhd") !== -1) {
            return color = "green";
        }
        if (codeCinema.indexOf("glx") !== -1) {
            return color = "volcano";
        }
        if (codeCinema.indexOf("megags") !== -1) {
            return color = "gold";
        }
        return color;
    }
    const getSticket = () =>{
        Swal.fire({
            icon: 'warning',
            text: 'Bạn chưa đăng nhập! Hãy đăng nhập để tiếp tục',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đồng Ý!'
        }).then((result)=>{
            if(result.isConfirmed){
                history.push('/login');
            }
        })
    }
    const renderNgayChieu = () => {
        let arrNgayChieu = [];
        return listCinema.heThongRapChieu?.map((htr, index) => {
            return htr.cumRapChieu?.map((crc, index) => {
                if (crc.maCumRap == Cinema.codeCinema) {
                    return crc.lichChieuPhim?.map((lcp, index) => {
                        let temp = arrNgayChieu.find(t => t == moment(lcp.ngayChieuGioChieu).format('DD-MM-YYYY'));
                        if (temp) {
                            return;
                        }
                        else {
                            arrNgayChieu.push(moment(lcp.ngayChieuGioChieu).format('DD-MM-YYYY'));
                            return <a style={{ padding: '0' }} key={index} onClick={() => {
                                dispatch({
                                    type: 'CHOOSE_MOVIE_SHOW_TIME',
                                    showTimes: moment(lcp.ngayChieuGioChieu).format('DD-MM-YYYY')
                                })
                            }} className="dropdown-item" ><Tag key={index}  color={setColor(crc.maCumRap)}  >{moment(lcp.ngayChieuGioChieu).format('DD-MM-YYYY')} </Tag></a>
                        }
                    })
                }
            })
        })
    }
    const renderGioChieu = () => {
        return listCinema.heThongRapChieu?.map((htr, index) => {
            return htr.cumRapChieu?.map((crc, index) => {
                if (crc.maCumRap == Cinema.codeCinema) {
                    return crc.lichChieuPhim?.map((lcp, index) => {
                        if (movieShowTimes.showTimes == moment(lcp.ngayChieuGioChieu).format('DD-MM-YYYY')) {
                            return <a style={{ padding: '0' }} key={index} onClick={() => {
                                dispatch({
                                    type: 'CHOOSE_MOVIE_TIME',
                                    time: `${moment(lcp.ngayChieuGioChieu).format('h:mm A')}-${lcp.tenRap}`,
                                    codeShowTimes: lcp.maLichChieu,
                                    codeCinema: htr.maHeThongRap
                                })
                            }} className="dropdown-item" ><Tag key={index}  color={setColor(crc.maCumRap)}  >{moment(lcp.ngayChieuGioChieu).format(' h:mm A')} - {lcp.tenRap} </Tag></a>
                        }

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
                            <div className="selectMenu" style={{ backgroundImage: "url('./images/dropdown-icon.png')" }}></div>
                            <div className="dropdown-title pl-4 pr-2 py-2" href="#" role="button" id="dropdownMenuFilm" data-toggle="dropdown" aria-expanded="false">
                                {Film.tenPhim !== '' ? Film.tenPhim : 'Phim'}
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuFilm">
                                {renderFilm()}
                            </div>
                        </div>

                    </div>
                    <div className="col-2 selectCinema p-0">
                        <div className="dropdown ">
                            <div className="selectMenu" style={{ backgroundImage: "url('./images/dropdown-icon.png')" }}></div>
                            <div className="dropdown-title p-2" href="#" role="button" id="dropdownMenuCinema" data-toggle="dropdown" aria-expanded="false">
                                {Cinema.nameCinema !== '' ? Cinema.nameCinema : 'Rạp Chiếu'}
                            </div>
                            <div className="dropdown-menu" style={{ zIndex: '22' }} aria-labelledby="dropdownMenuCinema">

                                {Film.tenPhim === '' ? <a className="dropdown-item">Vui lòng chọn phim!</a> : renderCinema()}
                            </div>
                        </div>
                    </div>
                    <div className="col-2 selectDate p-0" >
                        <div className="dropdown ">
                            <div className="selectMenu" style={{ backgroundImage: "url('./images/dropdown-icon.png')" }}></div>
                            <div className="dropdown-title p-2" href="#" role="button" id="dropdownMenuDate" data-toggle="dropdown" aria-expanded="false">
                                {movieShowTimes.showTimes !== '' ? movieShowTimes.showTimes : 'Ngày Xem'}
                            </div>
                            <div className="dropdown-menu" style={{ zIndex: '22' }} aria-labelledby="dropdownMenuCinema">
                                {Film.tenPhim === '' ? Cinema.nameCinema === '' ? <a className="dropdown-item">Vui lòng chọn phim và rạp!</a> : <a className="dropdown-item">Vui lòng chọn rạp!</a> : renderNgayChieu()}
                            </div>
                            {/* <DatePicker style={{width:'100%'}} placeholder="Ngày Xem" onChange={onChange} /> */}
                        </div>
                    </div>
                    <div className="col-2 selectMovieScreening p-0">
                        <div className="dropdown " >
                            <div className="selectMenu" style={{ backgroundImage: "url('./images/dropdown-icon.png')" }}></div>
                            <div className="dropdown-title p-2" href="#" role="button" id="dropdownMenuScreening" data-toggle="dropdown" aria-expanded="false">

                                {movieTimeWatch.time !== '' ? (movieTimeWatch.time) : 'Xuất Chiếu'}
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuScreening">
                                {Film.tenPhim === '' ? Cinema.nameCinema === '' ? movieTimeWatch.time === '' ?
                                    <a className="dropdown-item">Vui lòng chọn phim, rạp và ngày xem!</a> : <a className="dropdown-item">Vui lòng chọn phim và rạp!</a> : <a className="dropdown-item">Vui lòng chọn phim!</a> : renderGioChieu()}
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        {movieTimeWatch.codeShowTimes === '' ? <button id="#btnBuy" className="btn" >MUA VÉ NGAY</button> : localStorage.getItem(USERLOGIN) ?  <a target="_blank"  href={`/dat-ve/${movieTimeWatch.codeCinema.toLowerCase()}/${movieTimeWatch.codeShowTimes}`}><button id="#btnBuyActive" className="btn" >MUA VÉ NGAY</button></a> :  <a onClick={()=>getSticket()} target="_blank" ><button id="#btnBuyActive" className="btn" >MUA VÉ NGAY</button></a>}

                    </div>
                </div>
            </div>
        </div>
    )
}
