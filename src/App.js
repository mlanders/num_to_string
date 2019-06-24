import React, { useState } from 'react';
import './App.css';

import { checkNum } from './checkNum';

function App() {
    const [output, setOutput] = useState('');
    const handleChange = e => {
        e.preventDefault();
        setOutput(checkNum(e.target.value));
    };
    return (
        <div className="App">
            <h1>Number to String!</h1>
            <h3>Enter a number up to 999,999</h3>
            <input
                className="input"
                type="number"
                onChange={handleChange}
                style={{ width: '100px', height: '25px' }}
            />

            <div style={{ marginTop: '15px' }}>{output}</div>
        </div>
    );
}

export default App;
