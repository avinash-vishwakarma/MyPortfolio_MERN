import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext({
  isLogin: false,
  login(token) {},
  logout() {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    // check wether user_tokne is present in the local storage
    const token = localStorage.getItem("user_token");
    if (token) {
      setIsLogin(true);
    }
  }, []);

  const value = {
    isLogin,
    login(token) {
      localStorage.setItem("user_token", token);
      setIsLogin(true);
    },
    logout() {
      localStorage.removeItem("user_token");
      setIsLogin(false);
    },
  };

  console.log(value);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
