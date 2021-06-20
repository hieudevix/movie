import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row footer__info">
                    <div className="col-4 footer__detail">
                        <p className="footer__title row">TIX</p>
                        <div className="col-6 ">
                            <a>FAQ</a>
                            <a>Brand Guidelines</a>
                        </div>
                        <div className="col-6 ">
                            <a>Thỏa thuận sử dụng</a>
                            <a>Chính sách bảo mật</a>
                        </div>
                    </div>
                    <div className="col-4 footer__partner">
                        <p className="footer__title">ĐỐI TÁC</p>
                        <div className="col-12 row">
                            <a><img src="./images/icons/cgv.png" style={{backgroundColor:'white'}}/></a>
                            <a><img src="./images/icons/bhd.png" /></a>
                            <a><img src="./images/icons/galaxycine.png"/></a>
                            <a><img src="./images/icons/cinestar.png"/></a>
                            <a><img src="./images/icons/lotte.png"/></a>
                        </div>
                        <div className="col-12 row">
                            <a><img src="./images/icons/megags.png"/></a>
                            <a><img src="./images/icons/bt.jpg"/></a>
                            <a><img src="./images/icons/dongdacinema.png"/></a>
                            <a><img src="./images/icons/TOUCH.png"/></a>
                            <a><img src="./images/icons/cnx.jpg"/></a>
                        </div>
                        <div className="col-12 row">
                            <a><img src="./images/icons/STARLIGHT.png"/></a>
                            <a><img src="./images/icons/VCB.png"/></a>
                            <a><img src="./images/icons/VIETTINBANK.png"/></a>
                            <a><img src="./images/icons/zalopay_icon.png"/></a>
                            <a><img src="./images/icons/zion-logo.jpg"/></a>
                        </div>
                        <div className="col-12 row">
                            <a><img src="./images/icons/payoo.jpg"/></a>
                            <a><img src="./images/icons/laban.png"/></a>
                            <a><img src="./images/icons/AGRIBANK.png"/></a>
                            <a><img src="./images/icons/dcine.png"/></a>
                            <a><img src="./images/icons/IVB.png"/></a>
                        </div>
                    </div>
                    <div className="col-4 footer__app row">
                        <div className="col-6">
                            <p className="footer__title">MOBILE APP</p>
                        </div>
                        <div className="col-6">
                            <p className="footer__title">SOCIAL</p>
                        </div>
                    </div>
                </div>
                <div className="row footer__add">

                </div>
            </div>
        </div>
    )
}
