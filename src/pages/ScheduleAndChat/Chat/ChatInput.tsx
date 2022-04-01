import React from "react";
import styles from "../../../scss/ScheduleAndChat.module.scss";
import SendIcon from "@mui/icons-material/Send";

const ChatInput = ({ chat, onChangeChat, onClickChat, onKeyPressChat }) => {
  return (
    <div className={styles.chatInput}>
      <input
        type="text"
        placeholder="write message..."
        value={chat.input}
        onChange={onChangeChat}
        onKeyPress={onKeyPressChat}
      ></input>
      <button type="submit" onClick={onClickChat} className={styles.sendIcon}>
        <SendIcon />
      </button>
    </div>
  );
};

export default ChatInput;
