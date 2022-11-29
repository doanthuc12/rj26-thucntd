import React from "react";

import background from "../../../../src/image/thuc.jpg";
import "../Css/home.css";

function Home() {
  return (
    <>
      <div className="body">
        <div className="row">
          <div className="col-3 animate__animated animate__bounceInDown">
            <h6>The Drive</h6>
            <h6>The Walk</h6>
            <h6>The Return</h6>
            <h6>The End</h6>
          </div>
          <div className="col-6">
            <h1>The Walk</h1>
            <p>
              The walk to the Pulpit Rock will take you approximately two hours,
              give or take an hour depending on the weather conditions and your
              physical shape.
            </p>

            <img className='w-100 h-60 m-auto' src={background} alt="landscape" />
          </div>

          <div className="col-3 c3">
            <h1>What?</h1>
            <p>
              The Pulpit Rock is a part of a mountain that looks like a pulpit.
            </p>
            <h1>Where?</h1>
            <p>The Pulpit Rock is in Norway</p>
            <h1>Price?</h1>
            <p>The walk is free!</p>
          </div>
        </div>
      </div>
      {/* <div className="fixed-bottom footer">
      <p>
        This web page is a part of a demonstration of fluid web design made by
        www.w3schools.com. Resize the browser window to see the content response
        to the resizing.
      </p>
    </div> */}
      <br></br>
    </>
  );
}

export default Home;
