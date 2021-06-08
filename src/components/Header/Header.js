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
                            <li>Lịch Chiếu</li>
                            <li>Cụm Rạp</li>
                            <li>Tin Tức</li>
                            <li>Ứng Dụng</li>
                        </ul>
                    </div>
                    <div className="header__detail"></div>
                </nav>
            </div>
        )
    }
}
