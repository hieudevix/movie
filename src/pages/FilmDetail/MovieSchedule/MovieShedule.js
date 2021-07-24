import React, { useEffect, useState } from 'react'
import { Fragment } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getListCinema } from '../../../redux/actions/ListCinemaAction';
import { Collapse, Select, Modal, Button, Alert, Tabs, Radio, Space } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { USERLOGIN } from '../../../util/setting';
import logo from '../../../asset/images/logo.png';
import { history } from '../../../App';

const { Panel } = Collapse;
const { Option } = Select;
const { TabPane } = Tabs;
export default function MovieShedule(props) {

    const listFilm = props.listFilm;
    const dispatch = useDispatch();
    const listCinema = [];
    const { cinemaList } = useSelector(state => state.ListCinemasReducer);
    const arrDate = [
        { numDay: 0, day: "Chủ Nhật" },
        { numDay: 1, day: "Thứ 2" },
        { numDay: 2, day: "Thứ 3" },
        { numDay: 3, day: "Thứ 4" },
        { numDay: 4, day: "Thứ 5" },
        { numDay: 5, day: "Thứ 6" },
        { numDay: 6, day: "Thứ 7" }
    ]

    useEffect(() => {
        if (cinemaList == '') {
            for (let i = 0; i < listCinema.length; i++) {
                dispatch(getListCinema(listCinema[i]));
            }
        }
    }, []);
    const checkLogin = () => {
        if (!localStorage.getItem(USERLOGIN)) {
            showModal();
        }

        // to={`/dat-ve/${lcc.maLichChieu}`}
    }
    // for modal checkLogin;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        history.push('/login');
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const getNextTwoWeek = () => {
        var today = new Date();
        let arrayDate = [];
        for (let i = 0; i < 7; i++) {
            let date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
            let day = date.getDay();
            date = moment(date).format('DD-MM-YYYY');
            date = date.substr(0, 2);

            for (let i = 0; i < arrDate.length; i++) {
                if (arrDate[i].numDay == day) {
                    arrayDate.push({
                        date: date,
                        day: arrDate[i].day
                    })
                }
            }
        }
        return arrayDate;
    }

    const getCinemaList = () => {
        return listFilm.lichChieu.map((lc, index) => {
            let temp = listCinema.find(t => t == lc.thongTinRap.maHeThongRap);
            if (temp) {
                return;
            }
            else {
                listCinema.push(lc.thongTinRap.maHeThongRap);
            }
        })
    }
    const renderListMovieShedule = () => {
        let arrayDate = getNextTwoWeek();
        let arraySame = [];
        getCinemaList();
        return cinemaList.map((htr, index) => {
            return <TabPane tab={<div className="listCinema">
                <img className="imgCinema" src={htr.imgCinema} />
                <div className="nameCinema">{htr.nameCinema}</div>
            </div>} key={index}> <Tabs tabPosition="top" key={index + 10}>
                    {arrayDate.map((v, indexs) => {
                        return <TabPane tab={<div className="tabDate">
                            <div className="displayDay">{v.day}</div>
                            <div className="displayDate">{v.date}</div>
                        </div>} key={indexs + 10}>
                            {listFilm.lichChieu.map((lc, indexss) => {
                                if (lc.thongTinRap.maHeThongRap == htr.nameCinema) {
                                    let test = arraySame.find(t => t == lc.thongTinRap.tenCumRap);
                                    if (test) {
                                        return;
                                    }
                                    else {
                                        arraySame.push(lc.thongTinRap.tenCumRap);
                                        return <div id={`accordion${indexss}`} key={indexss + 20}>
                                            <div className="card cinemaInfo">
                                                <div className="card-header cinemaCard" id={`heading${indexss}`} data-toggle="collapse" data-target={`#collapse${indexss}`} aria-expanded="true" aria-controls={`collapse${indexss}`}>
                                                    <div className="cinemaChild">
                                                        <img className="cinemaChildImg" src={htr.imgCinema} />
                                                        <div className="nameCinemaChild">{lc.thongTinRap.tenCumRap}</div>
                                                    </div>
                                                </div>
                                                <div id={`collapse${indexss}`} className="collapse show" aria-labelledby={`heading${indexss}`} data-parent={`#accordion${indexss}`}>
                                                    <div className="card-body typeDigital">
                                                        2D Digital
                                                        <div className="row">
                                                            {listFilm.lichChieu.map((lcc, indexsss) => {
                                                                if (lcc.thongTinRap.maCumRap == lc.thongTinRap.maCumRap) {
                                                                    if (localStorage.getItem(USERLOGIN)) {
                                                                        return <a target="_blank" onClick={() => {
                                                                            dispatch({
                                                                                type: 'RESET_LOADING_BOOKING'
                                                                            })
                                                                        }} href={`/dat-ve/${lcc.thongTinRap.maHeThongRap.toLowerCase()}/${lcc.maLichChieu}`} className="movieTime" key={indexsss + 200}><span className="mainTime">{moment(lcc.ngayChieuGioChieu).format('hh:mm')}</span>
                                                                            -{moment(lcc.ngayChieuGioChieu).add(2, 'hours').format('hh:mm ')}
                                                                        </a>
                                                                    } else {
                                                                        return <div onClick={() => {
                                                                            if (!localStorage.getItem(USERLOGIN)) {
                                                                                showModal();
                                                                            }
                                                                        }} className="movieTime" key={indexsss + 200}><span className="mainTime">{moment(lcc.ngayChieuGioChieu).format('hh:mm ')}</span>
                                                                            -{moment(lcc.ngayChieuGioChieu).add(2, 'hours').format('hh:mm ')}
                                                                        </div>
                                                                    }
                                                                }
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                }
                            })}
                        </TabPane>
                    })}
                </Tabs>
            </TabPane>
        })
    }
    const renderListMovieSheduleMobile = () => {
        let arrayDate = getNextTwoWeek();
        let arraySame = [];
        getCinemaList();
        return arrayDate.map((v, index) => {
            return <TabPane tab={<div className="tabDate">
                <div className="displayDay">{v.day}</div>
                <div className="displayDate">{v.date}</div>
            </div>} key={index}>
                <Collapse expandIconPosition="right">
                    {index == 0 ? cinemaList.map((htr, indexs) => {
                        return <Panel header={<div className="listCinema">
                            <img className="imgCinema" src={htr.imgCinema} />
                            <div className="nameCinema">{htr.nameCinema}</div>
                        </div>} key={indexs}><Collapse
                            expandIconPosition="right"
                            className="cinemaChildMobile"
                        >
                                {listFilm.lichChieu.map((lc, indexss) => {
                                    if (lc.thongTinRap.maHeThongRap == htr.nameCinema) {
                                        let test = arraySame.find(t => t == lc.thongTinRap.tenCumRap);
                                        if (test) {
                                            return;
                                        }
                                        else {
                                            arraySame.push(lc.thongTinRap.tenCumRap);
                                            return <Panel header={<div className="cinemaChild">
                                                <img className="cinemaChildImg" src={htr.imgCinema} />
                                                <div className="nameCinemaChild">{lc.thongTinRap.tenCumRap}</div>
                                            </div>} key={indexss}>
                                                <div style={{fontWeight:'600', margin:'5px 0 5px 5px'}}>2D Digital</div>
                                                <div className="row ml-1">
                                                {listFilm.lichChieu.map((lcc, indexsss) => {
                                                    if (lcc.thongTinRap.maCumRap == lc.thongTinRap.maCumRap) {
                                                        if (localStorage.getItem(USERLOGIN)) {
                                                            return <a target="_blank" onClick={() => {
                                                                dispatch({
                                                                    type: 'RESET_LOADING_BOOKING'
                                                                })
                                                            }} href={`/dat-ve/${lcc.thongTinRap.maHeThongRap.toLowerCase()}/${lcc.maLichChieu}`} className="movieTime" key={indexsss + 200}><span className="mainTime">{moment(lcc.ngayChieuGioChieu).format('hh:mm')}</span>
                                                                -{moment(lcc.ngayChieuGioChieu).add(2, 'hours').format('hh:mm ')}
                                                            </a>
                                                        } else {
                                                            return <div onClick={() => {
                                                                if (!localStorage.getItem(USERLOGIN)) {
                                                                    showModal();
                                                                }
                                                            }} className="movieTime" key={indexsss + 200}><span className="mainTime">{moment(lcc.ngayChieuGioChieu).format('hh:mm ')}</span>
                                                                -{moment(lcc.ngayChieuGioChieu).add(2, 'hours').format('hh:mm ')}
                                                            </div>
                                                        }
                                                    }
                                                })}
                                                </div>
                                            </Panel>
                                        }
                                    }
                                })
                                }
                            </Collapse>
                        </Panel>
                    }) : ''}
                </Collapse>
            </TabPane>
        })
    }
    return (
        <div className="movieShedule">
            <Tabs tabPosition="left" className="hideOnMobile">
                {renderListMovieShedule()}
            </Tabs>
            <div className="hideOnPC col-12">
                <Tabs tabPosition="top" >
                    {renderListMovieSheduleMobile()}
                </Tabs>
            </div>
            <Modal title={<div className="modalTitle">
                <img className="modalImg" src={logo} />
                <span className="modalInform">THÔNG BÁO</span>
            </div>} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Alert
                    message="Bạn cần đăng nhập để đặt vé!"
                    type="error"
                    showIcon
                />
            </Modal>
        </div>
    )
}
