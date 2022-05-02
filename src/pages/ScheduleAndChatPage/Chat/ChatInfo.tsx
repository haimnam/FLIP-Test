import React from "react";
import styles from "./Chat.module.scss";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { AccountData } from "../AccountData.tsx";
import { Link, Routes, Route } from "react-router-dom";

const ChatInfo = ({ selectAccount, partnerInfoData, selectedPartner }) => {
  dayjs.extend(advancedFormat);
  const currentPartner = partnerInfoData.find(
    (partner) => partner.id === selectedPartner
  );

  return (
    <div className={styles.chatInfo}>
      <div className={styles.accounts}>
        {AccountData.map((account) => (
          <div key={account.id} className={styles.accountFrame}>
            <Link
              to={`/schedule/account?id=${account.id}`}
              className={styles[account.color]}
              onClick={() => selectAccount(account.id)}
            >
              <span className={styles.initial}>{account.initial}</span>
            </Link>
            <span className={styles.name}>{account.name}</span>
          </div>
        ))}
        <div className={styles.meeting}>
          <span className={styles.weekly}>Weekly meetings on</span>
          {currentPartner.meetingTimes.map((time) => (
            <div key={time.id} className={styles.meetingItem}>
              <span className={styles.localTime}>
                {time.time.format("dddd h:mm a")}
              </span>
              <span className={styles.convertedTime}>
                {time.time.tz(currentPartner.timeZone).format("dddd h:mm a z")}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Routes>
        <Route path="/schedule/account?id=:accountId" />
      </Routes>
    </div>
  );
};

export default ChatInfo;
