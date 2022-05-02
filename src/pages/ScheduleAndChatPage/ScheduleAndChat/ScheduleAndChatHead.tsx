import React from "react";
import styles from "./ScheduleAndChat.module.scss";
import { AccountData } from "../AccountData.tsx";
import { Link, Routes, Route } from "react-router-dom";

const ScheduleAndChatHead = () => {
  return (
    <span className={styles.scheduleAndChatHead}>
      Schedule And Chat with your Partners
    </span>
  );
};

export default ScheduleAndChatHead;
