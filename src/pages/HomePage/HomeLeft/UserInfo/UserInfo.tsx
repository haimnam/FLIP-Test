import React from "react";
import styles from "./UserInfo.module.scss";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Profile from "../../../../Components/Profile/Profile.tsx";
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
          <div
            key={partner.id}
            className={
              dayjs().tz(partner.timeZone).get("hour") > 6 &&
              dayjs().tz(partner.timeZone).get("hour") < 18
                ? styles.userInfo
                : styles.userInfoNight
            }
          >
            <div className={styles.partnerCard}>
              <div className={styles.partnerFrame}>
                <div className={styles.partnerInfoHead}>
                  <Profile color={partner.color} initial={partner.initial} />
                  <span className={styles.languageInfo}>
                    native{" "}
                    <span className={styles.languageBold}>
                      {partner.native}
                    </span>
                    <br />
                    learning{" "}
                    <span className={styles.languageBold}>
                      {partner.learning}
                    </span>
                  </span>
                </div>
                <span className={styles.name}>{partner.firstName}</span>
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
                <Link to={`/schedule/account?id=${partner.id}`}>
                  <img src="img/partnerCard/chat.png" />
                </Link>
                <Link to="/session">
                  <img src="img/partnerCard/video.png" />
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
