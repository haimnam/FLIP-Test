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
  Notes,
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
        <Route path="/home" element={<Home />} />
        <Route path="/learning/*" element={<Learning myInfo={myInfo} />} />
        <Route
          path="/schedule/*"
          element={<ScheduleAndChat myInfo={myInfo} />}
        />
        <Route path="/session" element={<Session />} />
        <Route path="/myPage" element={<MyPage userLogin={userLogin} />} />
        <Route path="/notes" element={<Notes />} />
        <Route
          path="/login"
          element={<Login userLogin={userLogin} setUserLogin={setUserLogin} />}
        />
      </Routes>
    </div>
  );
};

export default Sidebar;
