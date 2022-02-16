import React from "react";
import styles from "../scss/App.module.scss";
import HowToMeet from "./LearningRight/HowToMeet";
import Recommendation from "./LearningRight/Recommendation";
import FlipNote from "./LearningRight/FlipNote";

const LearningRight = ({ recommendation }) => {
  return (
    <div className={styles.learningRight}>
      <HowToMeet />
      <Recommendation recommendation={recommendation} />
      <FlipNote />
    </div>
  );
};

export default LearningRight;
