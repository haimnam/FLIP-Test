import React from "react";
import styles from "../../../scss/Words.module.scss";

const WordsContentsCard = ({ bookData, selectedBookId }) => {
  return (
    <div className={styles.wordsCardView}>
      {bookData
        .find((book) => book.id === selectedBookId)
        .wordData.map((word) => {
          return (
            <div key={word.id} className={styles.wordsListCard}>
              <div className={styles.wordCard}>
                <div className={styles.wordCardTerm}>{word.term}</div>
                <div className={styles.wordCardDefinition}>
                  {word.definition}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default WordsContentsCard;
