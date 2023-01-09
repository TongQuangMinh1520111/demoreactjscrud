import React, { Component, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Create from "./components/create.component";
// import Edit from "./components/edit.component";
// import Index from "./components/index.component";
import Register from "./components/Register";
import Login from "./components/Login";
import AuthLayout from "./components/AuthLayout";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Permisison from "./permission/permission";
import AccountModule from "./modules/account.module";

const App = ()=> {

  const locationChange = useLocation();
  const [ renderPage, setRenderPage ] = useState(false);

  useEffect(() => {
    async function checkUserInfo() {
      if( locationChange.pathname === '/login' || locationChange.pathname === '/register' ) {
        let token = localStorage.getItem('token');
        // if( !token ) { 
        //   // ddas ve login
        // } else {
        //   // kieem tra token con hieu luc ko
        // }
        
        if( !token ) {
          setRenderPage(true)
        } else {
          // neu co token thif kiem tra token
          let userSession = null; // chỗ này session chưa có
          if (!userSession) {
            let checkToken = await AccountModule.verifyToken(token);
            console.log(checkToken)
            if( checkToken ) {
              window.location.href = '/auth'
            } else {
              // clear cokie, session local store
              setRenderPage(true);
  
            }
          } else {
            window.location.href = '/auth'
          }
          
        }
      } else {
        let token = localStorage.getItem('token');
        console.log(token)
        if( !token ) {
          if ( !Permisison[locationChange.pathname] ) {
            setRenderPage(true)
          } else {
            window.location.href = '/login'
          }
          // 
        } else {
          //
          setRenderPage(true)
        }
      }
    }
    checkUserInfo();
  }, [locationChange]);


  console.log("renderPage", renderPage)

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          React CRUD Example
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/auth"} className="nav-link" onClick={()=> setRenderPage(false) }>
                Auth
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/create"} className="nav-link" onClick={()=> setRenderPage(false) }>
                Create
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/register"} className="nav-link" onClick={()=> setRenderPage(false) }>
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/login"} className="nav-link" onClick={()=> setRenderPage(false) }>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>{" "}
      <br />
      <h2>Welcome to React CRUD Tutorial</h2> <br />
      {
        renderPage &&
        <Routes >
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/auth" element={<AuthLayout />} />
          <Route path="/create" element={<Create />} />
        </Route>
      </Routes>
      }
    </div>
  );
}

export default App;
