import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import styles from "../../scss/App.module.scss";
import { SidebarData } from "./SidebarData.tsx";

const Sidebar = ({ account }) => {
  const [language, setLanguage] = useState<boolean>(false);
  
  return (
    <BrowserRouter>
      <div className={styles.sidebar}>
        <h2>FLIP</h2>
        <Link className={styles.switch} to="/">
          switch to FLIP Class
        </Link>
        <ul className={styles.sidebarList}>
          {SidebarData.map((sidebar, key) => {
            return (
              <Link
                className={styles.row}
                key={key}
                to={sidebar.link}
              >
                <div className={styles.icon}>{sidebar.icon}</div>
                <div className={styles.title}>{sidebar.title}</div>
              </Link>
            );
          })}
          <div className={styles.language}>
            <div
              className={
                language ? styles.languageSelected : styles.languageXSelected
              }
            >
              <div
                onClick={() => {
                  setLanguage(true);
                }}
              >
                Kor
              </div>
            </div>
            <div
              className={
                language ? styles.languageXSelected : styles.languageSelected
              }
            >
              <div
                onClick={() => {
                  setLanguage(false);
                }}
              >
                Eng
              </div>
            </div>
          </div>
          <div className={styles.account}>
            <div className={styles.myCircle}>{account.initial}</div>
            <div>{account.name}</div>
          </div>
        </ul>
      </div>
    </BrowserRouter>
    
  );
};

export default Sidebar;
