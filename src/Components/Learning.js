import React from 'react';
import "../App.css";
import LearningLeft from "./LearningLeft";
import LearningRight from "./LearningRight";

const Learning = ({account, students, recommendation}) => {
    const date = new Date();
    var timeDiff = date.getHours() - 14;
    if (timeDiff <= -12) {
        timeDiff = timeDiff + 24;
    } else if (timeDiff <= 0) {
        timeDiff = timeDiff + 12;
    }
        
    var upcoming = 0;
    if (students[0].daysLeft > students[1].daysLeft) {
        console.log('yes');
        upcoming = 1;
    }

    return (
        <div className="learning">
            <LearningLeft account={account} students={students} upcoming={upcoming} timeDiff={timeDiff}/>
            <LearningRight recommendation={recommendation}/>
        </div>
    );
};

export default Learning;