import React, { useEffect } from 'react'
import { Modal, Row, Col, Form, Input, Button, Select } from 'antd';
import logo from '../../../../asset/images/logo.png';
import { useDispatch } from 'react-redux';
import { insertUserAction, updateUserAction } from '../../../../redux/actions/UserAction';
const { Option } = Select;
export default function FormUser(props) {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const userUpdate = props.userUpdate;
    useEffect(()=>{
        if (props.type == 'update') {
            form.setFieldsValue({
              taiKhoan: userUpdate.taiKhoan,
              hoTen: userUpdate.hoTen,
              email: userUpdate.email,
              soDt: userUpdate.soDt,
              matKhau: userUpdate.matKhau,
              maLoaiNguoiDung: userUpdate.maLoaiNguoiDung
            });
          }else{
            form.setFieldsValue({
                taiKhoan: '',
                hoTen: '',
                email: '',
                soDt: '',
                matKhau: '',
                maLoaiNguoiDung: ''
              });
          }
    },[props.type,userUpdate])
    const onFinish = (values) => {
        if(props.type=='insert'){
            dispatch(insertUserAction(values));
        }if(props.type=='update'){
            console.log('update',values);
            dispatch(updateUserAction(values));
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      }
    return (
        <div>
            <Modal title={<div className="modalTitle">
                <img className="modalImg" src={logo} />
                <span className="modalInform">{props.type == 'update' ? 'CẬP NHẬT NGƯỜI DÙNG' : 'THÊM NGƯỜI DÙNG'}</span>
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
                    <Row>
                        <Col span={12}>
                            <Form.Item
                                label="Tài Khoản"
                                name="taiKhoan"
                                rules={[{ required: true, message: 'Hãy nhập tài khoản!' }]}
                                labelCol={{ span: 8 }}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Mật Khẩu"
                                name="matKhau"
                                rules={[{ required: true, message: 'Hãy nhập mật khẩu!' }]}
                                labelCol={{ span: 0 }}
                            >
                                <Input.Password />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Họ Tên"
                                name="hoTen"
                                rules={[{ required: true, message: 'Hãy nhập họ tên!' }]}
                                labelCol={{ span: 8 }}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Số ĐT"
                                name="soDt"
                                rules={[{ required: true, message: 'Hãy nhập số điện thoại!' }]}
                                labelCol={{ span: 8 }}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Hãy nhập email!' }]}
                                labelCol={{ span: 8 }}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Loại User"
                                name="maLoaiNguoiDung"
                                rules={[{ required: true, message: 'Hãy nhập loại người dùng!' }]}
                                labelCol={{ span: 8 }}
                            >
                                <Select  onChange={handleChange}>
                                    <Option value="KhachHang">Khách Hàng</Option>
                                    <Option value="QuanTri">Quản Trị</Option>
                                </Select>
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
