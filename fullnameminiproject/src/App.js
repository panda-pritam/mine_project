import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
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
    <form>
      <h1>Full Name Display</h1>
      <label htmlFor="firstName">First Name: </label>
      <input
        id="firstName"
        type="text"
        required
        onChange={onChangeHandler}
        value={name.firstName}
      />
      <br />
      <label htmlFor="lastName">Last Name: </label>
      <input
        id="lastName"
        type="text"
        required
        onChange={onChangeHandler}
        value={name.lastName}
      />
      <br />
      <button type="submit" value="submit" onClick={onSubmitHandler}>
        submit
      </button>
      <br />
      {fullname.length > 0 ? <h1>{fullname}</h1> : ""}
    </form>
  );
}

export default App;
