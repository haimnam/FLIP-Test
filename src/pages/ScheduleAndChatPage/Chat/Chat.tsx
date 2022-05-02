import React, { useState } from "react";
import styles from "./Chat.module.scss";
import ChatInfo from "./ChatInfo.tsx";
import ChatScreen from "./ChatScreen.tsx";
import ChatInput from "./ChatInput.tsx";

type ChatsType = {
  id: number;
  chat: string;
};
type ChatType = {
  input: string;
  chats: Array<ChatsType>;
};

const Chat = ({ selectAccount, selectedPartner, partnerInfoData }) => {
  const [nextId, setNextId] = useState<number>(1);
  const [chat, setChat] = useState<ChatType>({ input: "", chats: [] });

  const onChangeChat = (e) => {
    setChat({ input: e.target.value, chats: chat.chats });
  };
  const onClickChat = () => {
    setChat({
      input: "",
      chats: chat.chats.concat({
        id: nextId,
        chat: JSON.parse(JSON.stringify(chat.input)),
      }),
    });
    setNextId(nextId + 1);
  };
  const onKeyPressChat = (e) => {
    if (e.key === "Enter") {
      onClickChat();
    }
  };

  return (
    <div className={styles.chatBody}>
      <ChatInfo
        selectAccount={selectAccount}
        partnerInfoData={partnerInfoData}
        selectedPartner={selectedPartner}
      />
      <div className={styles.line} />
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
