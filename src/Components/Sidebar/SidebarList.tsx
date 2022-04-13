import React from "react";
import styles from "./Sidebar.module.scss";
import SidebarItem from "./SidebarItem.tsx";
import { Link, useLocation } from "react-router-dom";
import { SidebarData } from "./SidebarData.tsx";
import {
  useLang,
  useSelectKo,
  useSelectEn,
} from "../../Store/LanguageContext.tsx";

const SidebarList = ({ userLogin, myInfo }) => {
  const pathName = useLocation().pathname;
  const lang = useLang();
  const selectLang = (lan: "en" | "ko", lang: "en" | "ko") => {
    if (lan === lang) {
      return styles.languageSelected;
    } else {
      return styles.languages;
    }
  };

  return (
    <ul className={styles.sidebarList}>
      {SidebarData.map((sidebar, key) => (
        <Link className={styles.sidebarLink} key={key} to={sidebar.path}>
          <SidebarItem
            sidebar={sidebar}
            isActive={pathName === sidebar.path ? true : false}
          />
        </Link>
      ))}
      <div className={styles.language}>
        <div className={selectLang("ko", lang)} onClick={useSelectKo()}>
          Kor
        </div>
        <div className={selectLang("en", lang)} onClick={useSelectEn()}>
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
