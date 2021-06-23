import React, { Fragment, useState } from 'react'
import { Route } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import AdminHeader from '../../components/Admin/AdminHeader/AdminHeader';
import './AdminTemplate.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  InsertRowBelowOutlined,
  HddOutlined,
  LaptopOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;








export const AdminTemplate = (props) => {

    const [state, setState] = useState({ collapsed: false })
    const collapsed = state.collapsed;
    const onCollapse = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };
    return <Route path={props.path} exact render={(propsRoute) => {
        return <Fragment>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{height:'200px'}}>
                        <Menu.Item  id="logoAdmin" icon={<img src="./images/favicon.co.png" />} >
                            ADMIN MANAGER
                        </Menu.Item>
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            Dashboard
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            Notifications
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="Quản Lý Người Dùng">
                            <Menu.Item key="3">Danh Sách Người Dùng</Menu.Item>
                            <Menu.Item key="4">Thêm Người Dùng</Menu.Item>
                            <Menu.Item key="5">Cập Nhật Thông Tin</Menu.Item>
                            <Menu.Item key="6">Xóa Người Dùng</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<InsertRowBelowOutlined />} title="Quản Lý Phim">
                            <Menu.Item key="7"><NavLink to="/">Danh Sách Phim</NavLink></Menu.Item>
                            <Menu.Item key="8">Thêm Phim</Menu.Item>
                            <Menu.Item key="9">Xóa Phim</Menu.Item>
                            <Menu.Item key="10">Cập Nhật Thông Tin Phim</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<HddOutlined />} title="Quản Lý Phòng Vé">
                            <Menu.Item key="11"><NavLink to="/">Danh Sách Phòng Vé</NavLink></Menu.Item>
                            <Menu.Item key="12">Tạo Lịch Chiếu Phim</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" icon={<LaptopOutlined />} title="Quản Lý Rạp">
                            <Menu.Item key="13"><NavLink to="/">Hệ Thống Rạp</NavLink></Menu.Item>
                            <Menu.Item key="14">Thông Tin Cụm Rạp</Menu.Item>
                            <Menu.Item key="15">Thông Tin Lịch Chiếu</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="16" icon={<FileOutlined />}>
                            File
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <props.component />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, height: '90%' }}>
                            Bill is a cat.
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}> ©2021 Created by hieu091099 </Footer>
                </Layout>
            </Layout>
        </Fragment>
    }} />
}