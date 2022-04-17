import React, { useState } from "react";
import styles from "./Timezone.module.scss";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Updown from "./Updown.tsx";
import { ConverterData } from "./ConverterData.tsx";

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
      <h2>Timezone converter</h2>
      <div className={styles.converterContainer}>
        <div className={styles.converterItemColored}>
          <div className={styles.city}>
            <div className={styles.cityName}>{myInfo.city}</div>
            <div className={styles.now} onClick={setNow}>
              now
            </div>
          </div>
          <div className={styles.time}>
            {ConverterData.time.map((t) => (
              <React.Fragment key={t.id}>
                <div>{nowUser.format(t.format)}</div>
                <Updown
                  width="17px"
                  height="15px"
                  setUp={() => changeTime(t.unit, 1)}
                  setDown={() => changeTime(t.unit, -1)}
                />
              </React.Fragment>
            ))}
            <div className={styles.ampm}>{nowUser.format("a")}</div>
          </div>
          <div className={styles.date}>
            {ConverterData.date.map((d) => (
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
            ))}
            <div className={styles.day}>{nowUser.format("dddd")}</div>
          </div>
        </div>
        <div className={styles.converterItem}>
          <div className={styles.city}>
            <div className={styles.cityName}>{cityPartner}</div>
          </div>
          <div className={styles.time}>
            {ConverterData.time.map((t) => (
              <React.Fragment key={t.id}>
                <div>{nowPartner.format(t.format)}</div>
                <Updown
                  width="17px"
                  height="15px"
                  setUp={() => changeTime(t.unit, 1)}
                  setDown={() => changeTime(t.unit, -1)}
                />
              </React.Fragment>
            ))}
            <div className={styles.ampm}>{nowPartner.format("a")}</div>
          </div>
          <div className={styles.date}>
            {ConverterData.date.map((d) => (
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
            ))}
            <div className={styles.day}>{nowPartner.format("dddd")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timezone;
