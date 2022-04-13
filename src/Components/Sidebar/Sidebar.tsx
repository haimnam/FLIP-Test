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
        <Route path="/myPage" element={<MyPage userLogin={userLogin} />} />
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
