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
    try {
      if (equation === "0/0") {
        setResult("NaN");
        return;
      } else if (equation.length === 0) {
        setResult("Error");
        return;
      }
      let val = eval(equation);
      setResult(val);
    } catch (error) {
      setResult("Error");
    }
  };
  let clearText = () => {
    setResult("");
    setEquation("");
  };
  return (
    <div className="mainDiv">
      <h1>React Calculator</h1>
      <input
        type="text"
        value={equation}
        className="result"
        onChange={(e) => {
          setEquation(e.target.value);
        }}
      />
      {result ? <div className="output">{result}</div> : ""}
      <form onSubmit={onSubmitHandler} className="btnDiv">
        <button
          type="button"
          id="7"
          value="7"
          onClick={onClickHandler}
          className="btn"
        >
          7
        </button>
        <button
          type="button"
          id="8"
          value="8"
          onClick={onClickHandler}
          className="btn"
        >
          8
        </button>
        <button
          type="button"
          id="9"
          value="9"
          onClick={onClickHandler}
          className="btn"
        >
          9
        </button>
        <button
          type="button"
          id="+"
          value="+"
          onClick={onClickHandler}
          className="btn"
        >
          +
        </button>
        <button
          type="button"
          id="4"
          value="4"
          onClick={onClickHandler}
          className="btn"
        >
          4
        </button>
        <button
          type="button"
          id="5"
          value="5"
          onClick={onClickHandler}
          className="btn"
        >
          5
        </button>
        <button
          type="button"
          id="6"
          value="6"
          onClick={onClickHandler}
          className="btn"
        >
          6
        </button>
        <button
          type="button"
          id="-"
          value="-"
          onClick={onClickHandler}
          className="btn"
        >
          -
        </button>
        <button
          type="button"
          id="1"
          value="1"
          onClick={onClickHandler}
          className="btn"
        >
          1
        </button>
        <button
          type="button"
          id="2"
          value="2"
          onClick={onClickHandler}
          className="btn"
        >
          2
        </button>
        <button
          type="button"
          id="3"
          value="3"
          onClick={onClickHandler}
          className="btn"
        >
          3
        </button>
        <button
          type="button"
          id="*"
          value="*"
          onClick={onClickHandler}
          className="btn"
        >
          *
        </button>
        <button type="button" className="btn" onClick={clearText}>
          C
        </button>
        <button
          type="button"
          id="0"
          value="0"
          onClick={onClickHandler}
          className="btn"
        >
          0
        </button>
        <button type="submit" className="btn" onSubmit={onSubmitHandler}>
          =
        </button>
        <button
          type="button"
          id="/"
          value="/"
          onClick={onClickHandler}
          className="btn"
        >
          /
        </button>
      </form>
    </div>
  );
}

export default App;
