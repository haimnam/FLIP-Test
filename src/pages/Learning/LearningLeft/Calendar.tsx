import React from "react";
import styles from "../../../scss/Learning.module.scss";
import dayjs from "dayjs";
import range from "lodash-es/range";

const Calendar = ({ students }) => {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const dayOfThisWeek = dayjs();
  const thisYear = dayOfThisWeek.year();
  const thisMonth = dayOfThisWeek.month();
  const todayDate = dayOfThisWeek.date();
  const todayDay = dayOfThisWeek.day();
  const dayOfNextWeek = dayjs(`${thisYear}-${thisMonth + 1}-${todayDate + 7}`);
  let upcoming = 0;
  let daysLeft = 0;
  if (todayDay > 2 && todayDay < 6) {
    upcoming = 1;
    daysLeft = 6 - todayDay;
  } else {
    if (todayDay > 5) {
      daysLeft = 10 - todayDay;
    }
    daysLeft = 3 - todayDay;
  }

  return (
    <div>
      <div className={styles.calendarHeader}>
        <div className={styles.calendarMonth}>
          {dayjs().format("MMMM YYYY")}
        </div>
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
              let curDay = dayOfThisWeek.add(i - todayDay + 1, "day").day();
              let curDate = dayOfThisWeek.add(i - todayDay + 1, "day").date();
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
                    <p className={styles.scheduledStudent}>Sam</p>
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
                    <p className={styles.scheduledStudentDark}>Sungmin</p>
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
              let curDay = dayOfNextWeek.add(i - todayDay + 1, "day").day();
              let curDate = dayOfNextWeek.add(i - todayDay + 1, "day").date();
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
                    <p className={styles.scheduledStudent}>Sam</p>
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
                    <p className={styles.scheduledStudentDark}>Sungmin</p>
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
