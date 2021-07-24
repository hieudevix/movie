import React, { useEffect } from 'react';
import { Modal, Row, Col, Form, Input, Button, Select, DatePicker, TimePicker } from 'antd';
import moment from 'moment';
import logo from '../../../../asset/images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { getListFilm, insertMovieSheduleAction } from '../../../../redux/actions/ListMovieActions';
const { Option } = Select;

export default function FormMovieShedule(props) {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const { listFilmShowing } = useSelector(state => state.ListMovieReducer);
    console.log('film', listFilmShowing);
    const data = props.data;
    useEffect(() => {
        dispatch(getListFilm());
        form.setFieldsValue({
            maCumRap: data.maCumRap,
            maRap: data.maRap,
            tenRap: data.tenRap
        });
    }, [data])
    const renderSelect = () => {
        return listFilmShowing.map((f, index) => {
            return <Option value={f.maPhim}><img src={f.hinhAnh} style={{ height: '30px', width: '30px', borderRadius: '30px', marginRight: '5px' }} />{f.tenPhim}</Option>
        })
    }
    const onFinish = (values) => {
        let data = {
            ...values,
            'ngayChieuGioChieu': `${moment(values['ngayChieu']).format("DD/MM/YYYY")} ${moment(values['gioChieu']).format("hh:mm:ss")}`,
        }
        console.log('success', data);
        dispatch(insertMovieSheduleAction(data))
        
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Modal title={<div className="modalTitle">
                <img className="modalImg" src={logo} />
                <span className="modalInform">THÊM LỊCH CHIẾU</span>
            </div>} visible={props.show}
                footer={null} onCancel={props.close}
            >
                <Form
                    name="basic"
                    form={form}
                    onFinish={onFinish}
                    initialValues={{}}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Tên Phim:"
                        name="maPhim"
                        rules={[{ required: true, message: 'Hãy chọn phim!' }]}
                        labelCol={{ span: 0 }}
                    >
                        <Select
                            placeholder="Chọn phim!"
                            onChange={value => console.log(value)}
                            allowClear
                        >
                            {renderSelect()}
                        </Select>
                    </Form.Item>
                    <Row>
                        <Col span={12}>
                            <Form.Item label="Ngày Chiếu" labelCol={{ span: 10 }} name="ngayChieu" rules={[{ required: true, message: 'Hãy chọn ngày chiếu!' }]}>
                                <DatePicker />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Giờ Chiếu" labelCol={{ span: 8 }} name="gioChieu" rules={[{ required: true, message: 'Hãy chọn giờ chiếu!' }]} >
                                <TimePicker type="time" onChange={value => console.log(value)} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Giá Vé"
                                name="giaVe"
                                rules={[{ required: true, message: 'Hãy nhập giá vé!' }]}
                                labelCol={{ span: 8 }}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Cụm Rạp"
                                name="maCumRap"
                                rules={[{ required: true, message: 'Hãy nhập mã phim!' }]}
                                labelCol={{ span: 8 }}
                            >
                                <Input disabled />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Mã Rạp:"
                                name="maRap"
                                rules={[{ required: true, message: 'Hãy nhập mã phim!' }]}
                                labelCol={{ span: 8 }}
                            >
                                <Input disabled />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Tên Rạp:"
                                name="tenRap"
                                rules={[{ required: true, message: 'Hãy nhập mã phim!' }]}
                                labelCol={{ span: 8 }}
                            >
                                <Input disabled />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" danger htmlType="submit">
                            Submit
                        </Button>
                        <Button onClick={props.close}>
                            Cancel
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
