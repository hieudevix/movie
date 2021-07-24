import React from 'react';
import './ListBooked.css'
import { Table, Tag, Space } from 'antd';
import { STICKETINFO } from '../../../util/setting';

export default function ListBooked() {
    const listChar = [
        { number: 16, char: 'A' },
        { number: 32, char: 'B' },
        { number: 48, char: 'C' },
        { number: 64, char: 'D' },
        { number: 80, char: 'E' },
        { number: 96, char: 'F' },
        { number: 112, char: 'G' },
        { number: 128, char: 'H' },
        { number: 144, char: 'I' },
        { number: 160, char: 'J' },
    ]
    const setNameSeat = (index) => {
        let result;
        for (let i = 0; i < listChar.length; i++) {
            if (index <= listChar[i].number && index >= listChar[i].number - 15) {
                let h = 0;
                let indexSeat;
                for (let j = listChar[i].number - 16; j <= listChar[i].number; j++) {
                    if (index == j) {
                        indexSeat = h;
                        break;
                    }
                    h++;
                }
                if (indexSeat < 10) {
                    result = ` ${listChar[i].char}0${indexSeat}`;
                } else {
                    result = ` ${listChar[i].char}${indexSeat}`;
                }
            }
        }
        return result;
    }
    const columns = [
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Tên Phim',
            dataIndex: 'tenPhim',
            key: 'tenPhim',
        },
        {
            title: 'Hình Ảnh',
            dataIndex: 'hinhAnh',
            key: 'hinhAnh',
            render: text => <img style={{ width: '70px', height: '70px', borderRadius: '10px' }} src={text} />,
        },
        {
            title: 'Tên Cụm Rạp',
            dataIndex: 'tenCumRap',
            key: 'tenCumRap',
        },
        {
            title: 'Tên  Rạp',
            dataIndex: 'tenRap',
            key: 'tenRap',
        },
        {
            title: 'Ngày Giờ Chiếu',
            dataIndex: 'ngayChieuGioChieu',
            key: 'ngayChieuGioChieu',
        },
        {
            title: 'Ngày Giờ Mua Vé',
            dataIndex: 'ngayGioMuaVe',
            key: 'ngayGioMuaVe',
        },
        {
            title: 'Vé',
            key: 'danhSachVe',
            dataIndex: 'danhSachVe',
            render: danhSachVe => (
                <>
                    {danhSachVe.map((v, index) => {
                        let color;
                        if(v.loaiGhe == 'Thuong'){
                            color = "#3e515d";
                        }else{
                            color = "#f7b500";
                        }
                        return <Tag color={color} key={index}>
                            {setNameSeat(v.tenGhe)}
                        </Tag>
                    })}
                </>
            ),
        },
        {
            title: 'Tổng Tiền',
            key: 'tongTien',
            dataIndex: 'danhSachVe',
            render: danhSachVe => (
                <>
                    {danhSachVe.reduce((tongTien, seat, index) => {
                        return tongTien += seat.giaVe;
                    }, 0).toLocaleString()}VNĐ
                </>
            ),
        },
    ];
    const data = JSON.parse(localStorage.getItem(STICKETINFO));

    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}
