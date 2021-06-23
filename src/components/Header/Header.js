import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import useSelection from 'antd/lib/table/hooks/useSelection';
import { TOKEN, TYPE_USER, USERLOGIN } from '../../util/setting';

export default function Header() {
    const { location, listLocation } = useSelector(state => state.LocationReducer);
    const { userName, userType } = useSelector(state => state.UserReducer);
    console.log('test:',userType);
    const dispatch = useDispatch();

    const renderLocation = () => {
        return listLocation.map((value, index) => {
            return <a className="dropdown-item" key={index} onClick={() => {
                dispatch({
                    type: "SET_LOCATION",
                    location: value
                })
            }}>{value}</a>
        })
    }
    return (
        <div className="container-fluid" style={{ padding: '0', position: 'fixed', zIndex: '100', top: '-1px' }}>
            <nav className="header">
                <div className="header__logo">
                    <img src="./images/logo.png" />
                </div>
                <div className="header__nav">
                    <ul>
                        <li><a href="#">Lịch Chiếu</a> </li>
                        <li><a href="#">Cụm Rạp</a></li>
                        <li><a href="#">Tin Tức</a></li>
                        <li><a href="#">Ứng Dụng</a></li>
                    </ul>
                </div>
                <div className="header__detail">
                    <div className="header__detail__login">
                        {localStorage.getItem(USERLOGIN) ? <a><img src="./images/avatar.png" /><span onClick={()=>{
                            localStorage.removeItem(USERLOGIN);
                            localStorage.removeItem(TYPE_USER);
                            localStorage.removeItem(TOKEN);
                            window.location.reload();
                        }}>{userName}</span></a> : <NavLink to="/login">
                            <img src="./images/avatar.png"></img>
                            <span>Đăng Nhập</span>
                        </NavLink>}
                    </div>
                    <div className="header__detail__pos dropdown ml-2" id="dropdown_click" >
                        <div className="header__pos__icon" style={{ backgroundImage: "url('./images/dropdown-icon.png')" }}></div>
                        <div className="header__choose__pos" href="#" id="dropdownMenuLocation" data-toggle="dropdown" aria-expanded="true">
                            <img className="mr-1" src="./images/location-header.png" />
                            <span>{location}</span>
                        </div>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLocation">
                            {renderLocation()}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
