import React, { useState } from "react";
import styles from "../../scss/App.module.scss";
import { SidebarData } from "./SidebarData.tsx";

const Sidebar = ({ account }) => {
  const [language, setLanguage] = useState<boolean>(false);
  
  return (
    <div className={styles.sidebar}>
      <h2>FLIP</h2>
      <a className={styles.switch} href="#">
        switch to FLIP Class
      </a>
      <ul className={styles.sidebarList}>
        {SidebarData.map((data, key) => {
          return (
            <li
              className={styles.row}
              key={key}
              onClick={() => {
                window.location.pathname = data.link;
              }}
            >
              <div className={styles.icon}>{data.icon}</div>
              <div className={styles.title}>{data.title}</div>
            </li>
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
  );
};

export default Sidebar;
