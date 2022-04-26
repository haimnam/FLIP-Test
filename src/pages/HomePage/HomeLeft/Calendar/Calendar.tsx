import React from "react";
import styles from "./Calendar.module.scss";
import dayjs from "dayjs";
import range from "lodash-es/range";
import CalendarHeader from "./CalendarHeader.tsx";
import CalendarFooter from "./CalendarFooter.tsx";

const Calendar = () => {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const dayOfNextWeek = dayjs(
    `${dayjs().year()}-${dayjs().month() + 1}-${dayjs().date() + 7}`
  );

  return (
    <div className={styles.calendar}>
      <div className={styles.calendarFrame}>
        <div className={styles.calendarBody}>
          <div className={styles.calendarTitle}>
            {dayjs().format("MMMM YYYY")}
          </div>
          <div className={styles.calendarDays}>
            {days.map((day, index) => (
              <div key={index} className={styles.day}>
                {day}
              </div>
            ))}
          </div>
          <div className={styles.calendarDates}>
            <div className={styles.calendarRow}>
              {range(7).map((i) => {
                const curDay = dayjs()
                  .add(i - dayjs().day() + 1, "day")
                  .day();
                const curDate = dayjs()
                  .add(i - dayjs().day() + 1, "day")
                  .date();
                if (curDay === 3) {
                  return (
                    <div key={i} className={styles.selectedDate}>
                      <div className={styles.scheduledDate}>
                        <span className={styles.number}>{curDate}</span>
                      </div>
                    </div>
                  );
                } else if (curDay === 6) {
                  return (
                    <div key={i} className={styles.selectedDate}>
                      <div className={styles.scheduledDateDark}>
                        <span className={styles.number}>{curDate}</span>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <span key={i} className={styles.date}>
                      {curDate}
                    </span>
                  );
                }
              })}
            </div>
            <div className={styles.calendarRow}>
              {range(7).map((i) => {
                const curDay = dayOfNextWeek
                  .add(i - dayjs().day() + 1, "day")
                  .day();
                const curDate = dayOfNextWeek
                  .add(i - dayjs().day() + 1, "day")
                  .date();
                if (curDay === 3) {
                  return (
                    <div key={i} className={styles.selectedDate}>
                      <div className={styles.scheduledDate}>
                        <span className={styles.number}>{curDate}</span>
                      </div>
                    </div>
                  );
                } else if (curDay === 6) {
                  return (
                    <div key={i} className={styles.selectedDate}>
                      <div className={styles.scheduledDateDark}>
                        <span className={styles.number}>{curDate}</span>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <span key={i} className={styles.date}>
                      {curDate}
                    </span>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <CalendarFooter />
      </div>
    </div>
  );
};

export default Calendar;
