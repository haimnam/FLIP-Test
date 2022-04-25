import React from "react";
import styles from "./Calendar.module.scss";
import dayjs from "dayjs";

const CalendarHeader = () => {
  return (
    <div className={styles.calendarHeader}>
      <div className={styles.calendarMonth}>{dayjs().format("MMMM YYYY")}</div>
    </div>
  );
};

export default CalendarHeader;
