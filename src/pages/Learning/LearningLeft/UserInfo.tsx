import React from "react";
import styles from "../../../scss/Learning.module.scss";
import { Routes, Route, Link } from "react-router-dom";
import { ScheduleAndChat, Session } from "../../pageIndex.tsx";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import { PartnerInfoData } from "../../ScheduleAndChat/PartnerInfoData.tsx";

const UserInfo = () => {
  dayjs.extend(utc);
  dayjs.extend(timezone);

  return (
    <div className={styles.userInfos}>
      {PartnerInfoData.map((partner) => (
        <div key={partner.id} className={styles.userInfo}>
          <div className={styles.userInfoHead}>
            <div className={styles.languageInfo}>{partner.course}</div>
            <div className={styles.weekInfo}>
              week {partner.curWeek}/{partner.totalWeeks}
            </div>
          </div>
          <h3>{partner.nickname}</h3>
          <p className={styles.university}>{partner.univ}</p>
          <p className={styles.localTimeDiff}>{partner.localTime}</p>
          <p className={styles.curTime}>
            {dayjs().tz(partner.timeZone).format("h:mm a")}
          </p>
          <Link
            className={styles.chatInfo}
            to={`/schedule/account?id=${partner.id}`}
          >
            <ChatBubbleOutlineIcon />
            <span className={styles.chat}>Chat</span>
          </Link>
          <div className={styles.sessionInfo}>
            <Link className={styles.startSession} to="/session">
              <VideoCameraFrontIcon />
              <span className={styles.startSessionContents}>Start Session</span>
            </Link>
            <p className={styles.upcomingSession}>{partner.meetingTimes[0]}</p>
            <p>{partner.meetingTimes[1]}</p>
          </div>
        </div>
      ))}
      <Routes>
        <Route path="/schedule/*" element={<ScheduleAndChat />} />
        <Route path="/session" element={<Session />} />
      </Routes>
    </div>
  );
};

export default UserInfo;
