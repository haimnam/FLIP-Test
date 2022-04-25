import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styles from "./Sidebar.module.scss";
import SidebarList from "./SidebarList.tsx";
import {
  Home,
  Learning,
  ScheduleAndChat,
  Session,
  MyPage,
  Login,
} from "../../pages/pageIndex.tsx";

const Sidebar = ({ userLogin, setUserLogin, myInfo }) => {
  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.sidebar}>
        <div className={styles.frameLogo}>
          <img src="img/logo/Logo.png" className={styles.logo}></img>
          <div className={styles.class}>Class</div>
        </div>
        <div className={styles.frameSwitch}>
          <Link className={styles.switch} to="/home">
            switch to FLIP Class
          </Link>
        </div>

        <SidebarList userLogin={userLogin} myInfo={myInfo} />
      </div>
      <Routes>
        <Route
          path="/home"
          element={<Home userLogin={userLogin} myInfo={myInfo} />}
        />
        <Route path="/learning/*" element={<Learning />} />
        <Route
          path="/schedule/*"
          element={<ScheduleAndChat myInfo={myInfo} />}
        />
        <Route path="/session" element={<Session />} />
        <Route path="/myPage" element={<MyPage userLogin={userLogin} />} />
        <Route
          path="/login"
          element={<Login userLogin={userLogin} setUserLogin={setUserLogin} />}
        />
      </Routes>
    </div>
  );
};

export default Sidebar;
