import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styles from "../scss/App.module.scss";
import SidebarList from "./SidebarList.tsx";
import { useLang } from "../Store/LanguageContext.tsx";
import {
  Home,
  Learning,
  ScheduleAndChat,
  Session,
  MyPage,
  Notes,
  Login,
} from "../pages/pageIndex.tsx";

const Sidebar = ({ userLogin, setUserLogin, myInfo }) => {
  const lang = useLang();
  const setLanguage = (lan: "en" | "ko", lang: "en" | "ko") => {
    if (lan === lang) {
      return styles.languageSelected;
    } else {
      return styles.languages;
    }
  };

  return (
    <React.Fragment>
      <div className={styles.sidebar}>
        <h2>FLIP</h2>
        <Link className={styles.switch} to="/home">
          switch to FLIP Class
        </Link>
        <SidebarList userLogin={userLogin} myInfo={myInfo} />
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/learning/*" element={<Learning myInfo={myInfo} />} />
        <Route
          path="/schedule/*"
          element={<ScheduleAndChat myInfo={myInfo} />}
        />
        <Route path="/session" element={<Session />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/notes" element={<Notes />} />
        <Route
          path="/login"
          element={<Login userLogin={userLogin} setUserLogin={setUserLogin} />}
        />
      </Routes>
    </React.Fragment>
  );
};

export default Sidebar;
