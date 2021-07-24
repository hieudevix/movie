import React, { useEffect } from 'react';
import { Card, Row, Col, Alert } from 'antd';
import './SeatMap.css'
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieShowtimeInfo } from '../../../redux/actions/BookingSticketsAction';

export default function SeatMap(props) {
    const maLichChieu = props.match.params.maLichChieu;
    const { listMovieShowtime } = useSelector(state => state.BookingSticketsReducer);
    console.log('mã lịch chiếu',maLichChieu);
    console.log(listMovieShowtime);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovieShowtimeInfo(maLichChieu));
    }, []);
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
    
    const renderSeats = () => {
        let result = [];
        let arrSeat = listMovieShowtime.danhSachGhe;
        for (let i = 0; i <= arrSeat?.length; i = i + 16) {
            let a = 'A';
            let arrData = <div key={i} className="listSeatRow"><span className="seatChart">{listChar.map((c, indexc) => {
                if (c.number == i) {
                    return c.char;
                }
            })}</span>
                {arrSeat.map((v, index) => {
                    let classSeatVIPBooked = v.daDat ? v.loaiGhe === 'Vip' ? 'seatVIPBooked' : '' : '';
                    let classSeatBooked = v.daDat ? 'seatBooked' : '';
                    let classSeatVIP = v.loaiGhe === 'Vip' ? 'seatVIP' : '';
                    if (index <= i - 1 && index >= i - 16) {
                        return <button key={index}  disabled={v.daDat} className={`text-center seat ${classSeatVIP}  ${classSeatBooked} ${classSeatVIPBooked}`}>{v.daDat ? 'X' : <span></span>}</button>
                    }
                })}
            </div>
            result.push(arrData);
        }
        return result;
    }
    return (
        <div className="adminMovieShedule">
            <Row>
                <Col span={16}>
                    <Card type="inner" title="DANH SÁCH GHẾ" >
                        {renderSeats()}
                    </Card>
                </Col>
                <Col span={8}>
                    <Card type="inner" title="THÔNG TIN CHI TIẾT LỊCH CHIẾU" >
                        <Alert message={`Tên Phim : ${listMovieShowtime?.thongTinPhim?.tenPhim}`} type="error" />
                        <Alert message={`Ngày Chiếu : ${listMovieShowtime?.thongTinPhim?.ngayChieu} - ${listMovieShowtime?.thongTinPhim?.gioChieu}`} type="error" />
                        <Alert message={<span>Hình Ảnh: <img style={{width:'70px', height:'70px',borderRadius:'10px'}} src={listMovieShowtime?.thongTinPhim?.hinhAnh}/></span>} type="error" />
                        <Alert message={`Tên Rạp : ${listMovieShowtime?.thongTinPhim?.tenRap}`} type="error" />
                        <Alert message={`Tên Cụm Rạp : ${listMovieShowtime?.thongTinPhim?.tenCumRap}`} type="error" />
                        <Alert message={`Tên Địa Chỉ : ${listMovieShowtime?.thongTinPhim?.diaChi}`} type="error" />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
