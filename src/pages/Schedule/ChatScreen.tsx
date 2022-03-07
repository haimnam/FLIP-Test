import React from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";
import { ChatPartnerData, ChatMyData } from "./ChatData.tsx";

const ChatScreen = ({ chat }) => {
  return (
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
