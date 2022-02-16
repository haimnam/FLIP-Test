import React, { useState } from "react";
import "../../scss/Learning.scss";
import dayjs from "dayjs";
import range from "lodash-es/range";

const Calendar = ({ students }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "October",
    "November",
    "December",
  ];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const [dayOfThisWeek, setDayObj] = useState(dayjs());
  const thisYear = dayOfThisWeek.year();
  const thisMonth = dayOfThisWeek.month();
  const today = dayOfThisWeek.date();
  const curDay = dayOfThisWeek.day();
  const dayOfNextWeek = dayjs(`${thisYear}-${thisMonth + 1}-${today + 7}`);
  var upcoming = 0;
  var daysLeft = 0;
  if (curDay > 2 && curDay < 6) {
    upcoming = 1;
    daysLeft = 5 - curDay;
  } else {
    if (curDay == 6) {
      daysLeft = 3;
    }
    daysLeft = 2 - curDay;
  }

  return (
    <div>
      <div className="calendarHeader">
        <div className="calendarMonth">
          {months[thisMonth]} {thisYear}
        </div>
        <div className="calendarDesc">
          Upcoming meeting with
          <span className={upcoming ? "upcomingStudent2" : "upcomingStudent1"}>
            {students[upcoming].name}
          </span>
          in {daysLeft} days
        </div>
      </div>
      <div className="calendar">
        <div className="calendarHead">
          {days.map((day, index) => {
            return (
              <div key={index} className="date">
                {day}
              </div>
            );
          })}
        </div>
        <div>
          <div className="calendarBody">
            {range(7).map((i) => {
              let curDay = dayOfThisWeek.add(i, "day").day();
              let curDate = dayOfThisWeek.add(i, "day").date();
              if (curDay === 3) {
                return (
                  <div key={i} className="selectedDate">
                    <span
                      className={
                        curDate > 9 ? "scheduledDate" : "scheduledDateShort"
                      }
                    >
                      {curDate}
                    </span>
                    <p className="scheduledStudent">Sam</p>
                  </div>
                );
              } else if (curDay === 6) {
                return (
                  <div key={i} className="selectedDate">
                    <span
                      className={
                        curDate > 9
                          ? "scheduledDateDark"
                          : "scheduledDateDarkShort"
                      }
                    >
                      {curDate}
                    </span>
                    <p className="scheduledStudentDark">Sungmin</p>
                  </div>
                );
              } else {
                return (
                  <div key={i} className="date">
                    {curDate}
                  </div>
                );
              }
            })}
          </div>
          <div className="calendarBody">
            {range(7).map((i) => {
              let curDay = dayOfNextWeek.add(i, "day").day();
              let curDate = dayOfNextWeek.add(i, "day").date();
              if (curDay === 3) {
                return (
                  <div key={i} className="selectedDate">
                    <span
                      className={
                        curDate > 9 ? "scheduledDate" : "scheduledDateShort"
                      }
                    >
                      {curDate}
                    </span>
                    <p className="scheduledStudent">Sam</p>
                  </div>
                );
              } else if (curDay === 6) {
                return (
                  <div key={i} className="selectedDate">
                    <span
                      className={
                        curDate > 9
                          ? "scheduledDateDark"
                          : "scheduledDateDarkShort"
                      }
                    >
                      {curDate}
                    </span>
                    <p className="scheduledStudentDark">Sungmin</p>
                  </div>
                );
              } else {
                return (
                  <div key={i} className="date">
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
