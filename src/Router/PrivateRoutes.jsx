import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import loadingImg from "./loading.json"

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location=useLocation()
 

  if (loading) {
    return  <Lottie className="w-10/12 mx-auto mt-10" animationData={loadingImg}></Lottie>
     
  }

  if (user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default PrivateRoutes;
