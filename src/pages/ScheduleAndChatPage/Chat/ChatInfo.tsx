import React from "react";
import styles from "./Chat.module.scss";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import Profile from "../../../Components/Profile/Profile.tsx";
import { PartnerInfoData } from "../PartnerInfoData.tsx";

const ChatInfo = ({ meetingTimesData }) => {
  dayjs.extend(advancedFormat);

  return (
    <div className={styles.chatInfo}>
      <div className={styles.accounts}>
        {PartnerInfoData.map((partner) => (
          <div key={partner.id} className={styles.accountFrame}>
            <Profile color={partner.color} initial={partner.initial} />
            <span className={styles.name}>{partner.firstName}</span>
          </div>
        ))}
        <div className={styles.meeting}>
          <span className={styles.weekly}>Weekly meetings on</span>
          {meetingTimesData.map((time) => (
            <div key={time.id} className={styles.meetingItem}>
              <span className={styles.localTime}>
                {time.time.format("dddd h:mm a")}
              </span>
              <span className={styles.convertedTime}>
                {time.time
                  .tz(PartnerInfoData[0].timeZone)
                  .format("dddd h:mm a z")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatInfo;
