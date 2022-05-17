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
          <img
            src={process.env.PUBLIC_URL + "/img/logo/Logo.png"}
            className={styles.logo}
          />
          <div className={styles.class}>Class</div>
        </div>
        <div className={styles.frameSwitch}>
          <Link className={styles.switch} to="/home">
            switch to FLIP 3rd edition
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
          element={<ScheduleAndChat userLogin={userLogin} myInfo={myInfo} />}
        />
        <Route path="/session" element={<Session userLogin={userLogin} />} />
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
