import React, { useState } from "react";
import styles from "./scss/App.module.scss";
import Sidebar from "./Components/Sidebar.tsx";
import LanguageContext from "./Store/LanguageContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Store/UserContext.tsx";

type MyInfoType = {
  initial: string;
  name: string;
  city: string;
  timeZone: string;
  color: string;
};

const App = () => {
  const [userLogin, setUserLogin] = useState<object>(null);
  const myInfo: MyInfoType[] = [
    {
      initial: "HN",
      name: "Haim",
      city: "Seoul",
      timeZone: "Asia/Seoul",
      color: "green",
    },
    {
      initial: "NH",
      name: "Nahee",
      city: "New York",
      timeZone: "America/New_York",
      color: "brown",
    },
  ];

  return (
    <UserProvider>
      <BrowserRouter>
        <LanguageContext>
          <div className={styles.App}>
            <Sidebar
              userLogin={userLogin}
              setUserLogin={setUserLogin}
              myInfo={myInfo}
            />
          </div>
        </LanguageContext>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
