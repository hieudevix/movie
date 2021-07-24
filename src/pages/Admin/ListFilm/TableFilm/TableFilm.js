import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Modal,Table, Row, Col } from 'antd';
import FormEditFilm from '../FormFilm/FormFilm';
import Swal from 'sweetalert2';
import { removeFilmAction } from '../../../../redux/actions/ListMovieActions';
import {
    EditOutlined,
    DeleteOutlined,
    UserOutlined
} from '@ant-design/icons';



export default function TableFilm(props) {
    const [typeAction, setTypeAction] = useState('update');
    const  dispatch = useDispatch();
    const [filmUpdate, setFilmUpdate] = useState({filmUpdate:[]});
    const [showForm, setShowForm] = useState(false);
    const handleCloseForm = () => setShowForm(false);
    const columns = [
        {
            title: 'MÃ PHIM',
            width: 70,
            fixed: 'left',
            dataIndex: 'maPhim',
            key: 'maPhim',
            render:(text,record)=>(
                <NavLink style={{color:'black'}} to={`/admin/movie-shedule/${record.maPhim}`}>{text}</NavLink>
            )
        },
        {
            title: 'TÊN PHIM',
            width: 100,
            dataIndex: 'tenPhim',
            fixed: 'left',
            key: 'tenPhim',
            render:(text,record)=>(
                <NavLink style={{color:'black'}} to={`/admin/movie-shedule/${record.maPhim}`}>{text}</NavLink>
            )
        },
        {
            title: 'TRAILER',
            dataIndex: 'trailer',
            key: 'trailer',
            width: 150,
            render: text => <a target="_blank" href={text}>{text}</a>,
        },
        {
            title: 'BÍ DANH',
            width: 100,
            dataIndex: 'biDanh',
            key: 'biDanh',
        },
        { 
            title: 'HÌNH ẢNH',
            dataIndex: 'hinhAnh',
            key: 'hinhAnh',
            width: 150,
            render: text => <img style={{ width: '100px', height: '100px', borderRadius: '10px' }} src={text} />,
        },
        {
            title: 'MÔ TẢ',
            dataIndex: 'moTa',
            key: 'moTa',
            width: 350,
        },
        {
            title: 'NGÀY KHỞI CHIẾU',
            dataIndex: 'ngayKhoiChieu',
            key: 'ngayKhoiChieu',
            width: 150,
        },
        {
            title: 'ĐÁNH GIÁ',
            dataIndex: 'danhGia',
            key: 'danhGia',
            width: 100,
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 150,
            render: (text, record, index) => (
                <>
                    <Button key={index} className="btnAdminP" type="primary" icon={<EditOutlined />} onClick={() => {
                        setFilmUpdate(record);
                        setTypeAction('update');
                        setShowForm(true);
                        // showModal();
                    }}>Sửa</Button>
                    <Button onClick={() => {
                        Swal.fire({
                            title: `Bạn có chắc muốn xóa phim !`,
                            text: record.tenPhim,
                            icon: 'question',
                            showCancelButton: true,
                            confirmButtonColor: '#fb4226',
                            cancelButtonColor: 'rgb(167 167 167)',
                            confirmButtonText: 'OK'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                dispatch(removeFilmAction(record.maPhim));
                            }
                        })
                    }} key={index + 10000} type="primary" className="btnAdminP" danger danger icon={<DeleteOutlined />}>Xóa</Button>
                    <NavLink  to={`/admin/movie-shedule/${record.maPhim}`}><Button className="btnGo" type="primary" icon={<UserOutlined  />}>Lịch Chiếu</Button></NavLink>
                </>
            ),
        },
    ];
    return (
        <div>
            <Row>
                <Col span={6}>
                    <Button type="primary" style={{width:'100%',margin:'3px 0'}} danger onClick={() => {
                        setTypeAction('insert');
                        setShowForm(true);
                    }} >
                        Thêm Phim
                    </Button>
                </Col>
            </Row>

            <Table
                columns={columns}
                dataSource={props.data}
                scroll={{ x: 300 }}
                bordered="true"
                sticky
            />
            <FormEditFilm show={showForm} close={handleCloseForm} filmUpdate={ filmUpdate} type={typeAction} />
        </div>
    )
}
