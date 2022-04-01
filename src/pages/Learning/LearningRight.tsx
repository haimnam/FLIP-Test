import React from "react";
import styles from "../../scss/App.module.scss";
import HowToMeet from "./LearningRight/HowToMeet.tsx";
import Recommendation from "./LearningRight/Recommendation.tsx";
import FlipNote from "./LearningRight/FlipNote.tsx";
import FlipNoteContext from "../../Store/FlipNoteContext.tsx";

const LearningRight = () => {
  return (
    <FlipNoteContext>
      <div className={styles.learningRight}>
        <HowToMeet />
        <Recommendation />
        <FlipNote />
      </div>
    </FlipNoteContext>
  );
};

export default LearningRight;
