import React from "react";
import styles from "../../../scss/Words.module.scss";

const WordsContentsHead = ({ bookData, selectedBookId, setIsListView }) => {
  return (
    <div className={styles.wordsHead}>
      <div className={styles.wordsTitle}>
        <div className={styles.wordsTitleName}>
          {bookData.find((book) => book.id === selectedBookId).language}{" "}
          {bookData.find((book) => book.id === selectedBookId).date}
        </div>
      </div>
      <div className={styles.wordsTitleLanguage}>
        {bookData.find((book) => book.id === selectedBookId).language}
      </div>
      <button onClick={() => setIsListView((prev) => !prev)}>
        Change View
      </button>
    </div>
  );
};

export default WordsContentsHead;
