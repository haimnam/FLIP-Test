import React from "react";
import styles from "./LearningHeader.module.scss";

const LearningHeader = ({ myInfo }) => {
  return (
    <div className={styles.frameHeader}>
      <span className={styles.hello}>Hello, Haim!</span>
      <span className={styles.welcome}>
        <span className={styles.text1}>Welcome to </span>
        <span className={styles.text2}>336 3rd Year Korean</span>
      </span>
    </div>
  );
};

export default LearningHeader;
