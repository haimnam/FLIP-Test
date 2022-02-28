import React from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";
import ScheduleHead from "./ScheduleHead.tsx";
import Chat from "./Chat.tsx";
import Timezone from "./Timezone.tsx";
import PreferredTimes from "./PreferredTimes.tsx";

const Schedule = () => {
  return (
    <div className={styles.scheduleAndChat}>
      <ScheduleHead />
      <div className={styles.scheduleAndChatBody}>
        <Chat />
        <div className={styles.scheduleBody}>
          <Timezone />
          <PreferredTimes />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
