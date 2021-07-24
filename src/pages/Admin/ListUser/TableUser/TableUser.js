import React, { useState } from 'react';
import './TableUser.css';
import FormUser from '../FormUser/FormUser';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import {  removeUserAction } from '../../../../redux/actions/UserAction';
import { Table, Row, Col, Button, Input } from 'antd';
import {
    EditOutlined,
    DeleteOutlined,
    UserOutlined
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
export default function TableUser(props) {

    const [showForm, setShowForm] = useState(false);
    const [userUpdate, setUserUpdate] = useState({ userUpdate: [] });
    const [typeAction, setTypeAction] = useState('update');
    const handleCloseForm = () => setShowForm(false);
    const dispatch = useDispatch();
    const columns = [
        {
            title: 'TÀI KHOẢN',
            width: 100,
            dataIndex: 'taiKhoan',
            key: 'taiKhoan',
            render:(text,record)=>(
                <NavLink style={{color:'black'}} to={`/admin/i-detail/${record.taiKhoan}`}>{text}</NavLink>
            )
        },
        {
            title: 'HỌ TÊN',
            width: 150,
            dataIndex: 'hoTen',
            key: 'hoTen',
        },
        {
            title: 'EMAIL',
            dataIndex: 'email',
            key: 'email',
            width: 150,
        },
        {
            title: 'SĐT',
            dataIndex: 'soDt',
            key: 'soDt',
            width: 100,
        },
        {
            title: 'MẬT KHẨU',
            dataIndex: 'matKhau',
            key: 'matKhau',
            width: 100,
        },
        {
            title: 'MÃ LOẠI NGƯỜI DÙNG',
            dataIndex: 'maLoaiNguoiDung',
            key: 'maLoaiNguoiDung',
            width: 90,
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (text, record, index) => (
                <>
                    <Button className="btnAdminP" type="primary" icon={<EditOutlined />} onClick={() => {
                        setTypeAction('update');
                        setUserUpdate(record);
                        setShowForm(true);
                    }} >Sửa</Button>
                    <Button className="btnAdminP" onClick={() => {
                        Swal.fire({
                            title: `Bạn có chắc muốn xóa người dùng!`,
                            text: record.taiKhoan,
                            icon: 'question',
                            showCancelButton: true,
                            confirmButtonColor: '#fb4226',
                            cancelButtonColor: 'rgb(167 167 167)',
                            confirmButtonText: 'OK'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                dispatch(removeUserAction(record.taiKhoan));
                            }
                        })
                    }} type="primary" danger icon={<DeleteOutlined />}>Xóa</Button>
                    <NavLink  to={`/admin/i-detail/${record.taiKhoan}`}><Button className="btnGo" type="primary" icon={<UserOutlined  />}>Go</Button></NavLink>
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
                    }}>
                        Thêm Người Dùng
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
            <FormUser show={showForm} close={handleCloseForm} userUpdate={userUpdate} type={typeAction} />
        </div>
    )
}
