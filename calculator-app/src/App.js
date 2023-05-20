import React, { useState } from 'react';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateStudent from './CreateStudent';
import Studetn from './Student';
import UpdateStudent from './UpdateStudent';




function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setResult(result.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <>
    <div className="calculator">
      <div className="display">{input || result || 0}</div>
      <div className="output">{result}</div>
      <div className="row">
        <button className="clear" onClick={handleClear}>AC</button>
        <button onClick={() => handleInput('%')}>%</button>
        <button onClick={() => handleInput('^')}>^</button>
        <button onClick={() => handleInput('/')}>÷</button>
      </div>
      <div className="row">
        <button onClick={() => handleInput('7')}>7</button>
        <button onClick={() => handleInput('8')}>8</button>
        <button onClick={() => handleInput('9')}>9</button>
        <button onClick={() => handleInput('*')}>×</button>
      </div>
      <div className="row">
        <button onClick={() => handleInput('4')}>4</button>
        <button onClick={() => handleInput('5')}>5</button>
        <button onClick={() => handleInput('6')}>6</button>
        <button onClick={() => handleInput('-')}>-</button>
      </div>
      <div className="row">
        <button onClick={() => handleInput('1')}>1</button>
        <button onClick={() => handleInput('2')}>2</button>
        <button onClick={() => handleInput('3')}>3</button>
        <button onClick={() => handleInput('+')}>+</button>
      </div>
      <div className="row">
        <button className="zero" onClick={() => handleInput('0')}>0</button>
        <button onClick={() => handleInput('.')}>.</button>
        <button className="equal" onClick={handleCalculate}>=</button>
      </div>
    </div>

    <div className="App">      
    <BrowserRouter>        
      <Routes>          
        <Route path='/' element={<Studetn />}></Route>          
        <Route path='/create' element={<CreateStudent />}></Route>          
        <Route path='/update/:id' element={<UpdateStudent />}></Route>        
      </Routes>      
    </BrowserRouter>    
    </div>

    </>
  );
}

export default App;
