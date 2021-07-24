import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getListCinemaDetail } from '../../../redux/actions/ListCinemaAction';
import { Table, Button } from 'antd';
import {
    InteractionOutlined,
  } from '@ant-design/icons';

export default function MovieSheduleCinema() {
    const { cinemaCodeList, listCinemasDetail, cinemaList } = useSelector(state => state.ListCinemasReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        if (listCinemasDetail == '') {
            for (let i = 0; i < cinemaCodeList.length; i++) {
                dispatch(getListCinemaDetail(cinemaCodeList[i].cinemaCode));
            }
        }
    }, [])
    const columns = [
        { title: 'MÃ HỆ THỐNG RẠP', dataIndex: 'maHeThongRap', key: 'maHeThongRap', render:(text,record)=><NavLink style={{color:'black'}} to={`/admin/shedule-cinema/${record.maHeThongRap.toLowerCase()}`}>{text}</NavLink> },
        { title: 'LOGO', dataIndex: 'logo', key: 'logo', render: (text) => <img src={text} width={50} height={50} /> },
        { title: 'TÊN HỆ THỐNG RẠP', dataIndex: 'tenHeThongRap', key: 'tenHeThongRap' },
        { title: 'MÃ NHÓM', dataIndex: 'maNhom', key: 'maNhom' },
        { title: 'ACTION', key: 'operation', render: (text,record) => <NavLink to={`/admin/shedule-cinema/${record.maHeThongRap.toLowerCase()}`}><Button type="primary" icon={<InteractionOutlined />}>List Lịch Chiếu</Button></NavLink> },
    ];


    const data = [];
    for (let i = 0; i < listCinemasDetail.length; i++) {
        data.push({
            key: i,
            maHeThongRap: listCinemasDetail[i][0].maHeThongRap,
            tenHeThongRap: listCinemasDetail[i][0].tenHeThongRap,
            logo: listCinemasDetail[i][0].logo,
            maNhom: listCinemasDetail[i][0].mahom,
        })
    }
    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
            />
        </div>
    )
}
