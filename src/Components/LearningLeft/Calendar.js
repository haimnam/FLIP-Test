import React from 'react';
import "../Learning.css";

function Calendar(props) {
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
                    <td className="date">M</td>
                    <td className="date">T</td>
                    <td className="date">W</td>
                    <td className="date">T</td>
                    <td className="date">F</td>
                    <td className="date">S</td>
                    <td className="date">S</td>
                </thead>
                <tbody>
                    <tr>
                        <td className="date">23</td>
                        <td className="date">24</td>
                        <td className="date"><span className="scheduledDateTwo">25</span><p className="scheduledStudent">Sam</p></td>
                        <td className="date">26</td>
                        <td className="date">27</td>
                        <td className="date"><span className="scheduledDateTwoDark">28</span><p className="scheduledStudentDark">Sungmin</p></td>
                        <td className="date">29</td>
                    </tr>
                    <tr>
                        <td className="date">30</td>
                        <td className="date">1</td>
                        <td className="date"><span className="scheduledDateOne">2</span><p className="scheduledStudent">Sam</p></td>
                        <td className="date">3</td>
                        <td className="date">4</td>
                        <td className="date"><span className="scheduledDateOneDark">5</span><p className="scheduledStudentDark">Sungmin</p></td>
                        <td className="date">6</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Calendar;