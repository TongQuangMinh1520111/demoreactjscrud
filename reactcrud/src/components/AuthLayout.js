import React, { useEffect } from "react";
import Cookies from "universal-cookie";
import { userCheckToken } from "../redux/actions";

const cookies = new Cookies();
const token = cookies.get("TOKEN");
const AuthLayout = () => {
  useEffect(() => {
    userCheckToken(token);
  },[]);

  if (sessionStorage.length) {
    // console.log(sessionStorage);
    var obj = JSON.parse(sessionStorage.getItem("user"));
    // console.log(obj.email);
  }

  const logout = () => {
    cookies.remove("TOKEN", { path: "/" });
    window.localStorage.clear()
    window.location.href = "/";
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AuthLayout;
