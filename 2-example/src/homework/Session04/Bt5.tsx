import React, { useState } from "react";

function Bt5() {
  const [inputNumber, setInputNUmber] = useState<number>();
  const [result, setResult] = useState<boolean>();

  const handleClick = () => {
    let res = isNT(inputNumber);
    inputNumber && setResult(res);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputNUmber(parseInt(e.target.value));
  };
  const isNT = (inputNumber: number | undefined) => {
    if (inputNumber) {
      let isNT = true;
      for (let index = 2; index <= inputNumber / 2; index++) {
        if (!(inputNumber % index)) {
          isNT = false;
          break;
        }
      }
      console.log(isNT);
      return isNT;
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
      <p>{result ? "true" : "false"}</p>
    </div>
  );
}

export default Bt5;
