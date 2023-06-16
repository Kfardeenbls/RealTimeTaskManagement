import React from "react";

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import LoginContext from "./LoginContext";

const AuthRequired = ({ children }) => {
  const { isLogin } = useContext(LoginContext);

  return <>{isLogin ? children : Navigate("/")}</>;
};

export default AuthRequired;
