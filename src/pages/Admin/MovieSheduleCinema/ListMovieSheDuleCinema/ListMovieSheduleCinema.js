import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getInfoMovieSheduleByCinema } from '../../../../redux/actions/MovieSheduleAction';
import moment from 'moment';
import './ListMovieSheduleCinema.css';
import { NavLink } from 'react-router-dom';
import { Table, Button } from 'antd';
import {
    InteractionOutlined,
} from '@ant-design/icons';
import { Card } from 'antd';

export default function ListMovieSheduleCinema(props) {
    const maHeThongRap = props.match.params.maHeThongRap;
    const { listMovieSheduleCinema } = useSelector(state => state.MovieSheduleReducer);
    console.log('test', listMovieSheduleCinema);
    const dispatch = useDispatch();
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const data = [];
    for (let i = 0; i < listMovieSheduleCinema.length; i++) {
        let listS = listMovieSheduleCinema[i];
        for (let j = 0; j < listS.lstCumRap.length; j++) {
            let lstCumRap = listS.lstCumRap[j];
            for (let h = 0; h < lstCumRap.danhSachPhim.length; h++) {
                let danhSachPhim = lstCumRap.danhSachPhim[h];
                for (let g = 0; g < danhSachPhim.lstLichChieuTheoPhim.length; g++) {
                    data.push({
                        logo: listS.logo,
                        tenPhim: danhSachPhim.tenPhim,
                        hinhAnh: danhSachPhim.hinhAnh,
                        maLichChieu: danhSachPhim.lstLichChieuTheoPhim[g].maLichChieu,
                        tenRap: danhSachPhim.lstLichChieuTheoPhim[g].tenRap,
                        ngayChieuGioChieu: danhSachPhim.lstLichChieuTheoPhim[g].ngayChieuGioChieu,
                        giaVe: danhSachPhim.lstLichChieuTheoPhim[g].giaVe,
                    });
                }

            }
        }
    }
    console.log('data', data);
    useEffect(() => {
        dispatch(getInfoMovieSheduleByCinema(maHeThongRap));
    }, [])
    const columns = [
        {
            title: 'LOGO',
            dataIndex: 'logo',
            key: 'logo',
            width: 40,
            render: (text, render) => (
                <img src={text} style={{ width: '40px', height: '40px', borderRadius: '10px' }} />
            )
        },
        {
            title: 'MÃ LỊCH CHIẾU',
            dataIndex: 'maLichChieu',
            key: 'maLichChieu',
            width: 50,
            sorter: (a, b) => a.maLichChieu - b.maLichChieu,
            render: text => <NavLink style={{ color: 'black' }} to={`/admin/seat-map/${text}`}>{text}</NavLink>,
        },
        {
            title: 'NGÀY CHIẾU GIỜ CHIẾU',
            dataIndex: 'ngayChieuGioChieu',
            key: 'ngayChieuGioChieu',
            width: 60,
            render: (text) => (<span>{moment(text).format('DD/MM/YYYY hh:mm:ss')}</span>)
        },
        {
            title: 'GIÁ VÉ',
            dataIndex: 'giaVe',
            key: 'giaVe',
            width: 50,
            render: (text) => (<span>{numberWithCommas(text)} VNĐ</span>)
        },
        {
            title: 'TÊN PHIM',
            key: 'tenPhim',
            dataIndex: 'tenPhim',
            width: 100,
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
            <div className="title" >DANH SÁCH LỊCH CHIẾU CỦA RẠP {maHeThongRap} </div>
            <Table scroll={{ x: 1200 }} columns={columns} dataSource={data}
                sticky />
        </div>
    )
}
