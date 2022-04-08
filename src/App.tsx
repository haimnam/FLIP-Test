import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import styles from "./scss/App.module.scss";
import Sidebar from "./Components/Sidebar.tsx";
import LanguageContext from "./Store/LanguageContext.tsx";
import { AuthProvider } from "./Store/AuthProvider.tsx";
import { UserProvider } from "./Store/UserContext.tsx";

type MyInfoType = {
  initial: string;
  name: string;
  city: string;
  timeZone: string;
};

const App = () => {
  const myInfo: MyInfoType = {
    initial: "NH",
    name: "Nahee",
    city: "New York",
    timeZone: "America/New_York",
  };

  return (
    <AuthProvider>
      <UserProvider>
        <BrowserRouter>
          <div className={styles.App}>
            <LanguageContext>
              <Sidebar myInfo={myInfo} />
            </LanguageContext>
          </div>
        </BrowserRouter>
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
