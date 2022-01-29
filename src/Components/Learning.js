import React, { Component } from 'react';
import "../App.css"
import InfoIcon from '@mui/icons-material/Info';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';

class Learning extends Component {
    render() {
        const date = new Date();
        var timeDiff = date.getHours() - 14;
        if (timeDiff <= -12) {
            timeDiff = timeDiff + 24;
        } else if (timeDiff <= 0) {
            timeDiff = timeDiff + 12;
        }
        
        var upcoming = 0;
        if (this.props.students[0].daysLeft > this.props.students[1].daysLeft) {
            upcoming = 1;
        }

        var language = "English";

        return (
            <div className="Learning">
                <div className="LearningLeft">
                    <h1>Hello, Nahee!</h1>
                    <div>
                        <div className="CalendarHeader">
                            <div className="CalendarMonth">February 2021</div>
                            <div className="CalendarDesc">Upcoming meeting with
                                <span className="UpcomingStudent">{this.props.students[upcoming].name}</span>
                                in {this.props.students[upcoming].daysLeft} days
                            </div>
                        </div>
                        <table className="Calendar">
                            <thead>
                                <td className="Date">M</td>
                                <td className="Date">T</td>
                                <td className="Date">W</td>
                                <td className="Date">T</td>
                                <td className="Date">F</td>
                                <td className="Date">S</td>
                                <td className="Date">S</td>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="Date">23</td>
                                    <td className="Date">24</td>
                                    <td className="Date"><span className="ScheduledDateTwo">25</span><p className="ScheduledStudent">Sam</p></td>
                                    <td className="Date">26</td>
                                    <td className="Date">27</td>
                                    <td className="Date"><span className="ScheduledDateTwoDark">28</span><p className="ScheduledStudentDark">Sungmin</p></td>
                                    <td className="Date">29</td>
                                </tr>
                                <tr>
                                    <td className="Date">30</td>
                                    <td className="Date">1</td>
                                    <td className="Date"><span className="ScheduledDateOne">2</span><p className="ScheduledStudent">Sam</p></td>
                                    <td className="Date">3</td>
                                    <td className="Date">4</td>
                                    <td className="Date"><span className="ScheduledDateOneDark">5</span><p className="ScheduledStudentDark">Sungmin</p></td>
                                    <td className="Date">6</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="UserInfos">
                        <div className="UserInfo">
                            <div className="UserInfoHead">
                                <div className="LanguageInfo">{this.props.students[0].language}</div>
                                <div className="WeekInfo">week {this.props.students[0].week}</div>
                            </div>
                            <h3>{this.props.students[0].name}</h3>
                            <p className="University">{this.props.students[0].university}</p>
                            <p className="LocalTimeDiff">{this.props.students[0].localTime}</p>
                            <p className="LocalTime">{date.getHours() > 12 ? date.getHours() - 12 : date.getHours()}
                                :{date.getMinutes() < 10 ? "0" : ""}{date.getMinutes()} {date.getHours() > 12 ? "pm" : "am"}
                            </p>
                            <div className="ChatInfo"><ChatBubbleOutlineIcon/><span className="Chat">Chat</span></div>
                            <div className="SessionInfo">
                                <div className="StartSession"><VideoCameraFrontIcon/><span className="StartSessionContents">Start Session</span></div>
                                <p className="UpcomingSession">{this.props.students[0].schedule[0]}</p>
                                <p>{this.props.students[0].schedule[1]}</p>
                            </div>
                        </div>
                        <div className="UserInfo">
                            <div className="UserInfoHead">
                                <div className="LanguageInfo">{this.props.students[1].language}</div>
                                <div className="WeekInfo">week {this.props.students[1].week}</div>
                            </div>
                            <h3>{this.props.students[1].name}</h3>
                            <p className="University">{this.props.students[1].university}</p>
                            <p className="LocalTimeDiff">{this.props.students[1].localTime}</p>
                            <p className="LocalTime">{timeDiff > 12 ? timeDiff - 12 : timeDiff}
                                :{date.getMinutes() < 10 ? "0" : ""}{date.getMinutes()} {timeDiff > 12 ? "pm" : "am"}
                            </p>
                            <div className="ChatInfo"><ChatBubbleOutlineIcon/><span className="Chat">Chat</span></div>
                            <div className="SessionInfo">
                                <div className="StartSession"><VideoCameraFrontIcon/><span className="StartSessionContents">Start Session</span></div>
                                <p className="UpcomingSession">{this.props.students[1].schedule[0]}</p>
                                <p>{this.props.students[1].schedule[1]}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="LearningRight">
                    <div className="HowToMeetFlex">
                        <div className="HowToMeet">Check out <a className="HowToMeetLink" href="#">How to Meet</a> for instructions on how to meet your partner</div>
                        <div className="InfoIcon"><InfoIcon/></div>
                    </div>
                    
                    <h3>This Week's Recommendation<span className="CollegeLife">{this.props.recommendation.title}</span></h3>
                    <div className="RecommendationContents">
                        <p>{this.props.recommendation.contents}</p>
                        <p className="GreyContents">{this.props.recommendation.discussion}</p>
                    </div>
                    <div className="GoToDiscussion">Go to this week's discussion topic</div>
                    <div className="FlipNote">
                        <div>
                            <h3>This Week's FLIP notes</h3>
                        </div>
                        <div className="LanguageSelect">
                            <div className="ArrowCircle" onClick={() => {
                                language = "Korean";
                            }}><ChevronLeftIcon/></div>
                            {language}
                            <div className="ArrowCircle" onClick={() => {
                                language = "English";
                            }}><ChevronRightIcon/></div>
                        </div>
                    </div>
                    <p className="GreyContents">Check out what other people are learning in their langauge exchange!</p>
                    <div class="ItemsContainer">
                        <div class="Item"><div className="Circle">OS</div> clueless</div>
                        <div class="Item"><div className="Circle">SJ</div> obviously</div>
                        <div class="Item"><div className="Circle">CH</div> I don't think so</div>
                        <div class="Item"><div className="Circle">HJ</div> as opposed to</div>
                        <div class="Item"><div className="Circle">GH</div> commitment</div>
                        <div class="Item"><div className="Circle">SJ</div> compatible</div>
                        <div class="Item"><div className="Circle">YJ</div> looking forward to it</div>
                        <div class="Item"><div className="Circle">NH</div> reel it in</div>
                        <div class="Item"><div className="Circle">EF</div> agree to disagree</div>
                        <div class="Item"><div className="Circle">RG</div> surprise surprise</div>
                        <div class="Item"><div className="Circle">ML</div> excuse me</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Learning;