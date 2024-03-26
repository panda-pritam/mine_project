import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [name, setName] = useState("");
  let [fullname, setFullname] = useState("");
  let onChangeHandler = (e) => {
    let newObj = { ...name };
    newObj[e.target.id] = e.target.value;
    setName(newObj);
    console.log(name);
  };
  let onSubmitHandler = (e) => {
    e.preventDefault();
    if (name) {
      setFullname(`Full Name: ${name.firstName} ${name.lastName}`);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <h1>Full Name Display</h1>
        <label htmlFor="firstName">First Name: </label>
        <input
          id="firstName"
          type="text"
          onChange={onChangeHandler}
          value={name.firstName}
          required
        />
        <br />
        <label htmlFor="lastName">Last Name: </label>
        <input
          id="lastName"
          type="text"
          onChange={onChangeHandler}
          value={name.lastName}
          required
        />
        <br />
        <button type="submit">submit</button>
        <br />
      </form>
      <p> {fullname.length > 0 ? fullname : ""}</p>
    </div>
  );
}

export default App;
