import React from "react";
import styles from "./Chat.module.scss";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

const ChatInfo = ({ partnerInfoData, selectedPartner }) => {
  dayjs.extend(advancedFormat);
  const currentPartner = partnerInfoData.find(
    (partner) => partner.id === selectedPartner
  );

  return (
    <div className={styles.chatInfo}>
      <div className={styles.partnerInfo}>
        <div className={styles.partnerMain}>
          <h3>
            {currentPartner.firstName} {currentPartner.lastName}
          </h3>
          <div>{currentPartner.localTime}</div>
        </div>
        <div className={styles.partnerSub}>
          <div>{currentPartner.nationality}</div>
          <div>{currentPartner.email}</div>
        </div>
        <div className={styles.partnerUniv}>
          <div>{currentPartner.univ}</div>
          <div>{currentPartner.major}</div>
        </div>
        <div className={styles.partnerTaste}>
          {currentPartner.taste.map((taste) => (
            <div
              key={taste.id}
              className={
                taste.isValid
                  ? styles.partnerTasteItem
                  : styles.partnerTasteItemLighter
              }
            >
              {taste.taste}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.regularMeeting}>
        <div>Regular meetings on</div>
        <div className={styles.meetingContainer}>
          {currentPartner.meetingTimes.map((time) => (
            <div key={time.id} className={styles.meetingItem}>
              <h3>{time.time.format("dddd h:mm a")}</h3>
              <div>
                {time.time.tz(currentPartner.timeZone).format("dddd h:mm a z")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatInfo;
