import React from "react";
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
  const dayOfThisWeek = dayjs();
  const thisYear = dayOfThisWeek.year();
  const thisMonth = dayOfThisWeek.month();
  const todayDate = dayOfThisWeek.date();
  const todayDay = dayOfThisWeek.day();
  const dayOfNextWeek = dayjs(`${thisYear}-${thisMonth + 1}-${todayDate + 7}`);
  var upcoming = 0;
  var daysLeft = 0;
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
              let curDay = dayOfThisWeek.add(i - todayDay + 1, "day").day();
              let curDate = dayOfThisWeek.add(i - todayDay + 1, "day").date();
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
              let curDay = dayOfNextWeek.add(i - todayDay + 1, "day").day();
              let curDate = dayOfNextWeek.add(i - todayDay + 1, "day").date();
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
