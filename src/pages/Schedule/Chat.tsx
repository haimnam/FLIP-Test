import React from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";
import ChatInfo from "./ChatInfo.tsx";
import ChatScreen from "./ChatScreen.tsx";

const Chat = ({ partnerInfoData }) => {
  return (
    <div className={styles.chatBody}>
      <ChatInfo partnerInfoData={partnerInfoData} />
      <ChatScreen />
    </div>
  );
};

export default Chat;
