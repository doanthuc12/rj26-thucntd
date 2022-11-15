import React, { useState } from "react";

function Bt2() {
  const [number1, setNumber1] = useState<number>();
  const [number2, setNumber2] = useState<number>();
  const [number3, setNumber3] = useState<number>();
  const [number4, setNumber4] = useState<number>();
  const [res, setResult] = useState<number | string>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "name1":
        setNumber1(parseInt(e.target.value));
        break;
      case "name2":
        setNumber2(parseInt(e.target.value));
        break;
      case "name3":
        setNumber3(parseInt(e.target.value));
        break;
      case "name4":
        setNumber4(parseInt(e.target.value));
        break;
      default:
        break;
    }
  };
  const handleClick = () => {
    if (number1 && number2 && number3 && number4) {
      let numberMin = number1;
      if (numberMin > number1) {
        numberMin = number1;
      }
      if (numberMin > number2) {
        numberMin = number2;
      }
      if (numberMin > number3) {
        numberMin = number3;
      }
      if (numberMin > number4) {
        numberMin = number4;
      }
      setResult(numberMin);
    } else setResult("Vui long nhap du 4 so");
  };
  return (
    <div>
      <input
        type="text"
        name="name1"
        value={number1 ? number1 : ""}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name="name2"
        value={number2 ? number2 : ""}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name="name3"
        value={number3 ? number3 : ""}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name="name4"
        value={number4 ? number4 : ""}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={handleClick}>Run</button>
      <p>{res}</p>
    </div>
  );
}

export default Bt2;
