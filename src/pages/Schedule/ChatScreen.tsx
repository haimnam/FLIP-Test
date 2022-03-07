import React from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";
import { PartnerInfoData } from "./PartnerInfoData.tsx";

const ChatScreen = ({ chat, selectedPartner }) => {
  return (
    <div className={styles.chatContainer}>
      {PartnerInfoData.find(
        (partner) => partner.id === selectedPartner
      ).partnerChat.map((chat, index) => {
        return (
          <div key={index} className={styles.chatItem}>
            <div className={styles.chatBox}>
              <div className={styles.chatMessage}>{chat}</div>
            </div>
          </div>
        );
      })}
      {PartnerInfoData.find(
        (partner) => partner.id === selectedPartner
      ).myChat.map((chat, index) => {
        return (
          <div key={index} className={styles.chatMyItem}>
            <div className={styles.chatBox}>
              <div className={styles.chatMessage}>{chat}</div>
            </div>
          </div>
        );
      })}
      {chat.chats.map((ch, index) => {
        return (
          <div key={index} className={styles.chatMyItem}>
            <div className={styles.chatBox}>
              <div className={styles.chatMessage}>{ch}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatScreen;
