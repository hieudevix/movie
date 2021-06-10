import React from 'react'
import { Select } from 'antd';

const { Option } = Select;
export default function Carousel() {
    // renderCarousel = ()=>{
    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    // }
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide movie__carousel" data-ride="carousel">
                <ol className="carousel-indicators carousel__button">
                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner movie__carousel__item">
                    <div className="carousel-item active">
                        <img src="./images/carousel/trang_ti.jpg" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src="./images/carousel/ban_tay_diet_quy.png" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src="./images/carousel/lat_mat_48h.png" className="d-block w-100" />
                    </div>
                </div>
                <a className="carousel-control-prev " href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span aria-hidden="true"><img src="./images/icons/back-session.png" /></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span aria-hidden="true"><img src="./images/icons/next-session.png" /></span>
                </a>

                <div className="container formGetTicket" >
                    <div className="row" style={{ alignItems: 'center' }}>
                        <div className="col-4 selectFilm pr-0" >
                            {/* <Select defaultValue="Phim" style={{ width: '100%' }} onChange={handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select> */}
                            <div className="dropdown p-2">
                                <div className="selectMenu" style={{backgroundImage:"url('./images/dropdown-icon.png')"}}></div>
                                <div className="dropdown-title" href="#" role="button" id="dropdownMenuFilm" data-toggle="dropdown"  aria-expanded="false">
                                    Phim
                                </div>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuFilm">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>

                        </div>
                        <div className="col-2 selectCinema p-0">
                            <div className="dropdown p-2">
                                <div className="selectMenu" style={{backgroundImage:"url('./images/dropdown-icon.png')"}}></div>
                                <div className="dropdown-title"  href="#" role="button" id="dropdownMenuCinema" data-toggle="dropdown"  aria-expanded="false">
                                    Rạp Chiếu 
                                </div>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuCinema">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 selectDate p-0">
                            <div className="dropdown p-2">
                                <div className="selectMenu" style={{backgroundImage:"url('./images/dropdown-icon.png')"}}></div>
                                <div  className="dropdown-title"  href="#" role="button" id="dropdownMenuDate" data-toggle="dropdown"  aria-expanded="false">
                                    Ngày Xem
                                </div>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuDate">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 selectMovieScreening p-0">
                            <div className="dropdown p-2" >
                                <div className="selectMenu" style={{backgroundImage:"url('./images/dropdown-icon.png')"}}></div>
                                <div  className="dropdown-title"  href="#" role="button" id="dropdownMenuScreening" data-toggle="dropdown"  aria-expanded="false">
                                    Xuất Chiếu
                                </div>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuScreening">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <button id="#btnBuy" className="btn btn-dark">MUA VÉ NGAY</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
