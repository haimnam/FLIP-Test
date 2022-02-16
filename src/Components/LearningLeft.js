import React from "react";
import styles from "../scss/App.module.scss";
import HelloHeader from "./LearningLeft/HelloHeader";
import Calendar from "./LearningLeft/Calendar";
import UserInfo from "./LearningLeft/UserInfo";

const LearningLeft = ({ account, students }) => {
  return (
    <div className={styles.learningLeft}>
      <HelloHeader account={account} />
      <Calendar students={students} />
      <UserInfo students={students} />
    </div>
  );
};

export default LearningLeft;
