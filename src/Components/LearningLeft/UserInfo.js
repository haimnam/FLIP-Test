import React from 'react';
import "../Learning.css";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';

function UserInfo(props) {
    const rendering = () => {
        const date = new Date();
        const result = [];
        const localTime = [];
        localTime.push(
            <p className="localTime">{date.getHours() > 12 ? date.getHours() - 12 : date.getHours()}
                :{date.getMinutes() < 10 ? "0" : ""}{date.getMinutes()} {date.getHours() > 12 ? "pm" : "am"}
            </p>
        );
        localTime.push(
            <p className="localTime">{props.timeDiff > 12 ? props.timeDiff - 12 : props.timeDiff}
                :{date.getMinutes() < 10 ? "0" : ""}{date.getMinutes()} {props.timeDiff > 12 ? "pm" : "am"}
            </p>
        );
        
        for (let i = 0; i < 2; i++) {
            result.push(
                <div className="userInfo">
                    <div className="userInfoHead">
                        <div className="languageInfo">{props.students[i].language}</div>
                        <div className="weekInfo">week {props.students[i].week}</div>
                    </div>
                    <h3>{props.students[i].name}</h3>
                    <p className="university">{props.students[i].university}</p>
                    <p className="localTimeDiff">{props.students[i].localTime}</p>
                    {localTime[i]}
                    <div className="chatInfo"><ChatBubbleOutlineIcon/><span className="chat">Chat</span></div>
                    <div className="sessionInfo">
                        <div className="startSession"><VideoCameraFrontIcon/><span className="startSessionContents">Start Session</span></div>
                        <p className="upcomingSession">{props.students[i].schedule[0]}</p>
                        <p>{props.students[i].schedule[1]}</p>
                    </div>
                </div>
            );
        }
        return result;
    };
    
    return (
        <div className="userInfos">
            {rendering()}
        </div>
    );
}

export default UserInfo;