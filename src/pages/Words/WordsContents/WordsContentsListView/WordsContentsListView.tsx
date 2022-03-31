import React, { useState } from "react";
import styles from "../../../../scss/Words.module.scss";
import WordsContentsList from "./WordsContentsList.tsx";

const WordsContentsListView = ({
  setBackground,
  bookData,
  setBookData,
  selectedBookId,
  isMoveClicked,
  setIsMoveClicked,
}) => {
  const [nextWordId, setNextWordId] = useState<number>(1);
  const addWord = (bookId: number) => {
    setBookData(
      bookData.map((book) =>
        book._id === bookId
          ? {
              ...book,
              words: book.words.concat({
                _id: nextWordId,
                text: "",
                meaning: "",
                ellipsis: false,
              }),
            }
          : book
      )
    );
    setNextWordId(nextWordId + 1);
  };

  return (
    <React.Fragment>
      <div className={styles.wordsListView}>
        <div className={styles.wordsList}>
          <div className={styles.wordsListHead}>
            <div>Term</div>
            <div>Definition</div>
          </div>
        </div>
        {bookData
          .find((book) => book._id === selectedBookId)
          .words.map((word, index) => {
            return (
              <WordsContentsList
                setBackground={setBackground}
                bookData={bookData}
                setBookData={setBookData}
                selectedBookId={selectedBookId}
                isMoveClicked={isMoveClicked}
                setIsMoveClicked={setIsMoveClicked}
                word={word}
                index={index}
              />
            );
          })}
      </div>
      <button
        className={styles.wordsAddBtn}
        onClick={() => addWord(selectedBookId)}
      >
        +
      </button>
    </React.Fragment>
  );
};

export default WordsContentsListView;
