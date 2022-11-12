import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/authContexts";
import NotFound from "../../pages/NotFound";

const ProtectedRoutes = ({ isLogin = true }) => {
  const authContext = useContext(AuthContext);

  return authContext.isLogin === isLogin ? <Outlet /> : <NotFound />;
};

export default ProtectedRoutes;
