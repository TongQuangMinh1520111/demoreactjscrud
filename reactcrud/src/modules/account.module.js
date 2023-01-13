// "use strict";

import axios from "axios";
import Cookies from "universal-cookie";

const AccountModule = {
  login: async (user) => {
    try {
      let login = await axios.post("http://localhost:5000/api/login", user);
      if (login) {
        // check success hay ko
        // return login.data.user
        const cookies = new Cookies();
        cookies.set("TOKEN", login.data.token, {
          path: "/",
        });
        localStorage.setItem("token", login.data.token);
        console.log(login.data.user);

        sessionStorage.setItem("user", JSON.stringify(login.data.user));
        // var obj = JSON.parse(sessionStorage.getItem('user'));
        // console.log(obj.email);
        // window.location.href = "/auth";
        return {
          success: true,
        };
      } else {
        return {
          success: false,
          errMsg: "Login khoong thanh cong ",
        };
      }
    } catch (err) {
      return {
        success: false,
        errMsg: err.message,
      };
    }
  },

  register: async (user) => {
    try {
      let register = await axios.post(
        "http://localhost:5000/api/register",
        user
      );
      if (register) {
        return {
          success: true,
        };
      } else {
        return {
          success: false,
          errMsg: "Login khoong thanh cong ",
        };
      }
    } catch (err) {
      return {
        success: false,
        errMsg: err.message,
      };
    }
  
  },

  logout: async () => {
    const cookies = new Cookies();
    cookies.remove("TOKEN", { path: "/" });
    window.localStorage.clear();
    window.location.href = "/login";
  },

  // verifyToken: async (token) => {
  //   try {
  //     // gọi api kiểm tra token họp lêj
  //     // set user vao session store
  //     return true;
  //   } catch (err) {
  //     return false;
  //   }
  // },
};

export default AccountModule;
