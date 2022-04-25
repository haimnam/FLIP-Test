import React from "react";
import styles from "./Calendar.module.scss";
import dayjs from "dayjs";
import { PartnerInfoData } from "../../../ScheduleAndChatPage/PartnerInfoData.tsx";

const CalendarFooter = () => {
  let upcoming = 1;
  let daysLeft = 6 - dayjs().day();
  if (dayjs().day() < 3 || dayjs().day() > 5) {
    upcoming = 0;
    if (dayjs().day() > 5) {
      daysLeft = 10 - dayjs().day();
    } else {
      daysLeft = 3 - dayjs().day();
    }
  }

  return (
    <div className={styles.calendarFooter}>
      <div className={styles.upcomingFrame}>
        <span className={styles.upcoming}>
          Upcoming session in {daysLeft} days
        </span>
      </div>
      <div className={styles.sessionFrame}>
        <span className={styles.meeting}>
          {PartnerInfoData[upcoming].meetingTimes[0]} 2/25/2022
        </span>
        <span className={styles.meeting}>
          {PartnerInfoData[upcoming].meetingTimes[0]} Tuesday 3:00 pm
        </span>
        <span className={styles.meetingLocal}>Wed 5:00 am KST</span>
      </div>
      {/*<span className={styles.upcoming}>Upcoming with</span>
      <div
        className={upcoming ? styles.upcomingStudent2 : styles.upcomingStudent1}
      >
        <span className={styles.nickname}>
          {PartnerInfoData[upcoming].nickname}
        </span>
      </div>
      <span className={styles.upcoming}>in {daysLeft} days</span>*/}
    </div>
  );
};

export default CalendarFooter;
