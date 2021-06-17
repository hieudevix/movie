import React, { useEffect, useState } from 'react'
import { Tabs, Radio, Space } from 'antd';
import { Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getListCinemaDetail } from '../../redux/actions/ListCinemaAction';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
const { TabPane } = Tabs;
export default function ListCinemas() {
    // const [state, setState] = useState({
    //     tabPosition: 'left'
    // })
    const [isActive, setActive] = useState("false");
    const { cinemaCodeList, listCinemasDetail } = useSelector(state => state.ListCinemasReducer);
    // console.log('listCinema', cinemaCodeList[0].cinemaCode);
    console.log('listCinemasDetail', listCinemasDetail);
    const dispatch = useDispatch();
    useEffect(() => {
        for (let i = 0; i < cinemaCodeList.length; i++) {
            dispatch(getListCinemaDetail(cinemaCodeList[i].cinemaCode));
        }
    }, [])
    const handleToggle = () => {
        setActive(!isActive);
      };
    const renderListCinema = () => {
        return listCinemasDetail.map((listCinema, index) => {
            return listCinema.map((lc, indexs) => {
                return <TabPane  tab={<img src={lc.logo} width={50} height={50} />} key={index}>
                    {lc.lstCumRap.map((lcd, index) => {
                        if (index < 6) {
                            return <div   className={`info__cinema ${isActive ? '' : 'active'}`} key={index} onClick={handleToggle}>
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
                            </div>
                        }
                    })}
                </TabPane>
            })
        })
    }
    return (
        <div className="container movie__listCinemas">
            <Row className="listCinemas">
                <Col span={8}>
                    <Tabs tabPosition='left'>
                        {renderListCinema()}
                    </Tabs>
                </Col>
                <Col span={16}>
                </Col>
            </Row>
        </div>
    )
}
