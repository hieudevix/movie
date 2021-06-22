// import React, { Component } from 'react'

// export default class Header extends Component {
//     clickDropDown(){

//     }

//     render() {
//         return (
//             <div>
//                 <nav className="header">
//                     <div className="header__logo">
//                         <img src="./images/logo.png"/>
//                     </div>
//                     <div className="header__nav">
//                         <ul>
//                             <li><a href="#">Lịch Chiếu</a> </li> 
//                             <li><a href="#">Cụm Rạp</a></li>
//                             <li><a href="#">Tin Tức</a></li>
//                             <li><a href="#">Ứng Dụng</a></li>
//                         </ul>
//                     </div>
//                     <div className="header__detail">
//                         <div className="header__detail__login">
//                             <a href="#">
//                                 <img src="./images/avatar.png"></img>
//                                 <span>Đăng Nhập</span>
//                             </a>
//                         </div>
//                         <div className="header__detail__pos" id="dropdown_click" onClick={()=>{this.clickDropDown()}}>
//                             <img src="./images/location-header.png"/>
//                             <span>Hồ Chí Minh</span>
//                             <img src="./images/dropdown-icon.png"/>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         )
//     }
// }

import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import useSelection from 'antd/lib/table/hooks/useSelection';

export default function Header() {
    const { location, listLocation } = useSelector(state => state.LocationReducer);
    const dispatch = useDispatch();

    const renderLocation = () => {
        return listLocation.map((value, index) => {
            return <a className="dropdown-item"  key={index} onClick={() => {
                dispatch({
                    type: "SET_LOCATION",
                    location: value
                })
            }}>{value}</a>
        })
    }

    return (
        <div className="container-fluid" style={{padding:'0', position:'fixed',zIndex:'100',top:'-1px'}}>
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
                        <NavLink to="/login">
                            <img src="./images/avatar.png"></img>
                            <span>Đăng Nhập</span>
                        </NavLink>
                    </div>
                    <div className="header__detail__pos dropdown ml-2" id="dropdown_click" >
                        <div className="header__pos__icon" style={{backgroundImage:"url('./images/dropdown-icon.png')"}}></div>
                        <div className="header__choose__pos"  href="#"  id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="true">
                            <img className="mr-1" src="./images/location-header.png" />
                            <span>{location}</span>
                        </div>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            {renderLocation()}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
