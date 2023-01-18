import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ element: Component, ...rest }) {
  const authed = localStorage.getItem("user") ? true : false;
  return authed === true ? <Outlet /> : <Navigate to="/sign-in" />;
}
