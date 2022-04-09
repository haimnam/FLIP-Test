import React from "react";
import { Link } from "react-router-dom";
import styles from "../scss/App.module.scss";
import { SidebarData } from "./SidebarData.tsx";
import {
  useLang,
  useSelectKo,
  useSelectEn,
} from "../Store/LanguageContext.tsx";

const SidebarList = ({ userLogin, myInfo }) => {
  const lang = useLang();
  const setLanguage = (lan: "en" | "ko", lang: "en" | "ko") => {
    if (lan === lang) {
      return styles.languageSelected;
    } else {
      return styles.languages;
    }
  };

  return (
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
      {userLogin && (
        <div className={styles.account}>
          <div
            className={
              styles[
                myInfo.find((info) => info.name === userLogin.firstName).color
              ]
            }
          >
            {myInfo.find((info) => info.name === userLogin.firstName).initial}
          </div>
          <div>
            {myInfo.find((info) => info.name === userLogin.firstName).name}
          </div>
        </div>
      )}
    </ul>
  );
};

export default SidebarList;
