import React, { useEffect, useState } from 'react';
import { Tabs, Tag, Alert } from 'antd';
import { Row, Col } from 'antd';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getListCinemaDetail } from '../../redux/actions/ListCinemaAction';
import { Menu } from 'antd';
import { USERLOGIN } from '../../util/setting';
import Swal from 'sweetalert2'
import { history } from '../../App';
import { Collapse, Select } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const { Panel } = Collapse;
const { Option } = Select;
const { SubMenu } = Menu;
const { TabPane } = Tabs;
export default function ListCinemas() {

    const [isActive, setActive] = useState("false");
    const { cinemaCodeList, listCinemasDetail, cinemaDetailChoose } = useSelector(state => state.ListCinemasReducer);
    // console.log('now', listCinemasDetail)
    const dispatch = useDispatch();
    useEffect(() => {
        if (listCinemasDetail == '') {
            for (let i = 0; i < cinemaCodeList.length; i++) {
                dispatch(getListCinemaDetail(cinemaCodeList[i].cinemaCode));
            }
        }
    }, [])


    const clickMovie = () => {
        Swal.fire({
            icon: 'warning',
            text: 'Bạn chưa đăng nhập! Hãy đăng nhập để tiếp tục',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đồng Ý!'
        }).then((result) => {
            if (result.isConfirmed) {
                history.push('/login');
            }
        })
    }
    const renderListCinema = () => {
        return listCinemasDetail.map((listCinema, index) => {
            return listCinema?.map((lc, indexs) => {
                return <TabPane tab={<img src={lc.logo} width={50} height={50} />} key={index}><span className="tab__info"><Tabs tabPosition='left'>
                    {lc.lstCumRap.map((lcd, index) => {
                        if (index < 6) {
                            return <TabPane tab={<div className={`info__cinema`} key={index} >
                                <img src={lc.logo} width={50} height={50} />
                                <div className="wrapInfo" >
                                    <div className="infoTitle">
                                        {lcd.tenCumRap}
                                    </div>
                                    <div className="infoAdd">
                                        {lcd.diaChi}
                                    </div>
                                    <div className="infoDetail">
                                        [chi tiết]
                                    </div>
                                </div>
                            </div>} key={index}>
                                <Menu style={{ paddingLeft: '10px' }} key={indexs+100}
                                    style={{ width: '100%' }}
                                    mode="inline"
                                >
                                    {lcd.danhSachPhim.map((dsp, indexsss) => {
                                        if (indexsss < 6) {
                                            return <SubMenu key={indexsss} icon={<img src={dsp.hinhAnh} width={40} height={40} style={{ borderRadius: '40px' }} />} title={<div className="movie__listCinema" >
                                                <div className="typeAgeMovieCinema">C{createRandomNumber(18, 12)}</div>
                                                <div className="infoFilmDetail">
                                                    <div className="nameMovieCinema" >{dsp.tenPhim}</div>
                                                    <div className="infoFilmMovieCinema">{createRandomNumber(120, 90)} phút - {createRandomNumber(9.7, 3.4).toFixed(1)} IMDb</div>
                                                </div>

                                            </div>}>
                                                {dsp.lstLichChieuTheoPhim.map((ds, indexssss) => {
                                                    if (indexssss < 6) {
                                                        let maRap = listCinema[0].maHeThongRap.toLowerCase();
                                                        if (localStorage.getItem(USERLOGIN)) {
                                                            return <Menu.Item key={createRandomNumber(120000, 90)} >
                                                                <a target="_blank" onClick={() => {
                                                                    dispatch({
                                                                        type: 'RESET_LOADING_BOOKING'
                                                                    })
                                                                }} href={`/dat-ve/${maRap}/${ds.maLichChieu}`}><Alert message={`Giờ Chiếu: ${moment(ds.ngayChieuGioChieu).format('hh:mm A')}, Giá Vé: ${formatNum(ds.giaVe)} VNĐ`} type="error" showIcon /></a>
                                                            </Menu.Item>
                                                        } else {
                                                            return <Menu.Item key={createRandomNumber(120000, 90)}>
                                                                <a target="_blank" onClick={clickMovie} ><Alert message={`Giờ Chiếu: ${moment(ds.ngayChieuGioChieu).format('hh:mm A')}, Giá Vé: ${formatNum(ds.giaVe)} VNĐ`} type="error" showIcon /></a>
                                                            </Menu.Item>
                                                        }

                                                    }
                                                })}
                                            </SubMenu>
                                        }
                                    })}
                                </Menu>
                            </TabPane>
                        }
                    })}
                </Tabs></span> </TabPane>
            })
        })
    }
    const createRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const formatNum = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    const renderCinemasMobile = () => {
        return listCinemasDetail.map((listCinema, index) => {
            return <Collapse
                expandIconPosition="right"
                key={index}
            >
                {listCinema?.map((lc, indexs) => {
                    return <Panel header={<div className="titleCinemaMobile">
                        <img className="logoCinemasMobile" src={lc.logo} />
                        <div className="nameCinemasMobile">{lc.maHeThongRap}</div>
                    </div>} key={indexs} >
                        <Collapse
                            expandIconPosition="right"
                            className="cinemaChildMobile"
                        >
                            {lc.lstCumRap.map((lcd, indexss) => {
                                return <Panel header={<div className="titleCinemasChildMobile">
                                    <img className="logoCinemasChildMobile" src={lc.logo} />
                                    <div className="infoCinemasChildMobile">
                                        <div className="nameCinemasChildMobile">{lcd.tenCumRap}</div>
                                        <div className="addCinemasChildMobile">{lcd.diaChi}</div>
                                    </div>
                                </div>} key={indexss}>
                                    <Collapse
                                        expandIconPosition="right"
                                        className="filmMobile"
                                    >
                                        {lcd.danhSachPhim.map((dsp, indexsss) => {
                                            return <Panel showArrow={false} header={<div className="infoFilmCinemaMobile">
                                                <img className="imgFilmMobile" src={dsp.hinhAnh} />
                                                <div className="infoFilmMobileDetail">
                                                    <span className="typeAgeMobile">C{createRandomNumber(18, 12)}</span>
                                                    <span className="nameFilmCinemaMobile">
                                                        {dsp.tenPhim}
                                                    </span>
                                                    <div className="timeReviewFilmMobile">
                                                        {createRandomNumber(120, 90)} phút - {createRandomNumber(9.7, 3.4).toFixed(1)} IMDb
                                                    </div>
                                                </div>
                                            </div>} key={indexsss}>
                                                <div className="ml-2" style={{ fontWeight: '600' }}>{createRandomNumber(3, 2)}D Digital</div>
                                                <div keyy={indexsss+300} className="row ml-2">
                                                    {dsp.lstLichChieuTheoPhim.map((ds, indexssss) => {
                                                        if (indexssss <= 6) {
                                                            let maRap = listCinema[0].maHeThongRap.toLowerCase();
                                                            if (localStorage.getItem(USERLOGIN)) {
                                                                return <a key={indexssss+200} target="_blank" onClick={() => {
                                                                    dispatch({
                                                                        type: 'RESET_LOADING_BOOKING'
                                                                    })
                                                                }} href={`/dat-ve/${maRap}/${ds.maLichChieu}`} className="movieTime " key={indexsss + 200}><span className="mainTime">{moment(ds.ngayChieuGioChieu).format('hh:mm ')}</span>
                                                                    -{moment(ds.ngayChieuGioChieu).add(2, 'hours').format('hh:mm ')}
                                                                </a>
                                                            } else {
                                                                return <a key={indexssss+200} onClick={clickMovie} className="movieTime " key={indexsss + 200}><span className="mainTime">{moment(ds.ngayChieuGioChieu).format('hh:mm ')}</span>
                                                                    -{moment(ds.ngayChieuGioChieu).add(2, 'hours').format('hh:mm ')}
                                                                </a>
                                                            }
                                                        }
                                                    })}
                                                </div>
                                            </Panel>
                                        })}
                                    </Collapse>
                                </Panel>
                            })}
                        </Collapse>
                    </Panel>
                })}
            </Collapse>

        })
    }
    return (
        <div className="container movie__listCinemas" id="listCinema">
            <Row className="listCinemas hideOnMobile">
                <Col span={24}>
                    <Tabs tabPosition='left' >
                        {renderListCinema()}
                    </Tabs>
                </Col>
            </Row>
            <div className="listCinemasMobile hideOnPC">
                <div className="col-12 p-0">
                    {renderCinemasMobile()}
                </div>
            </div>
            <div className="container back__news" style={{ backgroundImage: "url('./images/icons/back-news.png')" }}></div>
        </div>
    )
}
