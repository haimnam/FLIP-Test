import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styles from "../scss/App.module.scss";
import { SidebarData } from "./SidebarData.tsx";
import {
  useLang,
  useSelectKo,
  useSelectEn,
} from "../Store/LanguageContext.tsx";
import {
  Home,
  Learning,
  ScheduleAndChat,
  Session,
  MyPage,
  Notes,
  Login,
} from "../pages/pageIndex.tsx";

const Sidebar = ({ myInfo, user }) => {
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
        <ul className={styles.sidebarList}>
          {SidebarData.map((sidebar, key) => {
            return (
              <Link className={styles.row} key={key} to={sidebar.link}>
                <div className={styles.icon}>{sidebar.icon}</div>
                <div className={styles.title}>{sidebar.title}</div>
              </Link>
            );
          })}
          <div className={styles.language}>
            <div className={setLanguage("ko", lang)} onClick={useSelectKo()}>
              Kor
            </div>
            <div className={setLanguage("en", lang)} onClick={useSelectEn()}>
              Eng
            </div>
          </div>
          <Link className={styles.login} to="/login">
            LOGIN
          </Link>
          <div className={styles.account}>
            <div className={styles.myCircle}>{myInfo.initial}</div>
            <div>{myInfo.name}</div>
          </div>
        </ul>
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
        <Route path="/login" element={<Login user={user} />} />
      </Routes>
    </React.Fragment>
  );
};

export default Sidebar;
