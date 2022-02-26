import React from "react";
import styles from "../../../scss/Learning.module.scss";
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
      {students.map((student) => {
        return (
          <div key={student.id} className={styles.userInfo}>
            <div className={styles.userInfoHead}>
              <div className={styles.languageInfo}>{student.language}</div>
              <div className={styles.weekInfo}>week {student.week}</div>
            </div>
            <h3>{student.name}</h3>
            <p className={styles.university}>{student.university}</p>
            <p className={styles.localTimeDiff}>{student.localTime}</p>
            <p className={styles.curTime}>
              {dayjs().tz(student.timeZone).format("h:mm a")}
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
              <p className={styles.upcomingSession}>{student.schedule[0]}</p>
              <p>{student.schedule[1]}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserInfo;
