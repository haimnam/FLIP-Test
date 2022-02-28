import { time } from "console";
import React from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";
import { PartnerInfoData } from "./PartnerInfoData.tsx";
import { ChatPartnerData, ChatMyData } from "./ChatData.tsx";

const Chat = () => {
  return (
    <div className={styles.chatBody}>
      <div className={styles.chatInfo}>
        <div className={styles.partnerInfo}>
          <div className={styles.partnerMain}>
            <h3>{PartnerInfoData[0].name}</h3>
            <div>{PartnerInfoData[0].localTime}</div>
          </div>
          <div className={styles.partnerSub}>
            <div>{PartnerInfoData[0].nationality}</div>
            <div>{PartnerInfoData[0].email}</div>
          </div>
          <div className={styles.partnerUniv}>
            <div>{PartnerInfoData[0].univ}</div>
            <div>{PartnerInfoData[0].major}</div>
          </div>
          <div className={styles.partnerTaste}>
            {PartnerInfoData[0].taste.map((taste, index) => {
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
            {PartnerInfoData[0].meetingTimes.map((time, index) => {
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
      <div className={styles.chatScreen}>
        <div className={styles.chatContainer}>
          {ChatPartnerData.map((chat, index) => {
            return (
              <div key={index} className={styles.chatItem}>
                <div className={styles.chatBox}>
                  <div className={styles.chatMessage}>{chat}</div>
                </div>
              </div>
            );
          })}
          {ChatMyData.map((chat, index) => {
            return (
              <div key={index} className={styles.chatMyItem}>
                <div className={styles.chatBox}>
                  <div className={styles.chatMessage}>{chat}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.chatInput}>
          <input type="text" placeholder="write message..."></input>
        </div>
      </div>
    </div>
  );
};

export default Chat;
