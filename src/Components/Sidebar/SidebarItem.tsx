import React from "react";
import styles from "./Sidebar.module.scss";

const SidebarItem = ({ sidebar, isActive }) => {
  return (
    <div className={isActive ? styles.rowActive : styles.row}>
      <div className={styles.rectangle}></div>
      <div className={styles.icon}>{sidebar.icon}</div>
      <div className={styles.title}>{sidebar.title}</div>
    </div>
  );
};

export default SidebarItem;
