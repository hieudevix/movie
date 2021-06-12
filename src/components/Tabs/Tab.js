import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import Slider from "react-slick";
import { getListFilm } from '../../redux/actions/ListMovieActions';

export default function Tab() {
    const { listFilmShowing } = useSelector(state => state.ListMovieReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListFilm());
    }, []);
    console.log('listFimShowing', listFilmShowing);
    const settings = {
        // centerMode: true,
        // infinite: true,
        // centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
        rows: 2,
        slidesPerRow: 4
    };
    const renderMovieShowing = () => {
        return listFilmShowing.map((f, index) => {
            return  <div className="card col-3 p-4" key={index}>
                <img className="card-img-top" src={f.hinhAnh} className="w-100 d-block" style={{height:'300px'}}  alt />
                <div className="card-body">
                    <p className="card-text">{f.tenPhim}</p>
                </div>
            </div>
            
        })
    }
    return (
        <div className="movie__tab">
            <nav className="movie__tab__title">
                <div className="nav nav-tabs tab__tittle__item" id="nav-tab" role="tablist" >
                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-showing" role="tab" aria-controls="nav-home" aria-selected="true">Đang Chiếu</a>
                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-comingSoon" role="tab" aria-controls="nav-profile" aria-selected="false">Sắp Chiếu</a>
                </div>
            </nav>
            <div className="tab-content container movie__tab__item" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-showing" role="tabpanel" aria-labelledby="nav-home-tab">
                    <Slider id="showFilm" {...settings}>
                        {renderMovieShowing()}
                    </Slider>
                </div>
                <div className="tab-pane fade" id="nav-comingSoon" role="tabpanel" aria-labelledby="nav-profile-tab">coming soon</div>
            </div>
        </div>

    )
}
