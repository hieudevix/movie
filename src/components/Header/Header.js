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

export default function Header() {
    const location = ["Hồ Chí Minh", "Vũng Tàu"];
    return (
        <div>
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
                        <a href="#">
                            <img src="./images/avatar.png"></img>
                            <span>Đăng Nhập</span>
                        </a>
                    </div>
                    <div className="header__detail__pos dropdown ml-2" id="dropdown_click" >
                                            
                        <a className="dropdown-toggle" href="#" id="dropdownMenuLink" data-toggle="dropdown"  aria-expanded="true">
                            <img className="mr-1" src="./images/location-header.png" /> 
                            <span >Hồ Chí Minh</span> 
                            <img className="ml-4" src="./images/dropdown-icon.png"/>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="#">Hồ Chí Minh</a>
                            <a className="dropdown-item" href="#">Hà Nội</a>
                            <a className="dropdown-item" href="#">Đà Nẵng</a>
                            <a className="dropdown-item" href="#">Hải Phòng</a>
                            <a className="dropdown-item" href="#">Biên Hòa</a>
                            <a className="dropdown-item" href="#">Nha Trang</a>
                            <a className="dropdown-item" href="#">Bình Dương</a>
                            <a className="dropdown-item" href="#">Phan Thiết</a>
                            <a className="dropdown-item" href="#">Hạ Long</a>
                            <a className="dropdown-item" href="#">Cần Thơ</a>
                            <a className="dropdown-item" href="#">Vũng Tàu</a>
                        </div>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}
