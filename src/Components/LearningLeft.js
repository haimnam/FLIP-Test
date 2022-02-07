import React from 'react';
import "../App.css";
import HelloHeader from "./LearningLeft/HelloHeader";
import Calendar from "./LearningLeft/Calendar";
import UserInfo from "./LearningLeft/UserInfo";

function LearningLeft(props) {
    return (
        <div className="learningLeft">
            <HelloHeader account={props.account}/>
            <Calendar students={props.students} upcoming={props.upcoming}/>
            <UserInfo students={props.students} timeDiff={props.timeDiff}/>
        </div>
    );
}

export default LearningLeft;