import React from 'react';
import "../Learning.css";

function Calendar(props) {
    const days = ["M", "T", "W", "T", "F", "S", "S"];
    const firstWeekDate = [23, 24, 25, 26, 27, 28, 29];
    const secondWeekDate = [30, 1, 2, 3, 4, 5, 6];
    return (
        <div>
            <div className="calendarHeader">
                <div className="calendarMonth">February 2021</div>
                <div className="calendarDesc">Upcoming meeting with
                    <span className="upcomingStudent">{props.students[props.upcoming].name}</span>
                    in {props.students[props.upcoming].daysLeft} days
                </div>
            </div>
            <table className="calendar">
                <thead>
                    {days.map((day) => {
                        return (
                            <td className="date">{day}</td>
                        );
                    })}
                </thead>
                <tbody>
                    <tr>
                        {firstWeekDate.map((date) => {
                            if (date == 25) {
                                return (
                                    <td className="date"><span className="scheduledDateTwo">25</span><p className="scheduledStudent">Sam</p></td>
                                );
                            } else if (date == 28) {
                                return (
                                    <td className="date"><span className="scheduledDateTwoDark">28</span><p className="scheduledStudentDark">Sungmin</p></td>
                                );
                            } else {
                                return (
                                    <td className="date">{date}</td>
                                );
                            }
                        })}
                    </tr>
                    <tr>
                        {secondWeekDate.map((date) => {
                            if (date == 2) {
                                return (
                                    <td className="date"><span className="scheduledDateOne">2</span><p className="scheduledStudent">Sam</p></td>
                                );
                            } else if (date == 5) {
                                return (
                                    <td className="date"><span className="scheduledDateOneDark">5</span><p className="scheduledStudentDark">Sungmin</p></td>
                                );
                            } else {
                                return (
                                    <td className="date">{date}</td>
                                );
                            }
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Calendar;