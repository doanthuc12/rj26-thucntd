import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import background from "../../../../src/image/thuc.jpg";
import "../Css/home.css";
import { useNavigate } from 'react-router-dom';

interface IState {
  userProduct: ProductReducer;
}

interface ProductReducer {
  users: Array<IProduct>;
  loading: boolean;
  error: null;
}
interface IProduct {
  name: string;
  avatar: string;
  email: string;
  id: number;
}

function Home() {
  let naviget = useNavigate();

  
  const handleClick = (e: any) => {
    e.preventDefault();
    naviget ("/loginform")}
  return (
    <>
      <div className="product">
        <div className="product__header">
          <div className="product__menu">
            <i className="fa fa-align-center product__menu-icon"></i>
            <span className="product__menu-text">Menu</span>
          </div>
          <h1 className="product__heading">Shopping</h1>
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
          <ul className="category">
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
          </ul>
        </div>
        <div className="product__slider">
          <ul className="slider">
            <li className="slider__item">
              <h2 className="slider__title">Hot product</h2>
              <div className="slider__img">
                <img
                  src="https://preview.ibb.co/m4VkQd/congo.png"
                  alt="Congo african product"
                />
              </div>
              <button onClick={handleClick} className="btn btn--secondary">Login</button>
            </li>
          </ul>
          
        </div>
      </div>
    </>
  );
}

export default Home;
