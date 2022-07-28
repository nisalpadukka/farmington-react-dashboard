import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserAuth } from "./userAuthContext";

//This is used to guard if user is logged in or not
//If firebase user instance is their outlet is provided to render the underline page
//Otherwise redirected to login
const ProtectedRoute = () => {
  const { user } = useUserAuth();
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
