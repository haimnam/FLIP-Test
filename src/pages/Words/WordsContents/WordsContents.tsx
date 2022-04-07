import React, { useState } from "react";
import styles from "../../../scss/Words.module.scss";
import WordsContentsHead from "./WordsContentsHead.tsx";
import WordsContentsListView from "./WordsContentsListView/WordsContentsListView.tsx";
import WordsContentsCardView from "./WordsContentsCardView.tsx";

const WordsContents = ({
  books,
  clickBackground,
  isOpenModal,
  setIsOpenModal,
  selectedBookId,
  isMoveClicked,
  setIsMoveClicked,
  isEditLanguage,
  setIsEditLanguage,
  setFetch,
}) => {
  const [isListView, setIsListView] = useState<boolean>(true);

  return (
    <div className={styles.words}>
      <WordsContentsHead
        books={books}
        clickBackground={clickBackground}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        selectedBookId={selectedBookId}
        setIsListView={setIsListView}
        isEditLanguage={isEditLanguage}
        setIsEditLanguage={setIsEditLanguage}
        setFetch={setFetch}
      />
      {isListView ? (
        <WordsContentsListView
          books={books}
          clickBackground={clickBackground}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          selectedBookId={selectedBookId}
          isMoveClicked={isMoveClicked}
          setIsMoveClicked={setIsMoveClicked}
          setFetch={setFetch}
        />
      ) : (
        <WordsContentsCardView books={books} selectedBookId={selectedBookId} />
      )}
    </div>
  );
};

export default WordsContents;
