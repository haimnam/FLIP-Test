import React, { useState } from "react";
import "../Learning.css";
import dayjs from "dayjs";
import range from "lodash-es/range";

const Calendar = ({ students, upcoming }) => {
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
<<<<<<< HEAD
  const [dayOfThisWeek, setDayObj] = useState(dayjs());
  const thisYear = dayOfThisWeek.year();
  const thisMonth = dayOfThisWeek.month();
  const today = dayOfThisWeek.date();
  const dayOfNextWeek = dayjs(`${thisYear}-${thisMonth + 1}-${today + 7}`);
=======
  const firstWeekDate = [23, 24, 25, 26, 27, 28, 29];
  const secondWeekDate = [30, 1, 2, 3, 4, 5, 6];
>>>>>>> c49142e8f61dbe495e394d513b234cc0cdc1399a

  return (
    <div>
      <div className="calendarHeader">
        <div className="calendarMonth">
          {months[thisMonth]} {thisYear}
        </div>
        <div className="calendarDesc">
          Upcoming meeting with
          <span className="upcomingStudent">{students[upcoming].name}</span>
          in {students[upcoming].daysLeft} days
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
                    <span className="scheduledDateTwo">{curDate}</span>
                    <p className="scheduledStudent">Sam</p>
                  </div>
                );
              } else if (curDay === 6) {
                return (
                  <div key={i} className="selectedDate">
                    <span className="scheduledDateTwoDark">{curDate}</span>
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
                    <span className="scheduledDateTwo">{curDate}</span>
                    <p className="scheduledStudent">Sam</p>
                  </div>
                );
              } else if (curDay === 6) {
                return (
                  <div key={i} className="selectedDate">
                    <span className="scheduledDateTwoDark">{curDate}</span>
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
