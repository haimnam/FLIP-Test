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

  let upDownController = [0, 0, 0, 0];

  const setNow = () => {
    upDownController.fill(0);
    setNowUser(dayjs().tz("America/New_York"));

    if (selectedPartner === 1) {
      setNowPartner(dayjs());
    } else {
      setNowPartner(dayjs().tz("America/New_York"));
    }
  };

  const setHour = (dir) => {
    if (dir === "up") {
      upDownController[0]++;
    } else {
      upDownController[0]--;
    }
    setNowPartner(nowPartner.add(upDownController[0], "h"));
    setNowUser(nowUser.add(upDownController[0], "h"));
  };

  const setMin = (dir) => {
    if (dir === "up") {
      upDownController[1]++;
    } else {
      upDownController[1]--;
    }
    setNowPartner(nowPartner.add(upDownController[1], "m"));
    setNowUser(nowUser.add(upDownController[1], "m"));
  };

  const setMonth = (dir) => {
    if (dir === "up") {
      upDownController[2]++;
    } else {
      upDownController[2]--;
    }
    setNowPartner(nowPartner.add(upDownController[2], "M"));
    setNowUser(nowUser.add(upDownController[2], "M"));
  };

  const setDate = (dir) => {
    if (dir === "up") {
      upDownController[3]++;
    } else {
      upDownController[3]--;
    }
    setNowPartner(nowPartner.add(upDownController[3] * 24, "h"));
    setNowUser(nowUser.add(upDownController[3] * 24, "h"));
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
            <div>{nowUser.format("hh")}</div>
            <Updown
              width="17px"
              height="15px"
              setUp={() => setHour("up")}
              setDown={() => setHour("down")}
            />
            <div>{nowUser.format("mm")}</div>
            <Updown
              width="17px"
              height="15px"
              setUp={() => setMin("up")}
              setDown={() => setMin("down")}
            />
            <div className={styles.ampm}>{nowUser.format("a")}</div>
          </div>
          <div className={styles.date}>
            <div>{nowUser.format("MM")}</div>
            <Updown
              width="15px"
              height="10px"
              setUp={() => setMonth("up")}
              setDown={() => setMonth("down")}
            />
            <div>/</div>
            <div>{nowUser.format("DD")}</div>
            <Updown
              width="15px"
              height="10px"
              setUp={() => setDate("up")}
              setDown={() => setDate("down")}
            />
            <div className={styles.day}>{nowUser.format("dddd")}</div>
          </div>
        </div>
        <div className={styles.converterItem}>
          <div className={styles.city}>
            <div className={styles.cityName}>{cityPartner}</div>
          </div>
          <div className={styles.time}>
            <div>{nowPartner.format("hh")}</div>
            <Updown
              width="17px"
              height="15px"
              setUp={() => setHour("up")}
              setDown={() => setHour("down")}
            />
            <div>{nowPartner.format("mm")}</div>
            <Updown
              width="17px"
              height="15px"
              setUp={() => setMin("up")}
              setDown={() => setMin("down")}
            />
            <div className={styles.ampm}>{nowPartner.format("a")}</div>
          </div>
          <div className={styles.date}>
            <div>{nowPartner.format("MM")}</div>
            <Updown
              width="15px"
              height="10px"
              setUp={() => setMonth("up")}
              setDown={() => setMonth("down")}
            />
            <div>/</div>
            <div>{nowPartner.format("DD")}</div>
            <Updown
              width="15px"
              height="10px"
              setUp={() => setDate("up")}
              setDown={() => setDate("down")}
            />
            <div className={styles.day}>{nowPartner.format("dddd")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timezone;
