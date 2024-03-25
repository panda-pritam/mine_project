import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  let [equation, setEquation] = useState("");
  let [result, setResult] = useState(0);
  let onClickHandler = (e) => {
    e.preventDefault();
    let newEq = equation + e.target.value;
    setEquation(newEq);
  };
  let onSubmitHandler = (e) => {
    e.preventDefault();
    let val = eval(equation);
    setResult(val);
  };
  let clearText = () => {
    setResult("");
    setEquation("");
  };
  return (
    <div className="mainDiv">
      <h1>React Calculator</h1>
      <input value={equation} className="result" />
      {result ? <h2 className="output">{result}</h2> : ""}
      <form onSubmit={onSubmitHandler} className="btnDiv">
        <button id="7" value="7" onClick={onClickHandler} className="btn">
          7
        </button>
        <button id="8" value="8" onClick={onClickHandler} className="btn">
          8
        </button>
        <button id="9" value="9" onClick={onClickHandler} className="btn">
          9
        </button>
        <button id="+" value="+" onClick={onClickHandler} className="btn">
          +
        </button>
        <button id="4" value="4" onClick={onClickHandler} className="btn">
          4
        </button>
        <button id="5" value="5" onClick={onClickHandler} className="btn">
          5
        </button>
        <button id="6" value="6" onClick={onClickHandler} className="btn">
          6
        </button>
        <button id="-" value="-" onClick={onClickHandler} className="btn">
          -
        </button>
        <button id="1" value="1" onClick={onClickHandler} className="btn">
          1
        </button>
        <button id="2" value="2" onClick={onClickHandler} className="btn">
          2
        </button>
        <button id="3" value="3" onClick={onClickHandler} className="btn">
          3
        </button>
        <button id="*" value="*" onClick={onClickHandler} className="btn">
          *
        </button>
        <button type="reset" className="btn" onClick={clearText}>
          c
        </button>
        <button id="0" value="0" onClick={onClickHandler} className="btn">
          0
        </button>
        <button type="submit" className="btn" onSubmit={onSubmitHandler}>
          =
        </button>
        <button id="/" value="/" onClick={onClickHandler} className="btn">
          /
        </button>
      </form>
    </div>
  );
}

export default App;
