import React, { useState } from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";
import ChatInfo from "./ChatInfo.tsx";
import ChatScreen from "./ChatScreen.tsx";

const Chat = () => {
  return (
    <div className={styles.chatBody}>
      <ChatInfo />
      <ChatScreen />
    </div>
  );
};

export default Chat;
