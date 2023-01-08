import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes } from "react-router-dom";
import Create from "./components/create.component";
import Edit from "./components/edit.component";
import Index from "./components/index.component";
import Register from "./components/Register";
import Login from "./components/Login";
import AuthLayout from "./components/AuthLayout";
import ProtectedRoutes from "./components/ProtectedRoutes";

class App extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            React CRUD Example
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/create"} className="nav-link">
                  Create
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/index"} className="nav-link">
                  Index
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>{" "}
        <br />
        <h2>Welcome to React CRUD Tutorial</h2> <br />
        <Routes>
          <Route exact path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/index" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <ProtectedRoutes path="/auth" element={<AuthLayout/>} />. */}

          <Route exact path="/" element={<ProtectedRoutes />}>
            <Route exact path="/" element={<AuthLayout />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
