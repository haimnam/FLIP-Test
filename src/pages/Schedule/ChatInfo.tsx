import React from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";

const ChatInfo = ({ partnerInfoData }) => {
  return (
    <div className={styles.chatInfo}>
      <div className={styles.partnerInfo}>
        <div className={styles.partnerMain}>
          <h3>{partnerInfoData[0].name}</h3>
          <div>{partnerInfoData[0].localTime}</div>
        </div>
        <div className={styles.partnerSub}>
          <div>{partnerInfoData[0].nationality}</div>
          <div>{partnerInfoData[0].email}</div>
        </div>
        <div className={styles.partnerUniv}>
          <div>{partnerInfoData[0].univ}</div>
          <div>{partnerInfoData[0].major}</div>
        </div>
        <div className={styles.partnerTaste}>
          {partnerInfoData[0].taste.map((taste, index) => {
            return (
              <div
                key={index}
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
          {partnerInfoData[0].meetingTimes.map((time, index) => {
            return (
              <div key={index} className={styles.meetingItem}>
                <h3>{time.main}</h3>
                <div>{time.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatInfo;
