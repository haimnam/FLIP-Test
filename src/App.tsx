import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import styles from "./scss/App.module.scss";
import Sidebar from "./Components/Sidebar.tsx";
import LanguageContext from "./Store/LanguageContext.tsx";
import { AuthContext } from "./Store/AuthProvider.tsx";

const App = () => {
  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem("access_token") || ""
  );
  const setTokens = (data) => {
    localStorage.setItem("access_token", JSON.stringify(data));
    setAuthTokens(data);
  };
  const myInfo = {
    initial: "NH",
    name: "Nahee",
    city: "New York",
    timeZone: "America/New_York",
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <BrowserRouter>
        <div className={styles.App}>
          <LanguageContext>
            <Sidebar myInfo={myInfo} />
          </LanguageContext>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
