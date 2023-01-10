import React, { useState } from "react";
import AccountModule from "../modules/account.module";

const Register = (props) => {
  const [inputField, setInputField] = useState({
    username: "",
    password: "",
    email: "",
    bio: "",
  });

  const handleChange = (event) => {
    setInputField({
      ...inputField,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // userRegister(inputField);
    let registerUser = await AccountModule.register(inputField);
    if( registerUser.success ) {
      let userLogin = await AccountModule.login(inputField)
      if( userLogin.success ) {
        window.location.href = "/auth";
      } else {
        alert( userLogin.errMsg )
      }
    } else {
      // show error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up For An Account</h1>

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

      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={inputField.email}
        onChange={handleChange}
      />
      <br />

      <label>Bio</label>
      <textarea
        name="bio"
        placeholder="Bio"
        value={inputField.bio}
        onChange={handleChange}
      />
      <br />

      <input type="submit" />
    </form>
  );
};

export default Register;
