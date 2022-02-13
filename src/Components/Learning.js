import React from 'react';
import "../App.css";
import LearningLeft from "./LearningLeft";
import LearningRight from "./LearningRight";

const Learning = ({account, students, recommendation}) => {
    var upcoming = 0;
    if (students[0].daysLeft > students[1].daysLeft) {
        console.log('yes');
        upcoming = 1;
    }

    return (
        <div className="learning">
            <LearningLeft account={account} students={students} upcoming={upcoming}/>
            <LearningRight recommendation={recommendation}/>
        </div>
    );
};

export default Learning;