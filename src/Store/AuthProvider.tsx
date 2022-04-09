import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem("access_token") || ""
  );
  const setTokens = (data) => {
    localStorage.setItem("access_token", JSON.stringify(data));
    setAuthTokens(data);
  };
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
