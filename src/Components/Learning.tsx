import React from "react";
import styles from "../scss/App.module.scss";
import LearningLeft from "./LearningLeft.tsx";
import LearningRight from "./LearningRight.tsx";

const Learning = ({ account, students, recommendation }) => {
  return (
    <div className={styles.learning}>
      <LearningLeft account={account} students={students} />
      <LearningRight recommendation={recommendation} />
    </div>
  );
};

export default Learning;
