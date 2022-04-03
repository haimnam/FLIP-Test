import React from "react";
import styles from "../../../scss/ScheduleAndChat.module.scss";

const ChatInfo = ({ partnerInfoData, selectedPartner }) => {
  const currentPartner = partnerInfoData.find(
    (partner) => partner.id === selectedPartner
  );

  return (
    <div className={styles.chatInfo}>
      <div className={styles.partnerInfo}>
        <div className={styles.partnerMain}>
          <h3>{currentPartner.name}</h3>
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
          {currentPartner.taste.map((taste) => {
            return (
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
            );
          })}
        </div>
      </div>
      <div className={styles.regularMeeting}>
        <div>Regular meetings on</div>
        <div className={styles.meetingContainer}>
          {currentPartner.meetingTimes.map((time) => {
            return (
              <div key={time.id} className={styles.meetingItem}>
                <h3>{time.time.format("dddd h:mm a")}</h3>
                <div>
                  {time.time
                    .tz(currentPartner.timeZone)
                    .format("dddd h:mm a KST")}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatInfo;
