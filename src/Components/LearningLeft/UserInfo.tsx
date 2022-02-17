import React from "react";
import styles from "../../scss/Learning.module.scss";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";

const UserInfo = ({ students }) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);

  return (
    <div className={styles.userInfos}>
      {students.map((val) => {
        return (
          <div key={val.id} className={styles.userInfo}>
            <div className={styles.userInfoHead}>
              <div className={styles.languageInfo}>{val.language}</div>
              <div className={styles.weekInfo}>week {val.week}</div>
            </div>
            <h3>{val.name}</h3>
            <p className={styles.university}>{val.university}</p>
            <p className={styles.localTimeDiff}>{val.localTime}</p>
            <p className={styles.curTime}>
              {dayjs().tz(val.timeZone).format("h:mm a")}
            </p>
            <div className={styles.chatInfo}>
              <ChatBubbleOutlineIcon />
              <span className={styles.chat}>Chat</span>
            </div>
            <div className={styles.sessionInfo}>
              <div className={styles.startSession}>
                <VideoCameraFrontIcon />
                <span className={styles.startSessionContents}>
                  Start Session
                </span>
              </div>
              <p className={styles.upcomingSession}>{val.schedule[0]}</p>
              <p>{val.schedule[1]}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserInfo;
