import React from "react";
import styles from "../../../scss/Notes.module.scss";

const BooksHead = ({ setIsOpenModal, setAddSet }) => {
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

export default BooksHead;
