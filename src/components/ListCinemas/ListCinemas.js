import React, { useEffect, useState } from 'react'
import { Tabs, Tag, Alert } from 'antd';
import { Row, Col } from 'antd';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getListCinemaDetail } from '../../redux/actions/ListCinemaAction';
import { Menu } from 'antd';
const { SubMenu } = Menu;
const { TabPane } = Tabs;
export default function ListCinemas() {
    // const [state, setState] = useState({
    //     tabPosition: 'left'
    // })
    const [isActive, setActive] = useState("false");
    const { cinemaCodeList, listCinemasDetail, cinemaDetailChoose } = useSelector(state => state.ListCinemasReducer);
    // console.log('listCinema', listCinemasDetail);
    // console.log('chọn cinema', cinemaDetailChoose);
    const dispatch = useDispatch();
    useEffect(() => {
        for (let i = 0; i < cinemaCodeList.length; i++) {
            dispatch(getListCinemaDetail(cinemaCodeList[i].cinemaCode));
        }
    }, [])
    // const renderListCinema = () => {
    //     return listCinemasDetail.map((listCinema, index) => {
    //         return listCinema?.map((lc, indexs) => {
    //             return <TabPane tab={<img src={lc.logo} width={50} height={50} />} key={index}>
    //                 {lc.lstCumRap.map((lcd, index) => {
    //                     if (index < 6) {
    //                         return <div className={`info__cinema ${isActive ? '' : 'active'}`} key={index} onClick={() => {
    //                             dispatch({ type: "CHOOSE_CINEMA_DETAIL", codeCinema: lcd.maCumRap })
    //                             // console.log(lcd.maCumRap)
    //                         }}>
    //                             <img src={lc.logo} width={50} height={50} />
    //                             <div className="wrapInfo" >
    //                                 <div className="infoTitle">
    //                                     {lcd.tenCumRap}
    //                                 </div>
    //                                 <div className="infoAdd">
    //                                     {lcd.diaChi}
    //                                 </div>
    //                                 <div className="infoDetail">
    //                                     [chi tiết]
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     }
    //                 })}
    //             </TabPane>
    //         })
    //     })
    // }
    const renderListCinema = () => {
        return listCinemasDetail.map((listCinema, index) => {
            return listCinema?.map((lc, indexs) => {
                return <TabPane  tab={<img src={lc.logo} width={50} height={50} />} key={index}><span className="tab__info"><Tabs  tabPosition='left'>
                    {lc.lstCumRap.map((lcd, index) => {
                        if (index < 6) {
                            return <TabPane  tab={<div className={`info__cinema`} key={index} >
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
                            <Menu style={{paddingLeft:'10px'}} key={indexs}
                            style={{ width: '100%' }}
                            mode="inline"
                             >
                                 {lcd.danhSachPhim.map((dsp, indexsss) => {
                                if(indexsss < 6){
                                    return <SubMenu key={indexsss} icon={<img src={dsp.hinhAnh} width={40} height={40} style={{borderRadius:'40px'}}/>} title={<div className="movie__listCinema" >
                                        <div className="typeAgeMovieCinema">C{createRandomNumber(18,12)}</div>
                                        <div className="infoFilmDetail">
                                            <div className="nameMovieCinema" >{dsp.tenPhim}</div>
                                            <div className="infoFilmMovieCinema">{createRandomNumber(120, 90)} phút - {createRandomNumber(9.7, 3.4).toFixed(1)} IMDb</div>
                                        </div>
                                       
                                    </div>}>
                                    {dsp.lstLichChieuTheoPhim.map((ds, indexssss) => {
                                        if(indexssss < 6){
                                            return <Menu.Item key={indexssss}> 
                                                <Alert message={`Giờ Chiếu: ${moment(ds.ngayChieuGioChieu).format('hh:mm A')}, Giá Vé: ${formatNum(ds.giaVe)} VNĐ`} type="info" showIcon />
                                            </Menu.Item>
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
    const renderMovieSchedule = () => {
        return listCinemasDetail.map((listCinema, index) => {
            return listCinema?.map((lc, indexs) => {
                return lc.lstCumRap.map((lcd, indexss) => {
                    if (lcd.maCumRap == cinemaDetailChoose.codeCinema) {
                        console.log(index);
                        return <Menu style={{paddingLeft:'10px'}} key={indexs}
                            style={{ width: '100%' }}
                            mode="inline"
                        >
                            {lcd.danhSachPhim.map((dsp, indexsss) => {
                                if(indexsss < 10){
                                    return <SubMenu key={indexsss} icon={<img src={dsp.hinhAnh} width={40} height={40} style={{borderRadius:'40px'}}/>} title={<div className="movie__listCinema" >
                                        <div className="typeAgeMovieCinema">C{createRandomNumber(18,12)}</div>
                                        <div className="infoFilmDetail">
                                            <div className="nameMovieCinema" >{dsp.tenPhim}</div>
                                            <div className="infoFilmMovieCinema">{createRandomNumber(120, 90)} phút - {createRandomNumber(9.7, 3.4).toFixed(1)} IMDb</div>
                                        </div>
                                       
                                    </div>}>
                                    {dsp.lstLichChieuTheoPhim.map((ds, indexssss) => {
                                        if(indexssss < 8){
                                            return <Menu.Item key={indexssss}> 
                                                <Alert message={`Giờ Chiếu: ${moment(ds.ngayChieuGioChieu).format('hh:mm A')}, Giá Vé: ${formatNum(ds.giaVe)} VNĐ`} type="info" showIcon />
                                            </Menu.Item>
                                        }
                                    })}
                                </SubMenu>
                                }
                            })}
                        </Menu>
                    }
                })
            })
        })
    }
    return (
        <div className="container movie__listCinemas">
            {/* <Row className="listCinemas">
                <Col span={8}>
                    <Tabs tabPosition='left'>
                        {renderListCinema()}
                    </Tabs>
                </Col>
                <Col span={16}>
                    {renderMovieSchedule()}
                </Col>
            </Row> */}
            <Row className="listCinemas">
                <Col span={24}>
                    <Tabs tabPosition='left'>
                        {renderListCinema()}
                    </Tabs>
                </Col>
            </Row>
            <div className="container back__news" style={{backgroundImage:"url('./images/icons/back-news.png')"}}></div>
        </div>
    )
}
