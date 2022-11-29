import React from "react";

import "../css/home.css";
function Home() {
  return (
    <>
      <div className="product">
        <div className="product__header">
          <h1 className="product__heading">Welcome</h1>
          <ul className="tool">
            <li className="tool__item">
              <i className="far fa-heart"></i>
            </li>
            <li className="tool__item">
              <i className="fas fa-search"></i>
            </li>
            <li className="tool__item">
              <i className="fas fa-shopping-bag"></i>
            </li>
          </ul>
        </div>
        <div className="product__nav">
          {/* <ul className="category">
            <li className="category__item">
              <a className="category__link" href="javascript:void(0)">
                Brands
              </a>
            </li>
            <li className="category__item">
              <a className="category__link" href="javascript:void(0)">
                Footwear
              </a>
            </li>
            <li className="category__item">
              <a className="category__link" href="javascript:void(0)">
                Clothing
              </a>
            </li>
          </ul> */}
        </div>
        <div className="product__slider">
          <ul className="slider">
            <li className="slider__item">
              <h2 className="slider__title">Solution Anywhere</h2>
              <div className="slider__img">
                <img
                  src="https://images-platform.99static.com//dqUri0smZi1nS-vwbHxvT5_vuMU=/0x0:1000x1000/fit-in/500x500/99designs-contests-attachments/99/99320/attachment_99320706"
                  alt="Welcome Home"
                />
                <p>
                Solution Anywhere là trụ sở của tổ chức phát triển phần mềm mã
                  nguồn mở tại Chicago, Hoa Kỳ. Công ty muốn làm cho sự hiện
                  diện của mình trở nên phổ biến trên toàn thế giới bằng cách
                  tạo ra một trang Web sẽ làm nổi bật các hoạt động được thực
                  hiện bởi tổ chức. Tổ chức cũng cung cấp tất cả các phần mềm có
                  sẵn dưới dạng phần mềm miễn phí.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
