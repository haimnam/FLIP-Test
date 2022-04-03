import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthProvider.tsx";

export const UserContextData = createContext({
  userData: null,
  getWord: () => {},
});

export const useGetWord = () => {
  const { getWord } = useContext(UserContextData);
  return getWord;
};

export const UserContext = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const { authTokens } = useAuth();
  const getWord = async () => {
    console.log("hi");
    const accessToken = authTokens.accessToken;
    console.log(accessToken);
    try {
      console.log(accessToken);
      const response = await axios.get("https://test.flipnow.net/word", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response.data);
      setUserData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <UserContextData.Provider value={{ userData, getWord }}>
      {children}
    </UserContextData.Provider>
  );
};

export default UserContext;
