import React, { useState } from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";
import { ChatPartnerData, ChatMyData } from "./ChatData.tsx";
import SendIcon from "@mui/icons-material/Send";

const ChatScreen = () => {
  const [chat, setChat] = useState({ input: "", chats: [] });

  const onChangeChat = (e) => {
    setChat({ input: e.target.value, chats: chat.chats });
  };
  const onClickChat = (e) => {
    setChat({ input: "", chats: chat.chats.concat(chat.input) });
  };

  return (
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
      <div className={styles.chatInput}>
        <input
          type="text"
          placeholder="write message..."
          value={chat.input}
          onChange={onChangeChat}
        ></input>
        <button type="submit" onClick={onClickChat} className={styles.sendIcon}>
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default ChatScreen;
