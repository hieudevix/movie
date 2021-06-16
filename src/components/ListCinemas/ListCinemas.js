import React, { useEffect, useState } from 'react'
import { Tabs, Radio, Space } from 'antd';
import { Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getListCinemaDetail, getListCinemas } from '../../redux/actions/ListCinemaAction';
const { TabPane } = Tabs;
export default function ListCinemas() {
    // const [state, setState] = useState({
    //     tabPosition: 'left'
    // })
    const { cinemaCodeList, listCinemas, listCinemasDetail } = useSelector(state => state.ListCinemasReducer);
    // console.log('listCinema', cinemaCodeList[0].cinemaCode);
    console.log('listCinemas', listCinemas);
    console.log('listCinemasDetail', listCinemasDetail);
    const dispatch = useDispatch();
    useEffect(() => {
        for (let i = 0; i < cinemaCodeList.length; i++) {
            dispatch(getListCinemas(cinemaCodeList[i].cinemaCode));
            dispatch(getListCinemaDetail(cinemaCodeList[i].cinemaCode));
        }
    }, [])
    const renderListCinema = () => {
        return listCinemas?.map((l, index) => {
            return l.map((c, indexs) => {
                return <TabPane tab={<img src={c.logo} width={50} height={50}/>}  key={index}>
                    {listCinemasDetail.mapp((ld, indexss)=>{
                        return 
                    })}
                </TabPane>
            })
        })

    }
    return (
        <div className="container movie__listCinemas">
            <Row>
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
