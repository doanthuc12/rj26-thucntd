import React from "react";
import "./Basic2.css";
import tv from "../basic-images/2.jpg";

function Basic2() {
  return (
    <div className="Basic2">
      <div className="container">
        <div className="boxup">
          <img src={tv} alt="tv" />
          <p> YOUNG SHOP</p>
        </div>
        <div className="boxdown">
            <h6>Samsung UHD TV 24inch</h6>
            <h6>02</h6>
            <h5>$599</h5>
        </div>
      </div>
    </div>
  );
}

export default Basic2;
