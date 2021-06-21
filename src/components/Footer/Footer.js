import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row footer__info">
                    <div className="col-4 footer__detail">
                        <p className="footer__title">TIX</p>
                        <div className="row">
                            <div className="col-5 pr-0">
                                <a href="#">FAQ</a><br/>
                                <a href="#">Brand Guidelines</a>
                            </div>
                            <div className="col-6 pl-0">
                                <a href="#">Thỏa thuận sử dụng</a><br/>
                                <a href="#">Chính sách bảo mật</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 footer__partner">
                        <p className="footer__title">ĐỐI TÁC</p>
                        <div className="col-12 row">
                            <a href="#"><img src="./images/icons/cgv.png" style={{ backgroundColor: 'white' }} /></a>
                            <a href="#"><img src="./images/icons/bhd.png" /></a>
                            <a href="#"><img src="./images/icons/galaxycine.png" /></a>
                            <a href="#"><img src="./images/icons/cinestar.png" /></a>
                            <a href="#"><img src="./images/icons/lotte.png" /></a>
                        </div>
                        <div className="col-12 row">
                            <a href="#"><img src="./images/icons/megags.png" /></a>
                            <a href="#"><img src="./images/icons/bt.jpg" /></a>
                            <a href="#"><img src="./images/icons/dongdacinema.png" /></a>
                            <a href="#"><img src="./images/icons/TOUCH.png" /></a>
                            <a href="#"><img src="./images/icons/cnx.jpg" /></a>
                        </div>
                        <div className="col-12 row">
                            <a href="#"><img src="./images/icons/STARLIGHT.png" /></a>
                            <a href="#"><img src="./images/icons/VCB.png" /></a>
                            <a href="#"><img src="./images/icons/VIETTINBANK.png" /></a>
                            <a href="#"><img src="./images/icons/zalopay_icon.png" /></a>
                            <a href="#"><img src="./images/icons/zion-logo.jpg" /></a>
                        </div>
                        <div className="col-12 row">
                            <a href="#"><img src="./images/icons/payoo.jpg" /></a>
                            <a href="#"><img src="./images/icons/laban.png" /></a>
                            <a href="#"><img src="./images/icons/AGRIBANK.png" /></a>
                            <a href="#"><img src="./images/icons/dcine.png" /></a>
                            <a href="#"><img src="./images/icons/IVB.png" /></a>
                        </div>
                    </div>
                    <div className="col-4 footer__app row">
                        <div className="col-6">
                            <p className="footer__title">MOBILE APP</p>
                            <a href="#"><img src="./images/icons/android-logo.png"/></a>
                            <a href="#"><img src="./images/icons/apple-logo.png"/></a>
                        </div>
                        <div className="col-6">
                            <p className="footer__title">SOCIAL</p>
                            <a href="#"><img src="./images/icons/facebook-logo.png"/></a>
                            <a href="#"><img src="./images/icons/zalo-logo.png"/></a>
                        </div>
                    </div>
                </div>
                <hr id="hrFooter"/>
                <div className="row footer__add">
                    <div className="col-1 p-0">
                        <img src="./images/icons/zion-logo.jpg" style={{width:'100%', borderRadius:'10px', cursor:'pointer'}}/>
                    </div>
                    <div className="col-8 pr-0 address__detail">
                        <p className="footer__title">TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
                        <p>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</p>
                        <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
                        <p>đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.</p>
                        <p>Số Điện Thoại (Hotline): 1900 545 436 </p>
                        <p>Email: <a href="#" style={{color:'red'}}>support@tix.vn</a></p>
                    </div>
                    <div className="col-2 p-0">
                        <img src="./images/icons/bocongthuong.png" style={{width:'100%', cursor:'pointer'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
