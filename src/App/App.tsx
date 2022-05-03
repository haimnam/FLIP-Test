import React, { useState } from "react";
import styles from "./App.module.scss";
import Sidebar from "../Components/Sidebar/Sidebar.tsx";
import LanguageContext from "../Store/LanguageContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "../Store/UserContext.tsx";
import { ToastContainer } from "react-toastify";

type loginType = {
  accessToken: string;
  firstName: string;
  id: string;
  msg: string;
};
type MyInfoType = {
  initial: string;
  name: string;
  city: string;
  timeZone: string;
  color: string;
};

const App = () => {
  const [userLogin, setUserLogin] = useState<loginType>(null);
  const myInfo: MyInfoType = {
    initial: "HN",
    name: "Haim",
    city: "Seoul",
    timeZone: "Asia/Seoul",
    color: "yellowGreen",
  };

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
            <ToastContainer />
          </div>
        </LanguageContext>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
