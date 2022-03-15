import React from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";
import { AccountData } from "./AccountData.tsx";
import { Link, Routes, Route, useLocation } from "react-router-dom";

const ScheduleHead = ({ setSelectedPartner }) => {
  const location = useLocation();
  const URLSearch = new URLSearchParams(location.search);

  const selectAccount = (id) => {
    setSelectedPartner(id);
    URLSearch.set("id", id);
  };

  return (
    <div className={styles.scheduleAndChatHead}>
      <h1>Schedule And Chat</h1>
      {AccountData.map((account) => {
        return (
          <div key={account.id} className={styles.circle}>
            <Link
              to={`/schedule/account?id=${account.id}`}
              className={styles.red}
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
