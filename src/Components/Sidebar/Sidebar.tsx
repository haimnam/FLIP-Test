import React, { useContext } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import styles from "../../scss/App.module.scss";
import { SidebarData } from "./SidebarData.tsx";
import { LanguageSettingContext } from "../../Store/LanguageContext.tsx";

const Sidebar = ({ account }) => {
  const {lan, selectKo, selectEn} = useContext(LanguageSettingContext);

  function setLanguage(type: number, lan: string) {
    if (type === 1 && lan === "ko" || type === 2 && lan === "en") { return styles.languageSelected; }
    else if (type === 1 && lan === "en" || type === 2 && lan === "ko") { return styles.languageXSelected; }
  }
  
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
                setLanguage(1, lan)
              }
              onClick={() => {
                selectKo();
              }}
            >
              Kor
            </div>
            <div
              className={
                setLanguage(2, lan)
              }
              onClick={() => {
                selectEn();
              }}
            >
              Eng
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
