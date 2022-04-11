import React from "react";
import styles from "./Learning.module.scss";
import LearningHeader from "../LearningLeft/LearningHeader.tsx";
import Calendar from "../LearningLeft/Calendar/Calendar.tsx";
import UserInfo from "../LearningLeft/UserInfo/UserInfo.tsx";
import HowToMeet from "../LearningRight/HowToMeet/HowToMeet.tsx";
import Recommendation from "../LearningRight/Recommendation/Recommendation.tsx";
import FlipNote from "../LearningRight/FlipNote/FlipNote.tsx";
import FlipNoteContext from "../../../Store/FlipNoteContext.tsx";

const Learning = ({ myInfo }) => {
  return (
    <div className={styles.contents}>
      <FlipNoteContext>
        <div className={styles.learnings}>
          <LearningHeader myInfo={myInfo} />
          <Calendar />
          <UserInfo />
        </div>
        <div className={styles.learnings}>
          <HowToMeet />
          <Recommendation />
          <FlipNote />
        </div>
      </FlipNoteContext>
    </div>
  );
};

export default Learning;
