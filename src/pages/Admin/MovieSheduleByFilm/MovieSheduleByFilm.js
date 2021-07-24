import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getInfoMovieSheduleAdmin } from '../../../redux/actions/MovieSheduleAction';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import { Table, Button } from 'antd';
import {
    InteractionOutlined,
} from '@ant-design/icons';

export default function MovieSheduleByFilm(props) {
    const { listMovieShedule } = useSelector(state => state.MovieSheduleReducer);
    console.log('test', props.match.params.maPhim);
    const maPhim = props.match.params.maPhim;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getInfoMovieSheduleAdmin(maPhim));
    }, [])
    const data = [];
    for (let i = 0; i < listMovieShedule.length; i++) {
        let listMovie = listMovieShedule[i];
        for (let j = 0; j < listMovie.heThongRapChieu.length; j++) {
            let heThongRapChieu = listMovie.heThongRapChieu[j];
            for (let h = 0; h < heThongRapChieu.cumRapChieu.length; h++) {
                let cumRapChieu = heThongRapChieu.cumRapChieu[h];
                for (let g = 0; g < cumRapChieu.lichChieuPhim.length; g++) {
                    data.push({
                        maLichChieu: cumRapChieu.lichChieuPhim[g].maLichChieu,
                        tenHeThongRap: heThongRapChieu.tenHeThongRap,
                        logo: heThongRapChieu.logo,
                        tenRap: cumRapChieu.lichChieuPhim[g].tenRap,
                        tenPhim: listMovie.tenPhim,
                        hinhAnh: listMovie.hinhAnh,
                        ngayChieuGioChieu: cumRapChieu.lichChieuPhim[g].ngayChieuGioChieu,
                        giaVe: cumRapChieu.lichChieuPhim[g].giaVe,

                    })
                }
            }
        }
    }
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const columns = [
        {
            title: 'MÃ LỊCH CHIẾU',
            dataIndex: 'maLichChieu',
            key: 'maLichChieu',
            width: 60,
            sorter: (a, b) => a.maLichChieu - b.maLichChieu,
            render: text => <NavLink style={{ color: 'black' }} to={`/admin/seat-map/${text}`}>{text}</NavLink>,
        },
        {
            title: 'NGÀY CHIẾU GIỜ CHIẾU',
            dataIndex: 'ngayChieuGioChieu',
            key: 'ngayChieuGioChieu',
            width: 80,
            render: (text) => (<span>{moment(text).format('DD/MM/YYYY hh:mm:ss')}</span>)
        },
        {
            title: 'GIÁ VÉ',
            dataIndex: 'giaVe',
            key: 'giaVe',
            width: 80,
            render: (text) => (<span>{numberWithCommas(text)} VNĐ</span>)
        },
        {
            title: 'TÊN PHIM',
            key: 'tenPhim',
            dataIndex: 'tenPhim',
            width: 150,
        },
        {
            title: 'HÌNH ẢNH',
            key: 'hinhAnh',
            dataIndex: 'hinhAnh',
            width: 80,
            render: (text, render) => (
                <img src={text} style={{ width: '50px', height: '50px', borderRadius: '10px' }} />
            )
        },
        {
            title: 'LOGO',
            dataIndex: 'logo',
            key: 'logo',
            width: 50,
            render: (text, render) => (
                <img src={text} style={{ width: '40px', height: '40px', borderRadius: '10px' }} />
            )
        },
        {
            title: 'TÊN HỆ THỐNG RẠP',
            dataIndex: 'tenHeThongRap',
            key: 'tenHeThongRap',
            width: 100,
        },
        {
            title: 'TÊN RẠP',
            dataIndex: 'tenRap',
            key: 'tenRap',
            width: 50,
        },

        {
            title: 'ACTION',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (text, record) => <NavLink to={`/admin/seat-map/${record.maLichChieu}`}><Button type="primary" icon={<InteractionOutlined />}>Go</Button></NavLink>,
        },
    ];

    return (
        <div className="adminManage">
            <div className="title" >DANH SÁCH LỊCH CHIẾU CỦA MÃ  PHIM {maPhim} </div>
            <Table scroll={{ x: 1200 }} columns={columns} dataSource={data}
                sticky />
        </div>
    )
}
