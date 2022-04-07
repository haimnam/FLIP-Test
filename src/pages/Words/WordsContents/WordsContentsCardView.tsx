import React from "react";
import styles from "../../../scss/Words.module.scss";

const WordsContentsCard = ({ books, selectedBookId }) => {
  return (
    <div className={styles.wordsCardView}>
      {books.data
        .find((book) => book._id === selectedBookId)
        .words.map((word) => {
          return (
            <div key={word._id} className={styles.wordsListCard}>
              <div className={styles.wordCard}>
                <div className={styles.wordCardTerm}>{word.text}</div>
                <div className={styles.wordCardDefinition}>{word.meaning}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default WordsContentsCard;
