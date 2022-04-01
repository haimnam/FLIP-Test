import React from "react";
import styles from "../../../scss/Learning.module.scss";
import dayjs from "dayjs";

const CalendarHeader = ({ students }) => {
  let upcoming = 0;
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
    <div className={styles.calendarHeader}>
      <div className={styles.calendarMonth}>{dayjs().format("MMMM YYYY")}</div>
      <div className={styles.calendarDesc}>
        Upcoming meeting with
        <span
          className={
            upcoming ? styles.upcomingStudent2 : styles.upcomingStudent1
          }
        >
          {students[upcoming].name}
        </span>
        in {daysLeft} days
      </div>
    </div>
  );
};

export default CalendarHeader;
