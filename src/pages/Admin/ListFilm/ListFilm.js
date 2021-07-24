import React, { useEffect, useState } from 'react';
import TableFilm from './TableFilm/TableFilm';
import { Col, Row , Input} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getListFilm } from '../../../redux/actions/ListMovieActions';
import Swal from 'sweetalert2';
import {
    UserOutlined,
} from '@ant-design/icons';
const { Search } = Input;
export default function ListFilm() {
    const { listFilmShowing } = useSelector(state => state.ListMovieReducer);
    const arrFilm = listFilmShowing;
    const dispatch = useDispatch();
    const [q, setQ] = useState("");
    const onSearch = value => console.log(value);
    const fSearch = (rows) => {
        return rows.filter((row) => row.tenPhim.toLowerCase().indexOf(q) > -1)
    }
    const handleChangeSearch = (e) => {
        console.log(e.target.value);
        setQ(e.target.value);
    }
    useEffect(() => {
        dispatch(getListFilm());
    }, [])

    return (
        <div>
            <Row>
                <Col span={6} style={{ marginRight: '10px' }}>
                    <Search onSearch={onSearch} onChange={handleChangeSearch} defaultValue={q} placeholder="Tìm Kiếm Phim Theo Tên Phim" prefix={<UserOutlined />} />
                </Col>
            </Row>
            <TableFilm data={fSearch(arrFilm)}/>
        </div>
    )
}
