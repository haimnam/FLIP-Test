import React from "react";
import styles from "../../../scss/Learning.module.scss";
import dayjs from "dayjs";
import range from "lodash-es/range";
import CalendarHeader from "./CalendarHeader.tsx";

const Calendar = () => {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const dayOfNextWeek = dayjs(
    `${dayjs().year()}-${dayjs().month() + 1}-${dayjs().date() + 7}`
  );

  return (
    <div>
      <CalendarHeader />
      <div className={styles.calendar}>
        <div className={styles.calendarHead}>
          {days.map((day, index) => {
            return (
              <div key={index} className={styles.date}>
                {day}
              </div>
            );
          })}
        </div>
        <div>
          <div className={styles.calendarBody}>
            {range(7).map((i) => {
              let curDay = dayjs()
                .add(i - dayjs().day() + 1, "day")
                .day();
              let curDate = dayjs()
                .add(i - dayjs().day() + 1, "day")
                .date();
              if (curDay === 3) {
                return (
                  <div key={i} className={styles.selectedDate}>
                    <span
                      className={
                        curDate > 9
                          ? styles.scheduledDate
                          : styles.scheduledDateShort
                      }
                    >
                      {curDate}
                    </span>
                    <div className={styles.scheduledStudent}>Sam</div>
                  </div>
                );
              } else if (curDay === 6) {
                return (
                  <div key={i} className={styles.selectedDate}>
                    <span
                      className={
                        curDate > 9
                          ? styles.scheduledDateDark
                          : styles.scheduledDateDarkShort
                      }
                    >
                      {curDate}
                    </span>
                    <div className={styles.scheduledStudentDark}>Sungmin</div>
                  </div>
                );
              } else {
                return (
                  <div key={i} className={styles.date}>
                    {curDate}
                  </div>
                );
              }
            })}
          </div>
          <div className={styles.calendarBody}>
            {range(7).map((i) => {
              let curDay = dayOfNextWeek
                .add(i - dayjs().day() + 1, "day")
                .day();
              let curDate = dayOfNextWeek
                .add(i - dayjs().day() + 1, "day")
                .date();
              if (curDay === 3) {
                return (
                  <div key={i} className={styles.selectedDate}>
                    <span
                      className={
                        curDate > 9
                          ? styles.scheduledDate
                          : styles.scheduledDateShort
                      }
                    >
                      {curDate}
                    </span>
                    <div className={styles.scheduledStudent}>Sam</div>
                  </div>
                );
              } else if (curDay === 6) {
                return (
                  <div key={i} className={styles.selectedDate}>
                    <span
                      className={
                        curDate > 9
                          ? styles.scheduledDateDark
                          : styles.scheduledDateDarkShort
                      }
                    >
                      {curDate}
                    </span>
                    <div className={styles.scheduledStudentDark}>Sungmin</div>
                  </div>
                );
              } else {
                return (
                  <div key={i} className={styles.date}>
                    {curDate}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
