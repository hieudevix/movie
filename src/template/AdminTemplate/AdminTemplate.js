import React, { Fragment, useState } from 'react'
import { Route } from "react-router-dom";
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';
import AdminHeader from '../../components/Admin/AdminHeader/AdminHeader';
import './AdminTemplate.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import logo from '../../../src/asset/images/favicon.co.png';
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
import { TYPE_USER } from '../../util/setting';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const AdminTemplate = (props) => {

    const [state, setState] = useState({ collapsed: false })
    const collapsed = state.collapsed;
    const getPath = props.location.pathname;
    const path = getPath.split("/");
    const defaultKey = (path) => {
        let key = "1";
        if (path == 'list-film') {
            key = "7";
        }
        if (path == 'list-cinema') {
            key = "14";
        }
        if (path == 'list-user' || path == 'i-detail') {
            key = "3";
        }
        if (path == 'movie-shedule') {
            key = "12";
        }
        if (path == 'shedule-cinema') {
            key = "15";
        }
        if(path == 'seat-map'){
            key = "15"
        }
        return key;
    }
    const getLink = (path, index) => {
        let result = '';
        for (let i = 0; i < index; i++) {
            result += `/${path[i]} `;
        }
        console.log(result);
        return result;
    }
    const renderPath = () => {
        let arrR = [];
        for (let i = 0; i < path.length; i++) {
            let data = <Breadcrumb.Item><NavLink to={`/${path[i - 1]}/${path[i]}`}>{path[i]}</NavLink></Breadcrumb.Item>
            arrR.push(data);
        }
        return arrR;
    }
    const onCollapse = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };
    return <Route path={props.path} exact render={(propsRoute) => {
        return localStorage.getItem(TYPE_USER) === "\"QuanTri\"" ? <Fragment>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={[defaultKey(path[2])]} mode="inline" style={{ height: '200px' }}>
                        <Menu.Item id="logoAdmin" icon={<img src={logo} />} >
                            <NavLink to="/">  ADMIN MANAGER</NavLink>
                        </Menu.Item>
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            Dashboard
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            Notifications
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="Quản Lý Người Dùng">
                            <Menu.Item key="3"><NavLink to="/admin/list-user">Danh Sách Người Dùng</NavLink></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<InsertRowBelowOutlined />} title="Quản Lý Phim">
                            <Menu.Item key="7"><NavLink to="/admin/list-film">Danh Sách Phim</NavLink></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<HddOutlined />} title="Quản Lý Phòng Vé">
                            <Menu.Item key="12"><NavLink to="/admin/movie-shedule">Lịch Chiếu Phim</NavLink> </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" icon={<LaptopOutlined />} title="Quản Lý Rạp">
                            <Menu.Item key="14"><NavLink to="/admin/list-cinema">Thông Tin Cụm Rạp</NavLink></Menu.Item>
                            <Menu.Item key="15"><NavLink to="/admin/shedule-cinema">Thông Tin Lịch Chiếu</NavLink></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="16" icon={<FileOutlined />}>
                            File
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <AdminHeader />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            {/* <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                            {path.map((v, index) => {
                                return <Breadcrumb.Item><NavLink key={index} to={`/${v}`}>{v}</NavLink></Breadcrumb.Item>
                            })
                            }
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, height: '90%' }}>
                            <props.component {...propsRoute} />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}> ©2021 Created by hieu091099  </Footer>
                </Layout>
            </Layout>
        </Fragment> : <Redirect to="/" />
    }} />
}