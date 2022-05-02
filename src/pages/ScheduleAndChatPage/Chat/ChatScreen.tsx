import React from "react";
import styles from "./Chat.module.scss";
import { PartnerInfoData } from "../PartnerInfoData.tsx";

const ChatScreen = ({ chat, selectedPartner }) => {
  return (
    <div className={styles.chatContainer}>
      <div className={styles.partnerChat}>
        {PartnerInfoData.find(
          (partner) => partner.id === selectedPartner
        ).partnerChat.map((c) => (
          <div key={c.id} className={styles.chatItem}>
            <div className={styles.initial}>NH</div>
            <div className={styles.chatBox}>
              <span className={styles.chatMessage}>{c.chat}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.myChat}>
        {PartnerInfoData.find(
          (partner) => partner.id === selectedPartner
        ).myChat.map((c) => (
          <div key={c.id} className={styles.chatMyItem}>
            <div className={styles.numberTime}>
              <span className={styles.number}>1</span>
              <span className={styles.time}>09:00 pm</span>
            </div>
            <div className={styles.chatBox}>
              <div className={styles.chatMessage}>{c.chat}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.myChat}>
        {chat.chats.map((c) => (
          <div key={c.id} className={styles.chatMyItem}>
            <div className={styles.chatBox}>
              <div className={styles.chatMessage}>{c.chat}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatScreen;
