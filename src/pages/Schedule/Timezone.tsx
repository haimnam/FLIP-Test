import React, { useState } from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Updown from "./Updown.tsx";

const Timezone = ({
  selectedPartner,
  nowPartner,
  setNowPartner,
  cityPartner,
}) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const [nowUser, setNowUser] = useState(dayjs().tz("America/New_York"));

  const setNow = () => {
    setNowUser(dayjs().tz("America/New_York"));
    if (selectedPartner === 1) {
      setNowPartner(dayjs());
    } else {
      setNowPartner(dayjs().tz("America/New_York"));
    }
  };

  const changeTime = (unit, dir) => {
    if (unit === "D") {
      setNowPartner(nowPartner.add(dir * 24, "h"));
      setNowUser(nowUser.add(dir * 24, "h"));
    } else {
      setNowPartner(nowPartner.add(dir, unit));
      setNowUser(nowUser.add(dir, unit));
    }
  };

  const converterElements = {
    time: [
      { id: 1, format: "hh", unit: "h" },
      { id: 2, format: "mm", unit: "m" },
    ],
    date: [
      { id: 1, format: "MM", unit: "M", slash: "/" },
      { id: 2, format: "DD", unit: "D", slash: "" },
    ],
  };

  return (
    <div className={styles.timezone}>
      <h2>Timezone converter</h2>
      <div className={styles.converterContainer}>
        <div className={styles.converterItemColored}>
          <div className={styles.city}>
            <div className={styles.cityName}>New York</div>
            <div className={styles.now} onClick={setNow}>
              now
            </div>
          </div>
          <div className={styles.time}>
            {converterElements.time.map((t) => {
              return (
                <React.Fragment key={t.id}>
                  <div>{nowUser.format(t.format)}</div>
                  <Updown
                    width="17px"
                    height="15px"
                    setUp={() => changeTime(t.unit, 1)}
                    setDown={() => changeTime(t.unit, -1)}
                  />
                </React.Fragment>
              );
            })}
            <div className={styles.ampm}>{nowUser.format("a")}</div>
          </div>
          <div className={styles.date}>
            {converterElements.date.map((d) => {
              return (
                <React.Fragment key={d.id}>
                  <div>{nowUser.format(d.format)}</div>
                  <Updown
                    width="15px"
                    height="10px"
                    setUp={() => changeTime(d.unit, 1)}
                    setDown={() => changeTime(d.unit, -1)}
                  />
                  <div>{d.slash}</div>
                </React.Fragment>
              );
            })}
            <div className={styles.day}>{nowUser.format("dddd")}</div>
          </div>
        </div>
        <div className={styles.converterItem}>
          <div className={styles.city}>
            <div className={styles.cityName}>{cityPartner}</div>
          </div>
          <div className={styles.time}>
            {converterElements.time.map((t) => {
              return (
                <React.Fragment key={t.id}>
                  <div>{nowPartner.format(t.format)}</div>
                  <Updown
                    width="17px"
                    height="15px"
                    setUp={() => changeTime(t.unit, 1)}
                    setDown={() => changeTime(t.unit, -1)}
                  />
                </React.Fragment>
              );
            })}
            <div className={styles.ampm}>{nowPartner.format("a")}</div>
          </div>
          <div className={styles.date}>
            {converterElements.date.map((d) => {
              return (
                <React.Fragment key={d.id}>
                  <div>{nowPartner.format(d.format)}</div>
                  <Updown
                    width="15px"
                    height="10px"
                    setUp={() => changeTime(d.unit, 1)}
                    setDown={() => changeTime(d.unit, -1)}
                  />
                  <div>{d.slash}</div>
                </React.Fragment>
              );
            })}
            <div className={styles.day}>{nowPartner.format("dddd")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timezone;
