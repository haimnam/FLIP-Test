import React from "react";
import "../css/App.css";
import HowToMeet from "./LearningRight/HowToMeet";
import Recommendation from "./LearningRight/Recommendation";
import FlipNote from "./LearningRight/FlipNote";

const LearningRight = ({ recommendation }) => {
  return (
    <div className="learningRight">
      <HowToMeet />
      <Recommendation recommendation={recommendation} />
      <FlipNote />
    </div>
  );
};

export default LearningRight;
