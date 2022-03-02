import React, { useState } from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Updown from "./Updown.tsx";

const Timezone = () => {
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [hourUpDownNY, setHourUpDownNY] = useState(0);
  const [minUpDownNY, setMinUpDownNY] = useState(0);
  const [monthUpDownNY, setMonthUpDownNY] = useState(0);
  const [dateUpDownNY, setDateUpDownNY] = useState(0);
  const [hourUpDownS, setHourUpDownS] = useState(0);
  const [minUpDownS, setMinUpDownS] = useState(0);
  const [monthUpDownS, setMonthUpDownS] = useState(0);
  const [dateUpDownS, setDateUpDownS] = useState(0);

  const setHourUp = () => {
    setHourUpDownNY(hourUpDownNY + 1);
    setHourUpDownS(hourUpDownS + 1);
  };

  const setHourDown = () => {
    setHourUpDownNY(hourUpDownNY - 1);
    setHourUpDownS(hourUpDownS - 1);
  };

  const setMinUp = () => {
    setMinUpDownNY(minUpDownNY + 1);
    setMinUpDownS(minUpDownS + 1);
  };

  const setMinDown = () => {
    setMinUpDownNY(minUpDownNY - 1);
    setMinUpDownS(minUpDownS - 1);
  };

  const setMonthUp = () => {
    setMonthUpDownNY(monthUpDownNY + 1);
    setMonthUpDownS(monthUpDownS + 1);
  };

  const setMonthDown = () => {
    setMonthUpDownNY(monthUpDownNY - 1);
    setMonthUpDownS(monthUpDownS - 1);
  };

  const setDateUp = () => {
    setDateUpDownNY(dateUpDownNY + 1);
    setDateUpDownS(dateUpDownS + 1);
  };

  const setDateDown = () => {
    setDateUpDownNY(dateUpDownNY - 1);
    setDateUpDownS(dateUpDownS - 1);
  };

  return (
    <div className={styles.timezone}>
      <h2>Timezone converter</h2>
      <div className={styles.converterContainer}>
        <div className={styles.converterItemColored}>
          <div className={styles.city}>
            <div className={styles.cityName}>New York</div>
            <div className={styles.now}>now</div>
          </div>
          <div className={styles.time}>
            <div>
              {dayjs().tz("America/New_York").format("hh") * 1 + hourUpDownNY}
            </div>
            <Updown
              width="17px"
              height="15px"
              setUp={setHourUp}
              setDown={setHourDown}
            />
            <div>
              {dayjs().tz("America/New_York").format("mm") * 1 + minUpDownNY}
            </div>
            <Updown
              width="17px"
              height="15px"
              setUp={setMinUp}
              setDown={setMinDown}
            />
            <div className={styles.ampm}>
              {dayjs().tz("America/New_York").format("a")}
            </div>
          </div>
          <div className={styles.date}>
            <div>
              {dayjs().tz("America/New_York").format("MM") * 1 + monthUpDownNY}
            </div>
            <Updown
              width="15px"
              height="10px"
              setUp={setMonthUp}
              setDown={setMonthDown}
            />
            <div>/</div>
            <div>
              {dayjs().tz("America/New_York").format("DD") * 1 + dateUpDownNY}
            </div>
            <Updown
              width="15px"
              height="10px"
              setUp={setDateUp}
              setDown={setDateDown}
            />
            <div className={styles.day}>
              {weekdays[dayjs().tz("America/New_York").day()]}
            </div>
          </div>
        </div>
        <div className={styles.converterItem}>
          <div className={styles.city}>
            <div className={styles.cityName}>Seoul +14hrs</div>
          </div>
          <div className={styles.time}>
            <div>{dayjs().format("hh") * 1 + hourUpDownS}</div>
            <Updown
              width="17px"
              height="15px"
              setUp={setHourUp}
              setDown={setHourDown}
            />
            <div>{dayjs().format("mm") * 1 + minUpDownS}</div>
            <Updown
              width="17px"
              height="15px"
              setUp={setMinUp}
              setDown={setMinDown}
            />
            <div className={styles.ampm}>{dayjs().format("a")}</div>
          </div>
          <div className={styles.date}>
            <div>{dayjs().format("MM") * 1 + monthUpDownS}</div>
            <Updown
              width="15px"
              height="10px"
              setUp={setMonthUp}
              setDown={setMonthDown}
            />
            <div>/</div>
            <div>{dayjs().format("DD") * 1 + dateUpDownS}</div>
            <Updown
              width="15px"
              height="10px"
              setUp={setDateUp}
              setDown={setDateDown}
            />
            <div className={styles.day}>{weekdays[dayjs().day()]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timezone;
