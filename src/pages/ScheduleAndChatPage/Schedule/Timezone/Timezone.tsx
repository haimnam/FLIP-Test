import React, { useState } from "react";
import styles from "./Timezone.module.scss";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Updown from "./Updown.tsx";
import { PartnerInfoData } from "../../PartnerInfoData.tsx";

const Timezone = ({ myInfo }) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const [nowUser, setNowUser] = useState(dayjs().tz(myInfo.timeZone));
  const [nowPartner1, setNowPartner1] = useState(
    dayjs().tz(PartnerInfoData[0].timeZone)
  );
  const [nowPartner2, setNowPartner2] = useState(
    dayjs().tz(PartnerInfoData[1].timeZone)
  );
  const users = [
    { user: myInfo, now: nowUser },
    { user: PartnerInfoData[0], now: nowPartner1 },
    { user: PartnerInfoData[1], now: nowPartner2 },
  ];

  const setNow = () => {
    setNowUser(dayjs().tz(myInfo.timeZone));
    setNowPartner1(dayjs().tz(PartnerInfoData[0].timeZone));
    setNowPartner2(dayjs().tz(PartnerInfoData[1].timeZone));
  };
  const changeTime = (unit: string, dir: number) => {
    setNowUser(nowUser.add(dir, unit));
    setNowPartner1(nowPartner1.add(dir, unit));
    setNowPartner2(nowPartner2.add(dir, unit));
  };

  return (
    <div className={styles.timezone}>
      <div className={styles.timezoneHead}>
        <span className={styles.title}>Timezone converter</span>
        <div className={styles.options}>
          <span className={styles.option}>am/pm</span>
          <span className={styles.option} onClick={setNow}>
            now
          </span>
        </div>
      </div>
      <div className={styles.converterContainer}>
        {users.map((user) => (
          <div className={styles.converterItem}>
            <div className={styles.city}>
              <div className={styles.initial}>{user.user.initial}</div>
              <span className={styles.cityName}>{user.user.city}</span>
            </div>
            <div className={styles.time}>
              <Updown
                setUp={() => changeTime("h", 1)}
                setDown={() => changeTime("h", -1)}
              />
              <span className={styles.hour}>{user.now.format("hh")}</span>
              <span className={styles.min}>{user.now.format("mm")}</span>
              <Updown
                setUp={() => changeTime("m", 1)}
                setDown={() => changeTime("m", -1)}
              />
              <div className={styles.ampm}>{user.now.format("a")}</div>
            </div>
            <div className={styles.dateWrapper}>
              <div className={styles.dateInfo}>
                <span className={styles.date}>
                  {user.now.format("MM")}/{user.now.format("DD")}
                </span>
                <span className={styles.day}>{user.now.format("dddd")}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timezone;
