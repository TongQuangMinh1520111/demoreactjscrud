import React, { useEffect } from "react";
import Cookies from "universal-cookie";
import AccountModule from "../modules/account.module";

const cookies = new Cookies();
const token = cookies.get("TOKEN");
const AuthLayout = () => {

  if (sessionStorage.length) {
    // console.log(sessionStorage);
    var obj = JSON.parse(sessionStorage.getItem("user"));
    // console.log(obj.email);
  }

  const logout = async() => {
    let registerUser = await AccountModule.logout({});
    registerUser();
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AuthLayout;
