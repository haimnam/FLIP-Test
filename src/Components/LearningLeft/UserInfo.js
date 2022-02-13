import React from 'react';
import "../Learning.css";
import UserInfoData from "./UserInfoData";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';

const UserInfo = ({students}) => {
    return (
        <div className="userInfos">
            {UserInfoData(students={students}).map((val) => {
                return (
                    <div key={val.id} className="userInfo">
                        <div className="userInfoHead">
                            <div className="languageInfo">{val.language}</div>
                            <div className="weekInfo">week {val.week}</div>
                        </div>
                        <h3>{val.name}</h3>
                        <p className="university">{val.university}</p>
                        <p className="localTimeDiff">{val.localTime}</p>
                        <p className="curTime">{val.curHours}:{val.curMinutes} {val.curAMPM}</p>
                        <div className="chatInfo"><ChatBubbleOutlineIcon/><span className="chat">Chat</span></div>
                        <div className="sessionInfo">
                            <div className="startSession"><VideoCameraFrontIcon/><span className="startSessionContents">Start Session</span></div>
                            <p className="upcomingSession">{val.schedule[0]}</p>
                            <p>{val.schedule[1]}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default UserInfo;