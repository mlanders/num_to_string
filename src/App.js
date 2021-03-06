import React, { useState } from "react";
import "./App.css";
import github from "./github.png";

import { checkNum } from "./util";
import AppBar from "./AppBar";

function App() {
	const [output, setOutput] = useState("");

	const removeZero = (num) => {
		return num.slice(1, num.length);
	};
	const handleChange = (e) => {
		e.preventDefault();
		let userNum = e.target.value;
		if (userNum.length > 1 && userNum.charAt(0) === "0") {
			userNum = removeZero(userNum);
		}
		setOutput(checkNum(userNum));
	};
	return (
		<>
			<AppBar />
			<div className="App">
				<h1>Number to String!</h1>
				<h3>Enter a number up to 999,999</h3>
				<input
					className="input"
					type="number"
					onChange={handleChange}
					style={{ width: "100px", height: "25px" }}
				/>

				<div style={{ marginTop: "15px" }}>{output}</div>

				<a href="https://github.com/mlanders/num_to_string">
					<img src={github} alt="GitHub" style={{ width: "50px", marginTop: "15px" }} />
				</a>
			</div>
		</>
	);
}

export default App;
