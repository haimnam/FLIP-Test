import React from 'react';
import "../App.css";
import HowToMeet from "./LearningRight/HowToMeet";
import Recommendation from "./LearningRight/Recommendation";
import FlipNote from "./LearningRight/FlipNote";

function LearningRight(props) {
    return (
        <div className="learningRight">
            <HowToMeet/>
            <Recommendation recommendation={props.recommendation}/>
            <FlipNote/>
        </div>
    );
}

export default LearningRight;