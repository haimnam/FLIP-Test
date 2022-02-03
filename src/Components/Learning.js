import React, { useState } from 'react';
import "../App.css"
import InfoIcon from '@mui/icons-material/Info';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';

function Learning(props) {
    const date = new Date();
    var timeDiff = date.getHours() - 14;
    if (timeDiff <= -12) {
        timeDiff = timeDiff + 24;
    } else if (timeDiff <= 0) {
        timeDiff = timeDiff + 12;
    }
        
    var upcoming = 0;
    if (props.students[0].daysLeft > props.students[1].daysLeft) {
        upcoming = 1;
    }

    const [language, setLanguage] = useState("English");

    return (
        <div className="learning">
            <div className="learningLeft">
                <h1>Hello, Nahee!</h1>
                <div>
                    <div className="calendarHeader">
                        <div className="calendarMonth">February 2021</div>
                        <div className="calendarDesc">Upcoming meeting with
                            <span className="upcomingStudent">{props.students[upcoming].name}</span>
                            in {props.students[upcoming].daysLeft} days
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
                <div className="userInfos">
                    <div className="userInfo">
                        <div className="userInfoHead">
                            <div className="languageInfo">{props.students[0].language}</div>
                            <div className="weekInfo">week {props.students[0].week}</div>
                        </div>
                        <h3>{props.students[0].name}</h3>
                        <p className="university">{props.students[0].university}</p>
                        <p className="localTimeDiff">{props.students[0].localTime}</p>
                        <p className="localTime">{date.getHours() > 12 ? date.getHours() - 12 : date.getHours()}
                            :{date.getMinutes() < 10 ? "0" : ""}{date.getMinutes()} {date.getHours() > 12 ? "pm" : "am"}
                        </p>
                        <div className="chatInfo"><ChatBubbleOutlineIcon/><span className="chat">Chat</span></div>
                        <div className="sessionInfo">
                            <div className="startSession"><VideoCameraFrontIcon/><span className="startSessionContents">Start Session</span></div>
                            <p className="upcomingSession">{props.students[0].schedule[0]}</p>
                            <p>{props.students[0].schedule[1]}</p>
                        </div>
                    </div>
                    <div className="userInfo">
                        <div className="userInfoHead">
                            <div className="languageInfo">{props.students[1].language}</div>
                            <div className="weekInfo">week {props.students[1].week}</div>
                        </div>
                        <h3>{props.students[1].name}</h3>
                        <p className="university">{props.students[1].university}</p>
                        <p className="localTimeDiff">{props.students[1].localTime}</p>
                        <p className="localTime">{timeDiff > 12 ? timeDiff - 12 : timeDiff}
                            :{date.getMinutes() < 10 ? "0" : ""}{date.getMinutes()} {timeDiff > 12 ? "pm" : "am"}
                        </p>
                        <div className="chatInfo"><ChatBubbleOutlineIcon/><span className="chat">Chat</span></div>
                        <div className="sessionInfo">
                            <div className="startSession"><VideoCameraFrontIcon/><span className="startSessionContents">Start Session</span></div>
                            <p className="upcomingSession">{props.students[1].schedule[0]}</p>
                            <p>{props.students[1].schedule[1]}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="learningRight">
                <div className="howToMeetFlex">
                    <div className="howToMeet">Check out <a className="howToMeetLink" href="#">How to Meet</a> for instructions on how to meet your partner</div>
                    <div className="infoIcon"><InfoIcon/></div>
                </div>
                    
                <h3>This Week's Recommendation<span className="collegeLife">{props.recommendation.title}</span></h3>
                <div className="recommendationContents">
                    <p>{props.recommendation.contents}</p>
                    <p className="greyContents">{props.recommendation.discussion}</p>
                </div>
                <div className="goToDiscussion">Go to this week's discussion topic</div>
                <div className="flipNote">
                    <div>
                        <h3>This Week's FLIP notes</h3>
                    </div>
                    <div className="languageSelect">
                        <div className="arrowCircle" onClick={() => {
                            setLanguage("Korean");
                        }}><ChevronLeftIcon/></div>
                        {language}
                        <div className="arrowCircle" onClick={() => {
                            setLanguage("English");
                        }}><ChevronRightIcon/></div>
                    </div>
                </div>
                <p className="greyContents">Check out what other people are learning in their langauge exchange!</p>
                <div class="itemsContainer">
                    <div class="item"><div className="circle">OS</div> clueless</div>
                    <div class="item"><div className="circle">SJ</div> obviously</div>
                    <div class="item"><div className="circle">CH</div> I don't think so</div>
                    <div class="item"><div className="circle">HJ</div> as opposed to</div>
                    <div class="item"><div className="circle">GH</div> commitment</div>
                    <div class="item"><div className="circle">SJ</div> compatible</div>
                    <div class="item"><div className="circle">YJ</div> looking forward to it</div>
                    <div class="item"><div className="circle">NH</div> reel it in</div>
                    <div class="item"><div className="circle">EF</div> agree to disagree</div>
                    <div class="item"><div className="circle">RG</div> surprise surprise</div>
                    <div class="item"><div className="circle">ML</div> excuse me</div>
                </div>
            </div>
        </div>
    );
}

export default Learning;