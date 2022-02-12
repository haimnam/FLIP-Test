import React from 'react';
import "../App.css";
import HelloHeader from "./LearningLeft/HelloHeader";
import Calendar from "./LearningLeft/Calendar";
import UserInfo from "./LearningLeft/UserInfo";

const LearningLeft = ({account, students, upcoming, timeDiff}) => {
    return (
        <div className="learningLeft">
            <HelloHeader account={account}/>
            <Calendar students={students} upcoming={upcoming}/>
            <UserInfo students={students} timeDiff={timeDiff}/>
        </div>
    );
};

export default LearningLeft;