import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import styles from "./scss/App.module.scss";
import Sidebar from "./Components/Sidebar.tsx";
import LanguageContext from "./Store/LanguageContext.tsx";
import { AuthProvider } from "./Store/AuthProvider.tsx";
import UserContext from "./Store/UserContext.tsx";

const App = () => {
  const myInfo = {
    initial: "NH",
    name: "Nahee",
    city: "New York",
    timeZone: "America/New_York",
  };

  return (
    <AuthProvider>
      <UserContext>
        <BrowserRouter>
          <div className={styles.App}>
            <LanguageContext>
              <Sidebar myInfo={myInfo} />
            </LanguageContext>
          </div>
        </BrowserRouter>
      </UserContext>
    </AuthProvider>
  );
};

export default App;
