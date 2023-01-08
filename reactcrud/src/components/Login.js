import React, { useState } from "react";
import { userLogin } from "../redux/actions";


const Login = () => {
  const [inputField, setInputField] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setInputField({
      ...inputField,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin(inputField);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign In</h1>

      <label>Username</label>
      <input
        name="username"
        placeholder="Username"
        value={inputField.username}
        onChange={handleChange}
      />
      <br />

      <label>Password</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={inputField.password}
        onChange={handleChange}
      />
      <br />
      <input type="submit" />
    </form>
  );
};

export default Login;
