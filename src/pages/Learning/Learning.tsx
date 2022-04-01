import React from "react";
import styles from "../../scss/App.module.scss";
import LearningLeft from "./LearningLeft.tsx";
import LearningRight from "./LearningRight.tsx";

const Learning = ({ account, students }) => {
  return (
    <div className={styles.contents}>
      <LearningLeft account={account} students={students} />
      <LearningRight />
    </div>
  );
};

export default Learning;
