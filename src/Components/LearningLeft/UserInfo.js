import React from 'react';
import "../Learning.css";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';

function UserInfo(props) {
    const date = new Date();

    return (
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
                <p className="localTime">{props.timeDiff > 12 ? props.timeDiff - 12 : props.timeDiff}
                    :{date.getMinutes() < 10 ? "0" : ""}{date.getMinutes()} {props.timeDiff > 12 ? "pm" : "am"}
                </p>
                <div className="chatInfo"><ChatBubbleOutlineIcon/><span className="chat">Chat</span></div>
                <div className="sessionInfo">
                    <div className="startSession"><VideoCameraFrontIcon/><span className="startSessionContents">Start Session</span></div>
                    <p className="upcomingSession">{props.students[1].schedule[0]}</p>
                    <p>{props.students[1].schedule[1]}</p>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;