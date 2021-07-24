import React, { useEffect } from 'react';
import { Table, Badge, Menu, Dropdown, Space, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getListCinemaDetail } from '../../../redux/actions/ListCinemaAction';
import { NavLink } from 'react-router-dom';

const menu = (
    <Menu>
        <Menu.Item>Thêm Lịch Chiếu</Menu.Item>
    </Menu>
);
const NestedTable = () => {
    const { cinemaCodeList, listCinemasDetail, cinemaList } = useSelector(state => state.ListCinemasReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        if (listCinemasDetail == '') {
            for (let i = 0; i < cinemaCodeList.length; i++) {
                dispatch(getListCinemaDetail(cinemaCodeList[i].cinemaCode));
            }
        }
    }, [])
    const expandedRowRender = (row) => {
        console.log(row);
        const columns = [
            { title: 'MÃ CỤM RẠP', dataIndex: 'maCumRap', key: 'maCumRap', render: (text) => <NavLink style={{ color: 'black' }} to={`/admin/list-cinema/${row.maHeThongRap}/${text}`}>{text}</NavLink> },
            { title: 'TÊN CỤM RẠP', dataIndex: 'tenCumRap', key: 'tenCumRap' },
            { title: 'ĐỊA CHỈ', dataIndex: 'diaChi', key: 'diaChi' },
            {
                title: 'Action',
                dataIndex: 'operation',
                key: 'operation',
                render: (text,record) => (
                    <NavLink to={`/admin/list-cinema/${row.maHeThongRap}/${record.maCumRap}`}>
                        <Button type="primary">
                            Thêm Lịch Chiếu
                        </Button>
                    </NavLink>
                ),
            },
        ];
        const data1 = [];
        const data2 = [];
        const data3 = [];
        const data4 = [];
        const data5 = [];
        const data6 = [];
        for (let i = 0; i < listCinemasDetail?.length; i++) {
            if (i == 0) {
                for (let j = 0; j < listCinemasDetail[i][0]?.lstCumRap.length; j++) {
                    data1.push(listCinemasDetail[i][0]?.lstCumRap[j]);
                }
            }
            if (i == 1) {
                for (let j = 0; j < listCinemasDetail[i][0]?.lstCumRap.length; j++) {
                    data2.push(listCinemasDetail[i][0]?.lstCumRap[j]);
                }
            }
            if (i == 2) {
                for (let j = 0; j < listCinemasDetail[i][0]?.lstCumRap.length; j++) {
                    data3.push(listCinemasDetail[i][0]?.lstCumRap[j]);
                }
            }
            if (i == 3) {
                for (let j = 0; j < listCinemasDetail[i][0]?.lstCumRap.length; j++) {
                    data4.push(listCinemasDetail[i][0]?.lstCumRap[j]);
                }
            }
            if (i == 4) {
                for (let j = 0; j < listCinemasDetail[i][0]?.lstCumRap.length; j++) {
                    data5.push(listCinemasDetail[i][0]?.lstCumRap[j]);
                }
            }
            if (i == 5) {
                for (let j = 0; j < listCinemasDetail[i][0]?.lstCumRap.length; j++) {
                    data6.push(listCinemasDetail[i][0]?.lstCumRap[j]);
                }
            }
        }

        let data = row.key == 1 ? data2 : row.key == 2 ? data3 : row.key == 3 ? data4 : row.key == 4 ? data5 : row.key == 5 ? data6 : data1;
        console.log('data', data)
        return <Table columns={columns} dataSource={data} pagination={false} bordered />;
    };

    const columns = [
        { title: 'MÃ HỆ THỐNG RẠP', dataIndex: 'maHeThongRap', key: 'maHeThongRap' },
        { title: 'LOGO', dataIndex: 'logo', key: 'logo', render: (text) => <img src={text} width={50} height={50} /> },
        { title: 'TÊN HỆ THỐNG RẠP', dataIndex: 'tenHeThongRap', key: 'tenHeThongRap' },
        { title: 'MÃ NHÓM', dataIndex: 'maNhom', key: 'maNhom' },
        { title: 'ACTION', key: 'operation', render: () => <a>Publish</a> },
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
        <Table
            className="components-table-demo-nested"
            columns={columns}
            expandable={{ expandedRowRender }}
            dataSource={data}
        />
    );
}
export default function ListCinema() {

    return (
        <div>
            <NestedTable />
        </div>
    )
}
