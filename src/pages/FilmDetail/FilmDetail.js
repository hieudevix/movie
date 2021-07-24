import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import moment from 'moment';
import { Fragment } from 'react';
import Footer from '../../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getFilmDetail } from '../../redux/actions/ListMovieActions';
import star1 from './../../asset/images/icons/star1.png';
import star12 from './../../asset/images/icons/star1.2.png';
import avatar from './../../asset/images/avatar.png';
import starList from './../../asset/images/icons/listStar.png';
import Loader from '../../components/Loader/Loader';
import ListComment from './ListComent/ListComment';
import MovieShedule from './MovieSchedule/MovieShedule';
export default function FilmDetail(props) {

    const { filmDetail, isLoading } = useSelector(state => state.ListMovieReducer);
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView();
    const maPhim = props.match.params.maPhim;
    const getPath = props.match.path;
    const path = getPath.split("/");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFilmDetail(maPhim));
    }, [])
    const createRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const reviewer = createRandomNumber(30, 1);
    const renderStar = (star) => {
        let arrStar = [];
        for (let i = 2; i <= star; i = i + 2) {
            let data = [];
            if (i == star - 1) {
                if (star % 2 != 0) {
                    data = <img key={i} src={star1} />;
                    arrStar.push(data);
                    data = <img key={i + 1} src={star12} />;
                    arrStar.push(data);
                }
            }
            else {
                data = <img key={i} src={star1} />;
                arrStar.push(data);
            }
        }
        return arrStar;
    }
    const getCircleValue = (value) => {
        let result;
        let percent = value * 10 / 100;
        result = 360 * percent;
        return result;
    }
    if (isLoading) {
        return <Fragment>
            <Header />
            <Loader />
        </Fragment>
    }
    else {
        return (
            <Fragment>
                <Header />
                <div className="mainDetail">
                    <div className="detail__film " >
                        <img className="posterFilm " src={filmDetail.hinhAnh} />
                        {/* <img className="posterMobile" src={filmDetail.hinhAnh}/> */}
                        <div className="styleGradient" ></div>
                        <div className="container detailMainContent ">
                            <div className="row">
                                <div className="col-6 col-sm-6 col-md-3 detailMainImg">
                                    <img src={filmDetail.hinhAnh} style={{ width: '100%', height: '100%', borderRadius: '5px' }} />
                                </div>
                                <div className="col-5 detailMainInfo hiddenOnMobile">
                                    <div className="startDateFilm">{moment(filmDetail.ngayKhoiChieu).format('DD-MM-YYYY')}</div>
                                    <span className="nameFilm" > <span className="age__type mr-2">C1{createRandomNumber(8, 2)}</span>
                                        {filmDetail.tenPhim}
                                    </span>
                                    <div className="filmDes">
                                        <span>{filmDetail.lichChieu != '' ? filmDetail.lichChieu[0].thoiLuong : "?"} phút - {createRandomNumber(9.7, 3.4).toFixed(1)} IMDb - </span>
                                        <span>{createRandomNumber(3, 2)}D/Digitals</span>
                                    </div>
                                    {path[1] === "phim" ? <button onClick={executeScroll} className="btnGetSticket hiddenOnMobile">MUA VÉ</button> : ""}

                                </div>
                                <div className="col-6 col-sm-6 col-md-4 detailMainValue">
                                    <div className="circlePercent">
                                        <div className="circleBorder"></div>
                                        <span className="circleValue">{filmDetail.danhGia}</span>
                                        <div className="slice">
                                            <div className="bar" style={{ transform: ` rotate(${getCircleValue(filmDetail.danhGia)}deg)` }}></div>
                                            <div className="fill"></div>
                                        </div>
                                    </div>
                                    <div className="starFilm mt-3">{renderStar(filmDetail.danhGia)}</div>
                                    <div className="numbersReviewer mt-2">{reviewer} người đánh giá</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="detail__film__tab ">
                        <div className="infoFilmMobile container">
                            <div className="dateFilmMobile">{moment(filmDetail.ngayKhoiChieu).format('DD-MM-YYYY')}</div>
                            <div className="nameFilmMobile"> {filmDetail.tenPhim}</div>
                            <div className="filmDesMobile">
                                <span>{filmDetail.lichChieu != '' ? filmDetail.lichChieu[0].thoiLuong : "?"} phút - {createRandomNumber(9.7, 3.4).toFixed(1)} IMDb - </span>
                                <span>{createRandomNumber(3, 2)}D/Digitals</span>
                            </div>
                        </div>
                        <nav className="detail__tab__title mb-4">
                            <div className="nav nav-tabs tab__tittle__item" id="nav-tab" role="tablist" >
                                {path[1] === "phim" ? <a ref={myRef} className="nav-item tix-tab nav-link active mr-3" id="nav-lichChieu-tab" data-toggle="tab" href="#nav-lichChieu" role="tab" aria-controls="nav-lichChieu" aria-selected="true">Lịch Chiếu</a> : ""}

                                {path[1] === "phim" ? <a className="nav-item tix-tab nav-link" id="nav-thonTin-tab" data-toggle="tab" href="#nav-thongTin" role="tab" aria-controls="nav-thongTin" aria-selected="false">Thông Tin</a> : <a className="nav-item tix-tab nav-link active" id="nav-thonTin-tab" data-toggle="tab" href="#nav-thongTin" role="tab" aria-controls="nav-thongTin" aria-selected="false">Thông Tin</a>}

                                {path[1] === "phim" ? <a className="nav-item tix-tab nav-link" id="nav-danhGia-tab" data-toggle="tab" href="#nav-danhGia" role="tab" aria-controls="nav-danhGia" aria-selected="false">Đánh Giá</a> : ""}

                            </div>
                        </nav>
                        <div className="tab-content container detail__film__item" id="nav-tabContent">
                            {path[1] === "phim" ? <div className="tab-pane fade show active list__film listFilmMobile" id="nav-lichChieu" role="tabpanel" aria-labelledby="nav-lichChieu-tab">
                                <MovieShedule listFilm={filmDetail} />
                            </div> : ""}
                            {path[1] === "phim" ? <div className="tab-pane fade list__film " id="nav-thongTin" role="tabpanel" aria-labelledby="nav-thongTin-tab">
                                <div className="row ">
                                    <div className="col-12 col-sm-12 col-md-6 film__info">
                                        <div className="row">
                                            <p className="contentTitle">Ngày Công Chiếu</p>
                                            <p className="contentInfo">{moment(filmDetail.ngayKhoiChieu).format('DD-MM-YYYY')}</p>
                                        </div>
                                        <div className="row">
                                            <p className="contentTitle">Đạo Diễn</p>
                                            <p className="contentInfo">Võ Chí Hiếu</p>
                                        </div>
                                        <div className="row">
                                            <p className="contentTitle">Diễn Viên</p>
                                            <p className="contentInfo">Võ Chí Hiếu</p>
                                        </div>
                                        <div className="row">
                                            <p className="contentTitle">Thể Loại</p>
                                            <p className="contentInfo">Action</p>
                                        </div>
                                        <div className="row">
                                            <p className="contentTitle">Định Dạng</p>
                                            <p className="contentInfo">2D/Digitals</p>
                                        </div>
                                        <div className="row">
                                            <p className="contentTitle">Quốc Gia SX</p>
                                            <p className="contentInfo">Việt Nam</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 film__info right">
                                        <p className="contentTitle">Nội dung</p>
                                        <p className="contentInfo">{filmDetail.moTa}</p>
                                    </div>
                                </div>
                            </div> : <div className="tab-pane fade show active list__info" id="nav-thongTin" role="tabpanel" aria-labelledby="nav-thongTin-tab">
                                <div className="row ">
                                    <div className="col-6 film__info">
                                        <div className="row">
                                            <p className="contentTitle">Ngày Công Chiếu</p>
                                            <p className="contentInfo">{moment(filmDetail.ngayKhoiChieu).format('DD-MM-YYYY')}</p>
                                        </div>
                                        <div className="row">
                                            <p className="contentTitle">Đạo Diễn</p>
                                            <p className="contentInfo">Võ Chí Hiếu</p>
                                        </div>
                                        <div className="row">
                                            <p className="contentTitle">Diễn Viên</p>
                                            <p className="contentInfo">Võ Chí Hiếu</p>
                                        </div>
                                        <div className="row">
                                            <p className="contentTitle">Thể Loại</p>
                                            <p className="contentInfo">Action</p>
                                        </div>
                                        <div className="row">
                                            <p className="contentTitle">Định Dạng</p>
                                            <p className="contentInfo">2D/Digitals</p>
                                        </div>
                                        <div className="row">
                                            <p className="contentTitle">Quốc Gia SX</p>
                                            <p className="contentInfo">Việt Nam</p>
                                        </div>
                                    </div>
                                    <div className="col-6 film__info right">
                                        <p className="contentTitle">Nội dung</p>
                                        <p className="contentInfo">{filmDetail.moTa}</p>
                                    </div>
                                </div>
                            </div>}

                            <div className="tab-pane fade review__person" id="nav-danhGia" role="tabpanel" aria-labelledby="nav-danhGia-tab">
                                <div className="  col-12 your__request">
                                    <img className="img__request" src={avatar} />
                                    <span className="request__content">Bạn nghĩ gì về phim này?</span>
                                    <img className="img__review" src={starList} />
                                </div>
                                <div className="row col-12 listComment">
                                    <ListComment reviewer={reviewer} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        )
    }

}
