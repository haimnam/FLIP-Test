import React from "react";
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
            <div>{dayjs().tz("America/New_York").format("hh")}</div>
            <Updown width="17px" height="15px" />
            <div>{dayjs().tz("America/New_York").format("mm")}</div>
            <Updown width="17px" height="15px" />
            <div className={styles.ampm}>
              {dayjs().tz("America/New_York").format("a")}
            </div>
          </div>
          <div className={styles.date}>
            <div>{dayjs().tz("America/New_York").format("MM")}</div>
            <Updown width="15px" height="10px" />
            <div>/</div>
            <div>{dayjs().tz("America/New_York").format("DD")}</div>
            <Updown width="15px" height="10px" />
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
            <div>{dayjs().format("hh")}</div>
            <Updown width="17px" height="15px" />
            <div>{dayjs().format("mm")}</div>
            <Updown width="17px" height="15px" />
            <div className={styles.ampm}>{dayjs().format("a")}</div>
          </div>
          <div className={styles.date}>
            <div>{dayjs().format("MM")}</div>
            <Updown width="15px" height="10px" />
            <div>/</div>
            <div>{dayjs().format("DD")}</div>
            <Updown width="15px" height="10px" />
            <div className={styles.day}>{weekdays[dayjs().day()]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timezone;
