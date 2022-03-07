import React from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";
import { AccountData } from "./AccountData.tsx";

const ScheduleHead = ({ selectedPartner }) => {
  return (
    <div className={styles.scheduleAndChatHead}>
      <h1>Schedule And Chat</h1>
      {AccountData.map((account) => {
        return (
          <div key={account.id} className={styles.circle}>
            <div className={styles.red}>{account.initial}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ScheduleHead;
