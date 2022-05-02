import React, { useState } from "react";
import styles from "./Timezone.module.scss";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

const Timezone = ({
  myInfo,
  selectedPartner,
  nowPartner,
  setNowPartner,
  cityPartner,
}) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const [nowUser, setNowUser] = useState(dayjs().tz(myInfo.timeZone));
  const setNow = () => {
    setNowUser(dayjs().tz(myInfo.timeZone));
    if (selectedPartner === 1) {
      setNowPartner(dayjs());
    } else {
      setNowPartner(dayjs().tz(myInfo.timeZone));
    }
  };
  const changeTime = (unit: string, dir: number) => {
    if (unit === "D") {
      setNowPartner(nowPartner.add(dir * 24, "h"));
      setNowUser(nowUser.add(dir * 24, "h"));
    } else {
      setNowPartner(nowPartner.add(dir, unit));
      setNowUser(nowUser.add(dir, unit));
    }
  };

  return (
    <div className={styles.timezone}>
      <div className={styles.timezoneHead}>
        <span className={styles.title}>Timezone converter</span>
        <div className={styles.options}>
          <span className={styles.ampm}>am/pm</span>
          <span className={styles.now} onClick={setNow}>
            now
          </span>
        </div>
      </div>
      <div className={styles.converterContainer}>
        <div className={styles.converterItem}>
          <div className={styles.city}>
            <div className={styles.initial}>SJ</div>
            <span className={styles.cityName}>A{myInfo.city}</span>
          </div>
          <div className={styles.time}>
            <div className={styles.updown}>
              <img
                src={process.env.PUBLIC_URL + "/img/arrow/arrow.png"}
                className={styles.upArrow}
                onClick={() => changeTime("h", 1)}
              />
              <img
                src={process.env.PUBLIC_URL + "/img/arrow/arrow.png"}
                className={styles.downArrow}
                onClick={() => changeTime("h", -1)}
              />
            </div>
            <span className={styles.hour}>{nowUser.format("hh")}</span>
            <span className={styles.min}>{nowUser.format("mm")}</span>
            <div className={styles.updown}>
              <img
                src={process.env.PUBLIC_URL + "/img/arrow/arrow.png"}
                className={styles.upArrow}
                onClick={() => changeTime("m", 1)}
              />
              <img
                src={process.env.PUBLIC_URL + "/img/arrow/arrow.png"}
                className={styles.downArrow}
                onClick={() => changeTime("m", -1)}
              />
            </div>
            <div className={styles.ampm}>{nowUser.format("a")}</div>
          </div>
          <div className={styles.dateWrapper}>
            <div className={styles.dateInfo}>
              <span className={styles.date}>
                {nowUser.format("MM")}/{nowUser.format("DD")}
              </span>
              <span className={styles.day}>{nowUser.format("dddd")}</span>
            </div>
          </div>
        </div>
        <div className={styles.converterItem}>
          <div className={styles.city}>
            <div className={styles.initial}>SJ</div>
            <span className={styles.cityName}>A{myInfo.city}</span>
          </div>
          <div className={styles.time}>
            <div className={styles.updown}>
              <img
                src={process.env.PUBLIC_URL + "/img/arrow/arrow.png"}
                className={styles.upArrow}
                onClick={() => changeTime("h", 1)}
              />
              <img
                src={process.env.PUBLIC_URL + "/img/arrow/arrow.png"}
                className={styles.downArrow}
                onClick={() => changeTime("h", -1)}
              />
            </div>
            <span className={styles.hour}>{nowPartner.format("hh")}</span>
            <span className={styles.min}>{nowPartner.format("mm")}</span>
            <div className={styles.updown}>
              <img
                src={process.env.PUBLIC_URL + "/img/arrow/arrow.png"}
                className={styles.upArrow}
                onClick={() => changeTime("m", 1)}
              />
              <img
                src={process.env.PUBLIC_URL + "/img/arrow/arrow.png"}
                className={styles.downArrow}
                onClick={() => changeTime("m", -1)}
              />
            </div>
            <div className={styles.ampm}>{nowPartner.format("a")}</div>
          </div>
          <div className={styles.dateWrapper}>
            <div className={styles.dateInfo}>
              <span className={styles.date}>
                {nowPartner.format("MM")}/{nowPartner.format("DD")}
              </span>
              <span className={styles.day}>{nowPartner.format("dddd")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timezone;
