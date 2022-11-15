import React, { useState } from "react";
import foodphoto1 from "../Image/food photo 1.png";
import foodphoto2 from "../Image/food photo 2.png";
import foodphoto3 from "../Image/food photo 3.png";
import foodphoto4 from "../Image/food photo 4.png";
import foodphoto5 from "../Image/food photo 5.png";

function CaroselF() {
  const [indexImage, setImage] = useState(0);
  const handlePrev = () => {
    if (indexImage > 0) {
      setImage(indexImage - 1);
    }
    if (indexImage === 0) {
      setImage(images.length - 1);
    }
  };
  const handleNext = () => {
    if (indexImage < images.length - 1) {
      setImage(indexImage + 1);
    }
    if (indexImage === images.length - 1) {
      setImage(0);
    }
  };
  const images = [
    {
      id: 1,
      url: foodphoto1,
    },
    {
      id: 2,
      url: foodphoto2,
    },
    {
      id: 3,
      url: foodphoto3,
    },
    {
      id: 4,
      url: foodphoto4,
    },
    {
      id: 5,
      url: foodphoto5,
    },
  ];
  return (
    <>
      <div>
        <div className="col-2 " onClick={handlePrev}>
          Prev
        </div>
        <div className="col">
          {images?.map((item) => (item.id === indexImage ? item.url : null))}
        </div>
        <div className="col-2" onClick={handleNext}>
          Next
        </div>
      </div>
      {/* Thumnail */}
      <div>
        {images.map((item, index) => (
          <span
            onClick={() => setImage(index)}
            className="px-3"
            key={item.url + index}
          >
            {index + 1}
          </span>
        ))}
      </div>
    </>
  );
}

export default CaroselF;
