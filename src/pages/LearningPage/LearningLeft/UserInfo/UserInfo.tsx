import React from "react";
import styles from "./UserInfo.module.scss";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import { Routes, Route, Link } from "react-router-dom";
import { ScheduleAndChat, Session } from "../../../pageIndex.tsx";
import { PartnerInfoData } from "../../../ScheduleAndChatPage/PartnerInfoData.tsx";

const UserInfo = () => {
  dayjs.extend(utc);
  dayjs.extend(timezone);

  return (
    <div className={styles.userInfos}>
      <div className={styles.partner}>Your Partners</div>
      <div className={styles.userInfoFrame}>
        {PartnerInfoData.map((partner) => (
          <div key={partner.id} className={styles.userInfo}>
            <div className={styles.partnerCard}>
              <div className={styles.partnerFrame}>
                <div className={styles.partnerInfoHead}>
                  <div className={styles.partnerIcon}>
                    <span className={styles.initial}>SJ</span>
                  </div>
                  <span className={styles.languageInfo}>
                    native <span className={styles.languageBold}>KOR</span>
                    <br />
                    learning <span className={styles.languageBold}>ENG</span>
                  </span>
                </div>
                <span className={styles.name}>{partner.nickname}</span>
                <div className={styles.partnerInfoFrame}>
                  <span className={styles.university}>{partner.univ}</span>
                  <div className={styles.curTime}>
                    <span className={styles.localTime}>
                      {partner.localTime}
                    </span>
                    <span className={styles.time}>
                      {dayjs().tz(partner.timeZone).format("h:mm a")}
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.linkFrame}>
                <Link
                  className={styles.chatInfo}
                  to={`/schedule/account?id=${partner.id}`}
                >
                  <ChatBubbleOutlineIcon />
                </Link>
                <Link className={styles.sessionInfo} to="/session">
                  <VideoCameraFrontIcon />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Routes>
        <Route path="/schedule/*" element={<ScheduleAndChat />} />
        <Route path="/session" element={<Session />} />
      </Routes>
    </div>
  );
};

export default UserInfo;
