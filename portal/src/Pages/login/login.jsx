import React, { useState } from "react";
import "./login.css";

export const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = () => {
    //if we want to communicate with server/database, then we need to use "JSON" formate for commication with server/database.
    const request = {
      authantication: {
        name: { name },
        password: { password },
      },
    };
    console.log(request);
    // console.log(name, password);
    setName("");
    setPassword("");
  };
  return (
    <div className="main">
      <div className="main_nav">
        <h2 className="head_nav">UNI MART SHOPPING</h2>
      </div>
      <div className="main_ctn">
        <input
          type="text"
          placeholder="Enter Name"
          className="email_input"
          onChange={nameHandler}
          value={name}
        ></input>
        <input
          type="password"
          placeholder="Enter Password"
          className="password_input"
          onChange={passwordHandler}
          value={password}
        ></input>
        <button type="submit" className="submit_btn" onClick={submitHandler}>
          Login
        </button>
      </div>
    </div>
  );
};
