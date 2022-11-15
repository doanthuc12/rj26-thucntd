import React, { useMemo, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function RatingF() {
  const [star, setStar] = useState(0);
  //   const arrDefault = [1, 2, 3, 4, 5];
  const arrDefault = useMemo(() => [1, 2, 3, 4, 5], []);
  const handleClick = (item: number) => {
    setStar(item);
  };
  return (
    <div>
      {arrDefault.map((item) => {
        return (
          <span key={item} onMouseEnter={() => handleClick(item)}>
            {item <= star ? <AiFillStar /> : <AiOutlineStar />}
          </span>
        );
      })}
    </div>
  );
}

export default RatingF;
