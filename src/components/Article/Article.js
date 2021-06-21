import React from 'react'

export default function Article() {
    return (
        <div className="article" >
            <nav className=" mb-4 article__tab">
                <div className="nav nav-tabs article__tab__item" id="nav-tab" role="tablist" >
                    <a className="nav-item tix-tab nav-link active mr-3" id="nav-home-tab" data-toggle="tab" href="#nav-movie" role="tab" aria-controls="nav-movie-tab" aria-selected="true">Điện Ảnh 24h</a>
                    <a className="nav-item tix-tab nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-review" role="tab" aria-controls="nav-review-tab" aria-selected="false">Review</a>
                    <a className="nav-item tix-tab nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-gift" role="tab" aria-controls="nav-gift-tab" aria-selected="false">Khuyến mãi</a>
                </div>
            </nav>
            <div className="tab-content container article__content" id="nav-tabContent">
                <div className="tab-pane fade show active list__film" id="nav-movie" role="tabpanel" aria-labelledby="nav-movie-tab">
                    <div className="row newsMovie">
                        <div className="col-6 newsMovie__item">
                            <a href="#"><img className="w-100 b-block" src="./images/icons/article/latmat.png" /></a>
                            <a href="#" className="articleTitle">Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất </a>
                            <p className="articleContent">Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ</p>
                            <div className="feedBack">
                                <img src="./images/icons/like.png" />
                                <img src="./images/icons/comment.png" />
                            </div>
                        </div>
                        <div className="col-6 newsMovie__item">
                            <a href="#"><img className="w-100 d-block" src="./images/icons/article/ali.png" /></a>
                            <a href="#" className="articleTitle">[MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] -  GỌI TÊN NHỮNG PHIM ĐIỆN ẢNH NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC TỰA GAME ĐÌNH ĐÁM </a>
                            <p className="articleContent">Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, Hollywood cũng không thiếu những tác phẩm đình đám được chuyển thể từ tiểu thuyết, phim hoạt hình, hay thậm chí là cả trò chơi điện tử.</p>
                            <div className="feedBack">
                                <img src="./images/icons/like.png" />
                                <img src="./images/icons/comment.png" />
                            </div>
                        </div>
                    </div>
                    <div className="row pt-2">
                        <div className="col-8 row newsMovieS">
                            <div className="col-6 newsMovieS_item">
                                <a href="#"><img className="w-100 b-block" src="./images/icons/article/1.png" /></a>
                                <a href="#" className="articleTitle">PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù đàn ông để đời</a>
                                <p className="articleContent">Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự nghiệp của cô trong phim Promising Young Woman (tựa Việt: Cô Gái Trẻ Hứa Hẹn). </p>
                                <div className="feedBack">
                                    <img src="./images/icons/like.png" />
                                    <img src="./images/icons/comment.png" />
                                </div>
                            </div>
                            <div className="col-6 newsMovieS_item">
                                <a href="#"><img className="w-100 b-block" src="./images/icons/article/2.png" /></a>
                                <a href="#" className="articleTitle">VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT QUỶ” ĐẢM BẢO ĐỐN TIM HỘI CHỊ EM</a>
                                <p className="articleContent">Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo Sik, tác phẩm kinh dị – hành động “Bàn Tay Diệt Quỷ” hứa hẹn sẽ làm cho hội chị em phải mê mẩn vào tháng tới.</p>
                                <div className="feedBack">
                                    <img src="./images/icons/like.png" />
                                    <img src="./images/icons/comment.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-4"></div>
                    </div>
                </div>
                <div className="tab-pane fade list__film" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab">

                </div>
                <div className="tab-pane fade list__film" id="nav-gift" role="tabpanel" aria-labelledby="nav-gift-tab">

                </div>
            </div>

        </div>
    )
}
