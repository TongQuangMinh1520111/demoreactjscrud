import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get("TOKEN");
console.log('token',token)

const ProtectedRoutes = () => {
  return token ? <Outlet /> : <Navigate to="/login" exact />;
};

export default ProtectedRoutes;
