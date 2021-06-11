import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getListFilmForm } from '../../redux/actions/FormGetSticketActions';
import { getCinemaFilmForm } from '../../redux/actions/FormGetSticketActions';

export default function FormGetSticket() {
    const {Film, listFilm, Cinema, listCinema} = useSelector(state=>state.FormGetSticketReducer);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getListFilmForm());
        if(Film.maPhim !== null){
            dispatch(getCinemaFilmForm(Film.maPhim));
        }
    },[Film.tenPhim])
    console.log('listFilm',listFilm);
    console.log('Film',Film);
    console.log('Rap Chieu', Cinema);
    console.log('listCinema',listCinema.heThongRapChieu);
    const renderFilm = () =>{
        return listFilm?.map((f,index)=>{
            
            return <a className="dropdown-item" key={index} onClick={()=>{dispatch({type:'CHOOSE_FILM', tenPhim:f.tenPhim, maPhim:f.maPhim})}}>{f.tenPhim}</a>
        })
    }
    const renderCinema = () =>{
        return listCinema.heThongRapChieu?.map((htr,index)=>{
            return htr.cumRapChieu?.map((cr,index)=>{
                return  <a className="dropdown-item" key={index} ><img src={htr.logo} width={50} height="50"/>{cr.tenCumRap}</a>
            })
            
        });
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
                                    Xuất Chiếu
                                </div>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuScreening">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
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
