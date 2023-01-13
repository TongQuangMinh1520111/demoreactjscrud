import React, { createRef, useEffect, useState } from "react";
import AccountModule from "../modules/account.module";


const Login = () => {

  useEffect(()=> {
    // loading
    // let token = localStorage.getItem('token');
    // // if( !token ) { 
    // //   // ddas ve login
    // // } else {
    // //   // kieem tra tocken con hieu luc ko
    // // }
    // console.log(token)
    // if( token ) {
    //   window.location.href = '/auth'
    // }
  }, [])

  const [inputField, setInputField] = useState({
    // email: "",
    password: "",
  });

  const emailRef = createRef();

  const handleChange = (event) => {
    setInputField({
      ...inputField,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    inputField.email = emailRef.current.value
    let userLogin = await AccountModule.login(inputField);
    if( userLogin.success ) {
      if ('cal')
      window.location.href = "/home";
    } else {
      alert( userLogin.errMsg )
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign In</h1>

      <label>Username</label>
      <input
        ref={emailRef}
        name="email"
        placeholder="Username"
        value={inputField.email}
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
