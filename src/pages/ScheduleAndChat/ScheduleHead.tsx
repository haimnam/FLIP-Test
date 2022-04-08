import React from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";
import { AccountData } from "./AccountData.tsx";
import { Link, Routes, Route } from "react-router-dom";

const ScheduleHead = ({ selectAccount }) => {
  return (
    <div className={styles.scheduleAndChatHead}>
      <h1>Schedule And Chat</h1>
      {AccountData.map((account) => {
        return (
          <div key={account.id} className={styles.circle}>
            <Link
              to={`/schedule/account?id=${account.id}`}
              className={styles[account.color]}
              onClick={() => selectAccount(account.id)}
            >
              {account.initial}
            </Link>
          </div>
        );
      })}
      <Routes>
        <Route path="/schedule/account?id=:accountId" />
      </Routes>
    </div>
  );
};

export default ScheduleHead;
