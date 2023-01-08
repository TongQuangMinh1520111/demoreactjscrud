import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const userRegister = (user) => {
  axios
    .post("http://localhost:5000/api/register", user)
    .then((res) => console.log(res.data));
  console.log(user);
};

export const userLogin = (user) => {
  axios
    .post("http://localhost:5000/api/login", user)
    .then((res) =>{
      cookies.set("TOKEN", res.data.token, {
        path: "/",
      });
      console.log(res.data.token)

      window.location.href = "/auth";
    });
};
