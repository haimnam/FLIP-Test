import React, { useState } from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";
import ChatInfo from "./ChatInfo.tsx";
import ChatScreen from "./ChatScreen.tsx";
import ChatInput from "./ChatInput.tsx";

const Chat = ({ selectedPartner, partnerInfoData }) => {
  const [nextId, setNextId] = useState(1);
  const [chat, setChat] = useState({ input: "", chats: [] });
  const onChangeChat = (e) => {
    setChat({ input: e.target.value, chats: chat.chats });
  };
  const onClickChat = (e) => {
    setChat({
      input: "",
      chats: chat.chats.concat({ id: nextId, chat: chat.input }),
    });
    setNextId(nextId + 1);
  };
  const onKeyPressChat = (e) => {
    if (e.key === "Enter") {
      onClickChat(e);
    }
  };

  return (
    <div className={styles.chatBody}>
      <ChatInfo
        partnerInfoData={partnerInfoData}
        selectedPartner={selectedPartner}
      />
      <div className={styles.chatScreen}>
        <ChatScreen chat={chat} selectedPartner={selectedPartner} />
        <ChatInput
          chat={chat}
          onChangeChat={onChangeChat}
          onClickChat={onClickChat}
          onKeyPressChat={onKeyPressChat}
        />
      </div>
    </div>
  );
};

export default Chat;
