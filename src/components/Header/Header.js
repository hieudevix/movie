import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="header">
                    <div className="header__logo">
                        <img src="./images/logo.png"/>
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
                        <div className="header__detail__pos">
                            <img src="./images/location-header.png"/>
                            <span>Hồ Chí Minh</span>
                            <img src="./images/dropdown-icon.png"/>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
