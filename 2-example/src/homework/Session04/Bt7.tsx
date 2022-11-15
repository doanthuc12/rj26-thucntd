import React, { useState } from "react";

function Bt5() {
  const [inputText, setinputText] = useState<string>();
  const [result, setResult] = useState<string>();

  const handleClick = () => {
    let res = str(inputText);
    // console.log(res);
    inputText && setResult(res);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setinputText(e.target.value);
  };
  const str = (inputText: any) => {
    let splitSentence = inputText.toLowerCase().split(" ");
    console.log("Single words:", splitSentence);

    for (var i = 0; i < splitSentence.length; i++) {
      splitSentence[i] =
        splitSentence[i][0].toUpperCase() + splitSentence[i].slice(1);
    }

    return splitSentence.join(" ");
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={(e) => handleChange(e)} />
      <button onClick={handleClick}>Run</button>
      <p>{result}</p>
    </div>
  );
}

export default Bt5;
