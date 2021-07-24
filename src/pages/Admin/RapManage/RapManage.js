import React, { useEffect, useState } from 'react';
import { Table, Space, Button } from 'antd';
import './RapManage.css';
import { useDispatch, useSelector } from 'react-redux';
import { LayThongTinCumRapTheoHeThong } from '../../../redux/actions/ListCinemaAction';
import FormMovieShedule from './FormMovieSchedule/FormMovieShedule';
import { BorderInnerOutlined } from '@ant-design/icons';

export default function RapManage(props) {
    const { cinemaListByGroup } = useSelector(state => state.ListCinemasReducer);
    const maHeThongRap = props.match.params.maHeThongRap;
    const maCumRap = props.match.params.maCumRap;
    const [cinemaNumber, setCinemaNumber] = useState({
        maCumRap:maCumRap,
        maRap:'',
        tenRap:'',
    });
    const [showForm, setShowForm] = useState(false);
    const handleCloseForm = () => setShowForm(false);
    const fSetColor = (maHeThongRap) => {
        let bgColor = "";
        if (maHeThongRap == 'BHDStar') {
            bgColor = "#79c043";
        }
        if (maHeThongRap == 'cgv') {
            bgColor = "#ee2d24";
        }
        if (maHeThongRap == 'Galaxy') {
            bgColor = "#ff8700";
        }
        if (maHeThongRap == 'LotteCinima') {
            bgColor = "#ed1d26";
        }
        if (maHeThongRap == 'CineStar') {
            bgColor = "#662d91";
        }
        if (maHeThongRap == 'MegaGS') {
            bgColor = '#eab219';
        }
        return bgColor;
    }
    const fGetNameOfCinema = () => {
        let result = "";
        cinemaListByGroup.map((r, index) => {
            if (r.maCumRap == maCumRap) {
                result = r.tenCumRap;
            }
        })
        return result;
    }
    const dispatch = useDispatch();
    const columns = [
        {
            title: 'MÃ RẠP',
            dataIndex: 'maRap',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'TÊN RẠP',
            dataIndex: 'tenRap',
            key: 'age',
        },
        {
            title: 'ACTION',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button type="primary" icon={<BorderInnerOutlined />} onClick={()=>{
                         setShowForm(true);
                         setCinemaNumber({
                             ...cinemaNumber,maRap:record.maRap,tenRap:record.tenRap
                         });
                    }} >Tạo Lịch Chiếu</Button>
                </Space>
            ),
        },
    ];
    const fGetData = () =>{
        let result ;
        for(let i = 0; i < cinemaListByGroup.length; i++){
            if(maCumRap == cinemaListByGroup[i].maCumRap){
                result = (cinemaListByGroup[i].danhSachRap);
            }
        }
    
        return result;
    }
    const data = fGetData();
    useEffect(() => {
        dispatch(LayThongTinCumRapTheoHeThong(maHeThongRap));
    }, [])

    return (
        <div className="adminManage">
            <div className="title" >DANH SÁCH CÁC RẠP CỦA CỤM RẠP {fGetNameOfCinema().toUpperCase()} </div>
            <Table bordered columns={columns} dataSource={data} />
            <FormMovieShedule show={showForm} close={handleCloseForm} data={cinemaNumber}/>
        </div>
    )
}
