import { render } from '@testing-library/react';
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
    const createRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const renderStar = (star) => {
        let arrStar = [];
        for (let i = 2; i <= star; i = i + 2) {
            let data = [];
            if (i == star - 1) {
                if (star % 2 != 0) {
                    data = <img src="./images/icons/star1.png" />;
                    arrStar.push(data);
                    data = <img src="./images/icons/star1.2.png" />;
                    arrStar.push(data);
                }
            }
            else {
                data = <img src="./images/icons/star1.png" />;
                arrStar.push(data);
            }
        }
        return arrStar;
    }
    const renderMovieShowing = () => {
        return listFilmShowing.map((f, index) => {
            if (index < 22) {
                return <div key={index} className="film__showing col-3 mt-4 mb-2">
                    <div  className="film__img">
                        <img src={f.hinhAnh} className="w-100 d-block"  />
                        <div className="film__hover"></div>
                    </div>
                    <div  className="film__info d-flex">
                        <span className="nameFilm" > <span className="age__type mr-2">C18</span>
                            {f.tenPhim}
                        </span>
                    </div>
                    <div  className="infoFilm mb-2">
                        <span>{createRandomNumber(120, 90)} phút - {createRandomNumber(9.7, 3.4).toFixed(1)} IMDb</span>
                    </div>
                    <div  className="playButton">
                        <img src="./images/icons/play-video.png" />
                    </div>
                    <div className="rateFilm">
                        <div className="point">
                            {f.danhGia}
                        </div>
                        <div key={index} className="star">
                            {renderStar(f.danhGia)}
                        </div>
                    </div>
                </div>
            }
        })
    }
    const renderMovieComing = () => {
        return listFilmShowing.map((f, index) => {
            if (index > 24 && index < 48) {
                return <div key={index} className="film__showing col-3 mt-4 mb-2">
                    <div  className="film__img">
                        <img src={f.hinhAnh} className="w-100 d-block"  />
                        <div className="film__hover"></div>
                    </div>
                    <div className="film__info d-flex">
                        <span className="nameFilm"> <span className="age__types mr-2">P</span>
                            {f.tenPhim}
                        </span>
                    </div>
                    <div  className="infoFilm mb-2">
                        <span>{createRandomNumber(120, 90)} phút - {createRandomNumber(9.7, 3.4).toFixed(1)} IMDb</span>
                    </div>
                    <div className="playButton">
                        <img src="./images/icons/play-video.png" />
                    </div>
                </div>
            }
        })
    }
    return (
        <div className="movie__tab">
            <nav className="movie__tab__title mb-4">
                <div className="nav nav-tabs tab__tittle__item" id="nav-tab" role="tablist" >
                    <a className="nav-item nav-link active mr-3" id="nav-home-tab" data-toggle="tab" href="#nav-showing" role="tab" aria-controls="nav-showing" aria-selected="true">Đang Chiếu</a>
                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-comingSoon" role="tab" aria-controls="nav-coming" aria-selected="false">Sắp Chiếu</a>
                </div>
            </nav>
            <div className="tab-content container movie__tab__item" id="nav-tabContent">
                <div className="tab-pane fade show active list__film" id="nav-showing" role="tabpanel" aria-labelledby="nav-showing-tab">
                    <Slider id="showFilm" {...settings}>
                        {renderMovieShowing()}
                    </Slider>
                </div>
                <div className="tab-pane fade list__film" id="nav-comingSoon" role="tabpanel" aria-labelledby="nav-coming-tab">
                    <Slider id="showFilm" {...settings}>
                        {renderMovieComing()}
                    </Slider>
                </div>
            </div>
            <div className="container back__news" style={{backgroundImage:"url('./images/icons/back-news.png')"}}></div>
        </div>
    )
}
