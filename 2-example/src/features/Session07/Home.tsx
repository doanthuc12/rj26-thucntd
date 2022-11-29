import React from "react";
// import shirt from "../homework/Session02/basic-images/shirt.jpg";
import "./Basic1.css";
import shirt from "../basic-images/shirt.jpg";

function Home() {
  return (
    <div className="Basic1">
      <div className="container">
        <div className="box">
          <img src={shirt} alt="shirt" />
          <div className="textbox">
            <h4>Clothing & Apprel</h4>
            <p> Accessories</p>
            <p>Bags</p>
            <p>Kid's Fashion</p>
            <p> Mens</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
