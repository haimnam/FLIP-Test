import React from "react";
import styles from "./Chat.module.scss";
import { ChatData } from "../ChatData.tsx";
import dayjs from "dayjs";

const ChatScreen = ({ chat }) => {
  return (
    <div className={styles.chatContainer}>
      {ChatData.map((c) =>
        c.user === "user" ? (
          <div key={c.id} className={styles.myChat}>
            <div className={styles.chatItem}>
              <div className={styles.numberTime}>
                <span className={styles.number}>
                  {c.number ? c.number : null}
                </span>
                <span className={styles.time}></span>
              </div>
              <div className={styles.chatBox}>
                <div className={styles.chatMessage}>{c.chat}</div>
              </div>
            </div>
          </div>
        ) : (
          <div key={c.id} className={styles.partnerChat}>
            <div className={styles.chatItem}>
              <div className={styles.initial}>{c.user}</div>
              <div className={styles.chatBox}>
                <span className={styles.chatMessage}>{c.chat}</span>
              </div>
              <span className={styles.number}>
                {c.number ? c.number : null}
              </span>
            </div>
          </div>
        )
      )}
      <div className={styles.myChat}>
        {chat.chats.map((c) => (
          <div key={c.id} className={styles.chatItem}>
            <div className={styles.numberTime}>
              <span className={styles.number}>1</span>
              <span className={styles.time}>
                {dayjs().format("MM/DD hh:mm a")}
              </span>
            </div>
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
