import React, { useState } from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Updown from "./Updown.tsx";

const Timezone = ({ selectedPartner }) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const [nowNY, setNowNY] = useState(dayjs().tz("America/New_York"));
  const [nowS, setNowS] = useState(dayjs());
  let upDownController = [0, 0, 0, 0];

  const setNow = () => {
    upDownController.fill(0);
    setNowNY(dayjs().tz("America/New_York"));
    setNowS(dayjs());
  };

  const setHour = (dir) => {
    if (dir === "up") {
      upDownController[0]++;
    } else {
      upDownController[0]--;
    }
    setNowNY(nowNY.add(upDownController[0], "h"));
    setNowS(nowS.add(upDownController[0], "h"));
  };

  const setMin = (dir) => {
    if (dir === "up") {
      upDownController[1]++;
    } else {
      upDownController[1]--;
    }
    setNowNY(nowNY.add(upDownController[1], "m"));
    setNowS(nowS.add(upDownController[1], "m"));
  };

  const setMonth = (dir) => {
    if (dir === "up") {
      upDownController[2]++;
    } else {
      upDownController[2]--;
    }
    setNowNY(nowNY.add(upDownController[2], "M"));
    setNowS(nowS.add(upDownController[2], "M"));
  };

  const setDate = (dir) => {
    if (dir === "up") {
      upDownController[3]++;
    } else {
      upDownController[3]--;
    }
    setNowNY(nowNY.add(upDownController[3], "D"));
    setNowS(nowS.add(upDownController[3], "D"));
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
            <div>{nowNY.format("hh")}</div>
            <Updown
              width="17px"
              height="15px"
              setUp={() => setHour("up")}
              setDown={() => setHour("down")}
            />
            <div>{nowNY.format("mm")}</div>
            <Updown
              width="17px"
              height="15px"
              setUp={() => setMin("up")}
              setDown={() => setMin("down")}
            />
            <div className={styles.ampm}>{nowNY.format("a")}</div>
          </div>
          <div className={styles.date}>
            <div>{nowNY.format("MM")}</div>
            <Updown
              width="15px"
              height="10px"
              setUp={() => setMonth("up")}
              setDown={() => setMonth("down")}
            />
            <div>/</div>
            <div>{nowNY.format("DD")}</div>
            <Updown
              width="15px"
              height="10px"
              setUp={() => setDate("up")}
              setDown={() => setDate("down")}
            />
            <div className={styles.day}>{nowNY.format("dddd")}</div>
          </div>
        </div>
        <div className={styles.converterItem}>
          <div className={styles.city}>
            <div className={styles.cityName}>Seoul +14hrs</div>
          </div>
          <div className={styles.time}>
            <div>{nowS.format("hh")}</div>
            <Updown
              width="17px"
              height="15px"
              setUp={() => setHour("up")}
              setDown={() => setHour("down")}
            />
            <div>{nowS.format("mm")}</div>
            <Updown
              width="17px"
              height="15px"
              setUp={() => setMin("up")}
              setDown={() => setMin("down")}
            />
            <div className={styles.ampm}>{nowS.format("a")}</div>
          </div>
          <div className={styles.date}>
            <div>{nowS.format("MM")}</div>
            <Updown
              width="15px"
              height="10px"
              setUp={() => setMonth("up")}
              setDown={() => setMonth("down")}
            />
            <div>/</div>
            <div>{nowS.format("DD")}</div>
            <Updown
              width="15px"
              height="10px"
              setUp={() => setDate("up")}
              setDown={() => setDate("down")}
            />
            <div className={styles.day}>{nowS.format("dddd")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timezone;
