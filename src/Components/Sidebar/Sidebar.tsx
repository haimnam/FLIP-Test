import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import styles from "../../scss/App.module.scss";
import { SidebarData } from "./SidebarData.tsx";
import { useLang, useSelectKo, useSelectEn } from "../../Store/LanguageContext.tsx";

const Sidebar = ({ account }) => {
  let lang = useLang();

  const setLanguage = (lan: "en" | "ko", lang: "en" | "ko") => {
    if (lan === lang) { return styles.languageSelected; }
    else { return styles.languages; }
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
                setLanguage("ko", lang)
              }
              onClick={useSelectKo()}
            >
              Kor
            </div>
            <div
              className={
                setLanguage("en", lang)
              }
              onClick={useSelectEn()}
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
