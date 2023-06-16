import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  isLogin: false,
  login: () => {},
  logout: () => {},
};

const LoginContext = createContext(initialState);

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [AuthState, setAuthState] = useState({ ...initialState });

  const loginFn = () => {
    console.log("inner login");
    setAuthState((prev) => {
      return { ...prev, isLogin: true };
    });
    navigate("/Task");
  };

  const logoutFn = () => {
    console.log("inner logout");
    setAuthState((prev) => {
      return { ...prev, isLogin: false };
    });
  };

  useEffect(() => {
    setAuthState((prev) => {
      return { ...prev, login: loginFn, logout: logoutFn };
    });
  }, []);

  return (
    <LoginContext.Provider value={{ ...AuthState }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
export { AuthContextProvider };
