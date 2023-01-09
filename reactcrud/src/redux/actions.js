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
  try {
    axios
    .post("http://localhost:5000/api/login", user)
    .then((res) =>{
      // cookies.set("TOKEN", res.data.token, {
      //   path: "/",
      // });
      // console.log(res.data.user)
  
      // sessionStorage.setItem("user", JSON.stringify(res.data.user));
      // var obj = JSON.parse(sessionStorage.getItem('user')); 
      // console.log(obj.email);
      // window.location.href = "/auth";
    });
  } catch (err) {
    console.log(err)
  }
};


export const userLoginAsync = async (user) => {
  try {
    let login = await axios.post("http://localhost:5000/api/login", user);
    if( login ) {
      // check success hay ko
      return login.data.user
    } else {
      return null;
    }


    // axios
    // .post("http://localhost:5000/api/login", user)
    // .then((res) =>{
    //   // cookies.set("TOKEN", res.data.token, {
    //   //   path: "/",
    //   // });
    //   // console.log(res.data.user)
  
    //   // sessionStorage.setItem("user", JSON.stringify(res.data.user));
    //   // var obj = JSON.parse(sessionStorage.getItem('user')); 
    //   // console.log(obj.email);
    //   // window.location.href = "/auth";
    // });
  } catch (err) {
    console.log(err)
    return null
  }
};


export const userCheckToken = (token) => {
  axios
    .post("http://localhost:5000/api/checktoken", {token})
    .then((res) => console.log(res.data));
  // console.log(token);
};
