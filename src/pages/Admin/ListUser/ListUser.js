import React, { useEffect, useState } from 'react';
import FormUser from './FormUser/FormUser'; 
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { getListUserAction, removeUserAction } from '../../../redux/actions/UserAction';
import TableUser from './TableUser/TableUser';
import { Table, Row, Col, Button, Input } from 'antd';
import {
    EditOutlined,
    DeleteOutlined,
} from '@ant-design/icons';
const { Search } = Input;
export default function ListUser() {
    const { listUser } = useSelector(state => state.UserReducer);
    const arrUser = listUser;
    const [q, setQ] =  useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListUserAction());
    }, []);
    const onSearch = value => console.log(value);
    const fSearch = (rows) =>{
        return rows.filter((row)=>row.taiKhoan.toLowerCase().indexOf(q)> -1 ||  
        row.hoTen.toLowerCase().indexOf(q)> -1 )
    }
    const handleChangeSearch = (e) =>{
        console.log(e.target.value);
        setQ(e.target.value);
    }
    return (
        <div>
            <Row>
                <Col span={6} style={{marginRight:'10px'}}>
                    <Search onSearch={onSearch} onChange={handleChangeSearch} defaultValue={q}  placeholder="Tìm Kiếm User" prefix={<UserOutlined />} />
                </Col>
                
            </Row>
            <TableUser data={fSearch(arrUser)}/>
        </div>
    )
}
