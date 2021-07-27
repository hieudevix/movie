import React, { useState } from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import useSelection from 'antd/lib/table/hooks/useSelection';
import { STICKETINFO, TOKEN, TYPE_USER, USERLOGIN } from '../../util/setting';
import logo from './../../asset/images/logo.png';
import locationImg from './../../asset/images/location-header.png';
import avatar from './../../asset/images/avatar.png';
import button from './../../asset/images/icons/menu-options.png';
import next from './../../asset/images/icons/next-session.png';

export default function Header() {
    const { location, listLocation } = useSelector(state => state.LocationReducer);
    const { userName, userType } = useSelector(state => state.UserReducer);
    const [hidden, setHidden] = useState(false);
    const dispatch = useDispatch();

    const renderLocation = () => {
        return listLocation.map((value, index) => {
            return <a href="#" className="dropdown-item" key={index} onClick={() => {
                dispatch({
                    type: "SET_LOCATION",
                    location: value
                })
            }}>{value}</a>
        })
    }
    return (
        <>
            <div className="container-fluid" style={{ padding: '0', position: 'fixed', zIndex: '10001', top: '-1px' }}>
                <nav className="header">
                    <div className="header__logo">
                        <NavLink to="/"><img src={logo} /></NavLink>
                    </div>
                    <div className="header__nav">
                        <ul>
                            <li><a href="#tab">Lịch Chiếu</a> </li>
                            <li><a href="#listCinema">Cụm Rạp</a></li>
                            <li><a href="#article">Tin Tức</a></li>
                            <li><a href="#introduce">Ứng Dụng</a></li>
                        </ul>
                    </div>
                    <div className="header__detail">
                        <div className="header__detail__login">
                            {localStorage.getItem(USERLOGIN) ? <span  style={{ display: 'flex' }}><img src={avatar} /><div className="dropdown">
                                <div className=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {userName}
                                </div>
                                <div className="dropdown-menu user" aria-labelledby="dropdownMenuButton">
                                    {localStorage.getItem(TYPE_USER) == "\"QuanTri\"" ? <NavLink className="dropdown-item" to="/admin">Dashboard</NavLink> : ''}
                                    <a className="dropdown-item" to="" >Danh Sách Vé</a>
                                    <a className="dropdown-item" onClick={() => {
                                        localStorage.removeItem(USERLOGIN);
                                        localStorage.removeItem(TYPE_USER);
                                        localStorage.removeItem(TOKEN);
                                        localStorage.removeItem(STICKETINFO);
                                        window.location.reload();
                                    }}>Đăng Xuất</a>
                                </div>
                            </div></span> : <NavLink to="/login">
                                <img src={avatar}></img>
                                <span>Đăng Nhập</span>
                            </NavLink>}
                        </div>
                        <div className="header__detail__pos dropdown ml-2" id="dropdown_click" >
                            <div className="header__pos__icon" ></div>
                            <div className="header__choose__pos" href="#" id="dropdownMenuLocation" data-toggle="dropdown" aria-expanded="true">
                                <img className="mr-1" src={locationImg} />
                                <span>{location}</span>
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLocation">
                                {renderLocation()}
                            </div>
                        </div>
                    </div>
                    <div onClick={() => { setHidden(true) }} className="header__button">
                        <img src={button} />
                    </div>
                </nav>
            </div>
            <div onClick={()=>{setHidden(false)}} className={hidden ? "header__dropdown active" : "header__dropdown"}>
                <div className={hidden ? "dropdown__content active" : "dropdown__content"}>
                    <div className="mobile__user ">
                        <img src={avatar} />
                        {localStorage.getItem(USERLOGIN) ? <span>{userName}</span> : <NavLink to="/login">Đăng Nhập</NavLink>}
                        <span onClick={() => { setHidden(false) }} className="button__close">
                            <img src={next} />
                        </span>
                    </div>
                    <div className="mobile__nav">
                        <a href="#">Lịch Chiếu</a>
                    </div>
                    <div className="mobile__nav">
                        <a href="#">Cụm Rạp</a>
                    </div>
                    <div className="mobile__nav">
                        <a href="#">Tin Tức</a>
                    </div>
                    <div className="mobile__nav">
                        <a href="#">Ứng Dụng</a>
                    </div>
                    <div className="mobile__nav">
                        <a href="#">{location}</a>
                    </div>
                    <div className="mobile__nav">
                        {localStorage.getItem(USERLOGIN) ? <a onClick={() => {
                            localStorage.removeItem(USERLOGIN);
                            localStorage.removeItem(TYPE_USER);
                            localStorage.removeItem(TOKEN);
                            localStorage.removeItem(STICKETINFO);
                            window.location.reload();
                        }}>Đăng Xuất</a> : ''}
                    </div>
                </div>
            </div>
            {/* <div className="overplay"></div> */}
        </>
    )
}
