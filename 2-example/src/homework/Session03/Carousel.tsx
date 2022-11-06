import React from "react";
import Carousel from "react-bootstrap/Carousel";
import foodphoto1 from "../Image/food photo 1.png";
import foodphoto2 from "../Image/food photo 2.png";
import foodphoto3 from "../Image/food photo 3.png";
import foodphoto4 from "../Image/food photo 4.png";
import foodphoto5 from "../Image/food photo 5.png";

function Image() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row title" style={{ marginBottom: "20px" }}>
          <div className="col-sm-12 btn btn-warning text-white">
            The Top Foodphotographer in Instagram
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ marginBottom: "20px" }}>
        <Carousel>
          <Carousel.Item style={{ height: "450px"}}>
            <img
              style={{ height: "450px" }}
              className="d-block w-200"
              src={foodphoto1}
              alt="foodphoto1"
            />
            <Carousel.Caption>
              <h4 className="bg-light text-dark">Tươi sáng cùng ẩm thực với @dennistheprescott </h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "450px" }}>
            <img
              style={{ height: "450px" }}
              className="d-block w-200"
              src={foodphoto2}
              alt="foodphoto2"
            />
            <Carousel.Caption>
              <h4 className="bg-light text-dark">Phong cách xanh bình yên với @foodtographyschool </h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "450px" }}>
            <img
              style={{ height: "450px" }}
              className="d-block w-200"
              src={foodphoto3}
              alt="foodphoto3"
            />
            <Carousel.Caption>
              <h4 className="bg-light text-dark">Thiên đường làm bánh với @chefbenchurchil </h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "450px" }}>
            <img
              style={{ height: "450px" }}
              className="d-block w-200"
              src={foodphoto5}
              alt="foodphoto5"
            />
            <Carousel.Caption>
              <h4 className="bg-light text-dark">Ẩm thực trời Âu với @sliceofpai </h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "450px" }}>
            <img
              style={{ height: "450px" }}
              className="d-block w-200"
              src={foodphoto4}
              alt="foodphoto4"
            />
            <Carousel.Caption>
              <h4 className="bg-light text-dark">Đắm say ngọt ngào với @sarah_fel </h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Image;
