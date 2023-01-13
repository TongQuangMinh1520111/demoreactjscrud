import React, { useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Route, Routes, useLocation } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Permisison from "./permission/permission";
import AccountModule from "./modules/account.module";
import Header from "./components/header.component";
import { Auth } from "./utils/Auth";
import Home from "./components/home.component";
import ProductDetail from "./components/products/ProductDetail";

const App = () => {
  const locationChange = useLocation();
  const { state, dispatch } = useContext(Auth);
  const renderPage = state.renderPage;

  // useEffect(() => {
  //   async function checkUserInfo() {
  //     if (
  //       locationChange.pathname === "/login" ||
  //       locationChange.pathname === "/register"
  //     ) {
  //       let token = localStorage.getItem("token");
  //       if (!token) {
  //         dispatch({
  //           type: "CHECK_RENDER_TRUE",
  //         });
  //       } else {
  //         // neu co token thif kiem tra token
  //         let userSession = null; //chua co session
  //         if (!userSession) {
  //           let checkToken = await AccountModule.verifyToken(token);
  //           if (checkToken) {
  //             window.location.href = "/home";
  //           } else {
  //             // clear cokie, session local store
  //             dispatch({
  //               type: "CHECK_RENDER_TRUE",
  //             });
  //           }
  //         } else {
  //           window.location.href = "/home";
  //         }
  //       }
  //     } else {
  //       let token = localStorage.getItem("token");
  //       if (!token) {
  //         if (!Permisison[locationChange.pathname]) {
  //           dispatch({
  //             type: "CHECK_RENDER_TRUE",
  //           });
  //         } else {
  //           window.location.href = "/login";
  //         }
  //       } else {
  //         dispatch({
  //           type: "CHECK_RENDER_TRUE",
  //         });
  //       }
  //     }
  //   }
  //   checkUserInfo();
  // }, []);

  return (
    <>
      <Header />
      <div className="container">
        {/* {renderPage && (
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/home" element={<Home />} />
              <Route
                path="/products/:slug"
                element={<ProductDetail />}
              ></Route>
            </Route>
          </Routes>
        )} */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products/:slug" element={<ProductDetail />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
