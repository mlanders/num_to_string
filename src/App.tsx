import React, { useState } from "react";
import "./App.css";
import github from "./github.png";

import { checkNum } from "./util.ts";
import AppBar from "./AppBar.tsx";

function App() {
  const [output, setOutput] = useState("");
  const [inputValue, setInputValue] = useState("");

  const removeLeadingZeros = (num: string): string => {
    return num.replace(/^0+/, "") || "0";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let userNum = e.target.value;

    // Remove any non-digit characters
    userNum = userNum.replace(/\D/g, "");

    // Limit to 999,999
    if (Number(userNum) > 999999) {
      userNum = "999999";
    }

    // Remove leading zeros
    if (userNum.length > 1 && userNum.charAt(0) === "0") {
      userNum = removeLeadingZeros(userNum);
    }

    setInputValue(userNum);
    setOutput(checkNum(userNum));
  };

  return (
    <>
      <AppBar />
      <div className="App">
        <div className="container">
          <h1 className="title">Number to String!</h1>
          <p className="subtitle">Enter a number up to 999,999</p>
          <input
            className="input"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter a number"
            maxLength={6}
          />

          {output && (
            <div className="output">
              <div className="output-label">Result:</div>
              <div className="output-text">{output}</div>
            </div>
          )}

          <a
            href="https://github.com/mlanders/num_to_string"
            className="github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="View on GitHub" className="github-icon" />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
