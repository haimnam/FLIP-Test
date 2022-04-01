import React from "react";
import styles from "../../../../scss/Words.module.scss";
import WordsContentsListEllipsis from "./WordsContentsListEllipsis.tsx";
import WordsContentsListText from "./WordsContentsListText.tsx";

const WordsContentsList = ({
  setBackground,
  bookData,
  setBookData,
  selectedBookId,
  isMoveClicked,
  setIsMoveClicked,
  word,
  index,
}) => {
  return (
    <div className={styles.wordsListRow}>
      <WordsContentsListText
        setBackground={setBackground}
        bookData={bookData}
        setBookData={setBookData}
        selectedBookId={selectedBookId}
        word={word}
        index={index}
      />
      {word.ellipsis && (
        <WordsContentsListEllipsis
          setBackground={setBackground}
          bookData={bookData}
          setBookData={setBookData}
          selectedBookId={selectedBookId}
          isMoveClicked={isMoveClicked}
          setIsMoveClicked={setIsMoveClicked}
          word={word}
        />
      )}
    </div>
  );
};

export default WordsContentsList;
