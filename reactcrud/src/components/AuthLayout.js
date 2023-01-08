import React from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const AuthLayout = () => {
    const logout = () =>{
        cookies.remove("TOKEN", { path: "/" });
        window.location.href = "/";
    }
  return (
    <div>
      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default AuthLayout;
