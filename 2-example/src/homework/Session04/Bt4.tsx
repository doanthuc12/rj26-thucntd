import React, { useState } from "react";

function Bt4() {
  const [inputNumber, setInputNUmber] = useState<number>();
  const [result1, setResult1] = useState<number | undefined>();
  const [result2, setResult2] = useState<number | undefined>();
  const handleClick = () => {
    let res1 = chuc(inputNumber);
    inputNumber && setResult1(res1);
    let res2 = dvi(inputNumber);
    inputNumber && setResult2(res2);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputNUmber(parseInt(e.target.value));
  };
  const dvi = (inputNumber: number | undefined) => {
    if (inputNumber) {
      let dvi = inputNumber % 10;
      return inputNumber ? dvi : undefined;
    }
  };
  const chuc = (inputNumber: number | undefined) => {
    if (inputNumber) {
      return inputNumber ? Math.floor(inputNumber / 10) : undefined;
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputNumber}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={handleClick}>Run</button>
      <p>{result1}</p>
      <p>{result2}</p>
    </div>
  );
}

export default Bt4;
