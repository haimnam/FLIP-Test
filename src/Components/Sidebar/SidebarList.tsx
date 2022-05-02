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
      return styles.language;
    }
  };

  return (
    <ul className={styles.sidebarList}>
      {SidebarData.map((sidebar, key) => (
        <Link className={styles.sidebarLink} key={key} to={sidebar.path}>
          <SidebarItem
            className={styles.vector}
            sidebar={sidebar}
            isActive={pathName === sidebar.path ? true : false}
          />
        </Link>
      ))}
      <Link className={styles.login} to="/login">
        LOGIN
      </Link>
      <div className={styles.languages}>
        <div className={selectLang("ko", lang)} onClick={useSelectKo()}>
          <div className={styles.lang}>Kor</div>
        </div>
        <div className={selectLang("en", lang)} onClick={useSelectEn()}>
          <div className={styles.lang}>Eng</div>
        </div>
      </div>
      {userLogin && (
        <div className={styles.account}>
          <div className={styles[myInfo.color]}>
            <div className={styles.initial}>{myInfo.initial}</div>
          </div>
          <div className={styles.name}>{myInfo.name}</div>
        </div>
      )}
    </ul>
  );
};

export default SidebarList;
