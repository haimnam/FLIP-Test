import React from "react";
import styles from "../../../scss/Words.module.scss";

const WordsStudySetsHead = ({ setIsOpenModal, setAddSet }) => {
  const clickStudySets = () => {
    setAddSet(true);
    setIsOpenModal(true);
  };

  return (
    <div className={styles.studySetsHead}>
      <div className={styles.studySetsTitle}>My Study Sets</div>
      <button className={styles.studySetsBtn} onClick={clickStudySets}>
        +
      </button>
    </div>
  );
};

export default WordsStudySetsHead;
