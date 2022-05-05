import React from "react";
import styles from "./Books.module.scss";

const BooksHead = ({ setIsOpenModal, setAddSet }) => {
  const clickStudySets = () => {
    setAddSet(true);
    setIsOpenModal(true);
  };

  return (
    <div className={styles.booksHead}>
      <div className={styles.booksTitle}>My Study Sets</div>
      <button className={styles.booksBtn} onClick={clickStudySets}>
        +
      </button>
    </div>
  );
};

export default BooksHead;
