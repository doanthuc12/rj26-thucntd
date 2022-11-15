import React, { useState } from "react";

function Bt3() {
  const [inputNumber, setInputNUmber] = useState<number>();
  const [result, setResult] = useState<number | undefined>();
  const handleClick = () => {
    let res = bt3(inputNumber);
    inputNumber && setResult(res);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputNUmber(parseInt(e.target.value));
  };
  const bt3 = (_inputNumber: number | undefined) => {
    //C1: return _inputNumber ? Math.floor((_inputNumber - 1)/2 ) : undefined;
    //C2:
    if (_inputNumber) {
      let temp = (_inputNumber - 1) / 2;
      return _inputNumber ? parseInt(temp.toString()) : undefined;
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
      <p>{result}</p>
    </div>
  );
}

export default Bt3;
