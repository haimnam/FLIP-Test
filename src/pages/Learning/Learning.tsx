import React from "react";
import styles from "../../scss/App.module.scss";
import HelloHeader from "./LearningLeft/HelloHeader.tsx";
import Calendar from "./LearningLeft/Calendar.tsx";
import UserInfo from "./LearningLeft/UserInfo.tsx";
import HowToMeet from "./LearningRight/HowToMeet.tsx";
import Recommendation from "./LearningRight/Recommendation.tsx";
import FlipNote from "./LearningRight/FlipNote.tsx";
import FlipNoteContext from "../../Store/FlipNoteContext.tsx";

const Learning = ({ myInfo }) => {
  return (
    <div className={styles.contents}>
      <FlipNoteContext>
        <div className={styles.learningLeft}>
          <HelloHeader myInfo={myInfo} />
          <Calendar />
          <UserInfo />
        </div>
        <div className={styles.learningRight}>
          <HowToMeet />
          <Recommendation />
          <FlipNote />
        </div>
      </FlipNoteContext>
    </div>
  );
};

export default Learning;
