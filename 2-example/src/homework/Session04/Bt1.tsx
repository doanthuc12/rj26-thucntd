import React, { useState } from "react";

function Bt1() {
  const [inputNumber, setInputNUmber] = useState<number>();
  const [result, setResult] = useState<number | undefined>();
  const handleClick = () => {
    console.log("click");

    let res = bt1(inputNumber);
    inputNumber && setResult(res);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputNUmber(parseInt(e.target.value));
    // console.log(typeof inputNumber);
  };
  const bt1 = (_inputNumber: number | undefined) => {
    return _inputNumber ? _inputNumber * 2 : undefined;
  };

  return (
    <div>
      <input
        type="text"
        value={inputNumber}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={handleClick}>Run</button>
      {result}
    </div>
  );
}

export default Bt1;
