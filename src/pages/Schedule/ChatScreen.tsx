import React from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";
import { PartnerInfoData } from "./PartnerInfoData.tsx";

const ChatScreen = ({ chat, selectedPartner }) => {
  return (
    <div className={styles.chatContainer}>
      {PartnerInfoData.find(
        (partner) => partner.id === selectedPartner
      ).partnerChat.map((c) => {
        return (
          <div key={c.id} className={styles.chatItem}>
            <div className={styles.chatBox}>
              <div className={styles.chatMessage}>{c.chat}</div>
            </div>
          </div>
        );
      })}
      {PartnerInfoData.find(
        (partner) => partner.id === selectedPartner
      ).myChat.map((c) => {
        return (
          <div key={c.id} className={styles.chatMyItem}>
            <div className={styles.chatBox}>
              <div className={styles.chatMessage}>{c.chat}</div>
            </div>
          </div>
        );
      })}
      {chat.chats.map((c) => {
        return (
          <div key={c.id} className={styles.chatMyItem}>
            <div className={styles.chatBox}>
              <div className={styles.chatMessage}>{c.chat}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatScreen;
