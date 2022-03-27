import React, { useState } from "react";
import styles from "../../../scss/Words.module.scss";
import WordsContentsHead from "./WordsContentsHead.tsx";
import WordsContentsListView from "./WordsContentsListView/WordsContentsListView.tsx";
import WordsContentsCardView from "./WordsContentsCardView.tsx";

const WordsContents = ({
  setBackground,
  bookData,
  setBookData,
  selectedBookId,
  isMoveClicked,
  setIsMoveClicked,
}) => {
  const [isListView, setIsListView] = useState<boolean>(true);

  return (
    <div className={styles.words}>
      <WordsContentsHead
        bookData={bookData}
        selectedBookId={selectedBookId}
        setIsListView={setIsListView}
      />
      {isListView ? (
        <WordsContentsListView
          setBackground={setBackground}
          bookData={bookData}
          setBookData={setBookData}
          selectedBookId={selectedBookId}
          isMoveClicked={isMoveClicked}
          setIsMoveClicked={setIsMoveClicked}
        />
      ) : (
        <WordsContentsCardView
          bookData={bookData}
          selectedBookId={selectedBookId}
        />
      )}
    </div>
  );
};

export default WordsContents;
