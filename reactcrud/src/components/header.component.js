import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Auth } from "../context/Auth";

const Header = () => {
  const { dispatch } = useContext(Auth);
  const handleClickRender = () => {
    dispatch({
      type: "CHECK_RENDER_FALSE",
    });
  };
  return (
    <header id="header">
      <div className="inner">
        <div className="header_cont">
          <h1 id="logo">
            <Link to="/" className="navbar-brand">
              React CRUD Example
            </Link>
          </h1>
          <div id="gnavi">
            <ul className="menu">
              <li className="item">
                <Link to={"/"} F onClick={handleClickRender}>
                  Home
                </Link>
              </li>
              <li className="item">
                <Link to={"/products"} F onClick={handleClickRender}>
                  Products
                </Link>
              </li>
              <li>
                <Link to={"/cart"} onClick={handleClickRender}>
                  Cart
                </Link>
              </li>
              <li className="item">
                <Link to={"/register"} onClick={handleClickRender}>
                  Register
                </Link>
              </li>
              <li className="item">
                <Link to={"/login"} onClick={handleClickRender}>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
