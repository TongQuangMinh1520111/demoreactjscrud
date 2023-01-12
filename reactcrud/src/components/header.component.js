import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Auth } from "../utils/Auth";

const Header = () => {
  // const {dispatch } = useContext(Auth);
  // const handleClickRender = () =>{
  //   dispatch({
  //     type:'CHECK_RENDER_FALSE',
  //   })
  // }
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          React CRUD Example
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                Profile
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
      </nav>
    </header>
  );
};

export default Header;
