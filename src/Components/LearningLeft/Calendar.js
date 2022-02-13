import React from 'react';
import "../Learning.css";

const Calendar = ({students, upcoming}) => {
    const days = ["M", "T", "W", "T", "F", "S", "S"];
    const firstWeekDate = [23, 24, 25, 26, 27, 28, 29];
    const secondWeekDate = [30, 1, 2, 3, 4, 5, 6];
    return (
        <div>
            <div className="calendarHeader">
                <div className="calendarMonth">February 2021</div>
                <div className="calendarDesc">Upcoming meeting with
                    <span className="upcomingStudent">{students[upcoming].name}</span>
                    in {students[upcoming].daysLeft} days
                </div>
            </div>
            <div className="calendar">
                <div className="calendarHead">
                    {days.map((day, index) => {
                        return (
                            <div key={index} className="date">{day}</div>
                        );
                    })}
                </div>
                <div>
                    <div className="calendarBody">
                        {firstWeekDate.map((date, index) => {
                            if (date === 25) {
                                return (
                                    <div key={index} className="selectedDate"><span className="scheduledDateTwo">25</span><p className="scheduledStudent">Sam</p></div>
                                );
                            } else if (date === 28) {
                                return (
                                    <div key={index} className="selectedDate"><span className="scheduledDateTwoDark">28</span><p className="scheduledStudentDark">Sungmin</p></div>
                                );
                            } else {
                                return (
                                    <div key={index} className="date">{date}</div>
                                );
                            }
                        })}
                    </div>
                    <div className="calendarBody">
                        {secondWeekDate.map((date, index) => {
                            if (date === 2) {
                                return (
                                    <div key={index} className="selectedDate"><span className="scheduledDateOne">2</span><p className="scheduledStudent">Sam</p></div>
                                );
                            } else if (date === 5) {
                                return (
                                    <div key={index} className="selectedDate"><span className="scheduledDateOneDark">5</span><p className="scheduledStudentDark">Sungmin</p></div>
                                );
                            } else {
                                return (
                                    <div key={index} className="date">{date}</div>
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