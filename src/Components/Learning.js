import React from 'react';
import "../App.css";
import LearningLeft from "./LearningLeft";
import LearningRight from "./LearningRight";

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
        console.log('yes');
        upcoming = 1;
    }

    return (
        <div className="learning">
            <LearningLeft students={props.students} upcoming={upcoming} timeDiff={timeDiff}/>
            <LearningRight recommendation={props.recommendation}/>
        </div>
    );
}

export default Learning;