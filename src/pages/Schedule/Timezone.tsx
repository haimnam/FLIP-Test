import React, { useState } from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Updown from "./Updown.tsx";

const Timezone = () => {
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const [hourUpDown, setHourUpDown] = useState(0);
  const [minUpDown, setMinUpDown] = useState(0);
  const [monthUpDown, setMonthUpDown] = useState(0);
  const [dateUpDown, setDateUpDown] = useState(0);

  const [hourNY, setHourNY] = useState(
    dayjs().tz("America/New_York").format("hh")
  );
  const [minNY, setMinNY] = useState(
    dayjs().tz("America/New_York").format("mm")
  );
  const [ampmNY, setAmpmNY] = useState(
    dayjs().tz("America/New_York").format("a")
  );
  const [monthNY, setMonthNY] = useState(
    dayjs().tz("America/New_York").format("MM")
  );
  const [dateNY, setDateNY] = useState(
    dayjs().tz("America/New_York").format("DD")
  );
  const [dayNY, setDayNY] = useState(
    dayjs().tz("America/New_York").format("dddd")
  );
  const [hourS, setHourS] = useState(dayjs().format("hh"));
  const [minS, setMinS] = useState(dayjs().format("mm"));
  const [ampmS, setAmpmS] = useState(dayjs().format("a"));
  const [monthS, setMonthS] = useState(dayjs().format("MM"));
  const [dateS, setDateS] = useState(dayjs().format("DD"));
  const [dayS, setDayS] = useState(dayjs().format("dddd"));

  var nowNY = dayjs().tz("America/New_York");
  var nowS = dayjs();

  const setNow = () => {
    setHourUpDown(0);
    setMinUpDown(0);
    setMonthUpDown(0);
    setDateUpDown(0);
    setHourNY(dayjs().tz("America/New_York").format("hh"));
    setMinNY(dayjs().tz("America/New_York").format("mm"));
    setAmpmNY(dayjs().tz("America/New_York").format("a"));
    setMonthNY(dayjs().tz("America/New_York").format("MM"));
    setDateNY(dayjs().tz("America/New_York").format("DD"));
    setDayNY(dayjs().tz("America/New_York").format("dddd"));
    setHourS(dayjs().format("hh"));
    setMinS(dayjs().format("mm"));
    setAmpmS(dayjs().format("a"));
    setMonthS(dayjs().format("MM"));
    setDateS(dayjs().format("DD"));
    setDayS(dayjs().format("dddd"));
  };

  const setHour = () => {
    setHourNY(nowNY.add(hourUpDown, "h").format("hh"));
    setMinNY(nowNY.add(hourUpDown, "h").format("mm"));
    setAmpmNY(nowNY.add(hourUpDown, "h").format("a"));
    setMonthNY(nowNY.add(hourUpDown, "h").format("MM"));
    setDateNY(nowNY.add(hourUpDown, "h").format("DD"));
    setDayNY(nowNY.add(hourUpDown, "h").format("dddd"));
    setHourS(nowS.add(hourUpDown, "h").format("hh"));
    setMinS(nowS.add(hourUpDown, "h").format("mm"));
    setAmpmS(nowS.add(hourUpDown, "h").format("a"));
    setMonthS(nowS.add(hourUpDown, "h").format("MM"));
    setDateS(nowS.add(hourUpDown, "h").format("DD"));
    setDayS(nowS.add(hourUpDown, "h").format("dddd"));
  };

  const setMin = () => {
    setHourNY(nowNY.add(minUpDown, "m").format("hh"));
    setMinNY(nowNY.add(minUpDown, "m").format("mm"));
    setAmpmNY(nowNY.add(minUpDown, "m").format("a"));
    setMonthNY(nowNY.add(minUpDown, "m").format("MM"));
    setDateNY(nowNY.add(minUpDown, "m").format("DD"));
    setDayNY(nowNY.add(minUpDown, "m").format("dddd"));
    setHourS(nowS.add(minUpDown, "m").format("hh"));
    setMinS(nowS.add(minUpDown, "m").format("mm"));
    setAmpmS(nowS.add(minUpDown, "m").format("a"));
    setMonthS(nowS.add(minUpDown, "m").format("MM"));
    setDateS(nowS.add(minUpDown, "m").format("DD"));
    setDayS(nowS.add(minUpDown, "m").format("dddd"));
  };

  const setMonth = () => {
    setHourNY(nowNY.add(monthUpDown, "M").format("hh"));
    setMinNY(nowNY.add(monthUpDown, "M").format("mm"));
    setAmpmNY(nowNY.add(monthUpDown, "M").format("a"));
    setMonthNY(nowNY.add(monthUpDown, "M").format("MM"));
    setDateNY(nowNY.add(monthUpDown, "M").format("DD"));
    setDayNY(nowNY.add(monthUpDown, "M").format("dddd"));
    setHourS(nowS.add(monthUpDown, "M").format("hh"));
    setMinS(nowS.add(monthUpDown, "M").format("mm"));
    setAmpmS(nowS.add(monthUpDown, "M").format("a"));
    setMonthS(nowS.add(monthUpDown, "M").format("MM"));
    setDateS(nowS.add(monthUpDown, "M").format("DD"));
    setDayS(nowS.add(monthUpDown, "M").format("dddd"));
  };

  const setDate = () => {
    setHourNY(nowNY.add(dateUpDown, "d").format("hh"));
    setMinNY(nowNY.add(dateUpDown, "d").format("mm"));
    setAmpmNY(nowNY.add(dateUpDown, "d").format("a"));
    setMonthNY(nowNY.add(dateUpDown, "d").format("MM"));
    setDateNY(nowNY.add(dateUpDown, "d").format("DD"));
    setDayNY(nowNY.add(dateUpDown, "d").format("dddd"));
    setHourS(nowS.add(dateUpDown, "d").format("hh"));
    setMinS(nowS.add(dateUpDown, "d").format("mm"));
    setAmpmS(nowS.add(dateUpDown, "d").format("a"));
    setMonthS(nowS.add(dateUpDown, "d").format("MM"));
    setDateS(nowS.add(dateUpDown, "d").format("DD"));
    setDayS(nowS.add(dateUpDown, "d").format("dddd"));
  };

  const setHourUp = () => {
    setHourUpDown(hourUpDown + 1);
    setHour();
  };

  const setHourDown = () => {
    setHourUpDown(hourUpDown - 1);
    setHour();
  };

  const setMinUp = () => {
    setMinUpDown(minUpDown + 1);
    setMin();
  };

  const setMinDown = () => {
    setMinUpDown(minUpDown - 1);
    setMin();
  };

  const setMonthUp = () => {
    setMonthUpDown(monthUpDown + 1);
    setMonth();
  };

  const setMonthDown = () => {
    setMonthUpDown(monthUpDown - 1);
    setMonth();
  };

  const setDateUp = () => {
    setDateUpDown(dateUpDown + 1);
    setDate();
  };

  const setDateDown = () => {
    setDateUpDown(dateUpDown - 1);
    setDate();
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
            <div>{hourNY}</div>
            <Updown
              width="17px"
              height="15px"
              setUp={setHourUp}
              setDown={setHourDown}
            />
            <div>{minNY}</div>
            <Updown
              width="17px"
              height="15px"
              setUp={setMinUp}
              setDown={setMinDown}
            />
            <div className={styles.ampm}>{ampmNY}</div>
          </div>
          <div className={styles.date}>
            <div>{monthNY}</div>
            <Updown
              width="15px"
              height="10px"
              setUp={setMonthUp}
              setDown={setMonthDown}
            />
            <div>/</div>
            <div>{dateNY}</div>
            <Updown
              width="15px"
              height="10px"
              setUp={setDateUp}
              setDown={setDateDown}
            />
            <div className={styles.day}>{dayNY}</div>
          </div>
        </div>
        <div className={styles.converterItem}>
          <div className={styles.city}>
            <div className={styles.cityName}>Seoul +14hrs</div>
          </div>
          <div className={styles.time}>
            <div>{hourS}</div>
            <Updown
              width="17px"
              height="15px"
              setUp={setHourUp}
              setDown={setHourDown}
            />
            <div>{minS}</div>
            <Updown
              width="17px"
              height="15px"
              setUp={setMinUp}
              setDown={setMinDown}
            />
            <div className={styles.ampm}>{ampmS}</div>
          </div>
          <div className={styles.date}>
            <div>{monthS}</div>
            <Updown
              width="15px"
              height="10px"
              setUp={setMonthUp}
              setDown={setMonthDown}
            />
            <div>/</div>
            <div>{dateS}</div>
            <Updown
              width="15px"
              height="10px"
              setUp={setDateUp}
              setDown={setDateDown}
            />
            <div className={styles.day}>{dayS}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timezone;
