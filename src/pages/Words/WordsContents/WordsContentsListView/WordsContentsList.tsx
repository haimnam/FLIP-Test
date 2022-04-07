import React, { useState } from "react";
import styles from "../../../../scss/Words.module.scss";
import WordsContentsListEllipsis from "./WordsContentsListEllipsis.tsx";
import WordsContentsListText from "./WordsContentsListText.tsx";
import Modal from "../../../../Components/Modal.tsx";
import Ellipsis from "./Ellipsis.tsx";

const WordsContentsList = ({
  books,
  clickBackground,
  isOpenModal,
  setIsOpenModal,
  selectedBookId,
  isMoveClicked,
  setIsMoveClicked,
  word,
  index,
  setFetch,
}) => {
  const [isEllipsis, setIsEllipsis] = useState(false);
  return (
    <div className={styles.wordsListRow}>
      <WordsContentsListText
        books={books}
        setIsOpenModal={setIsOpenModal}
        selectedBookId={selectedBookId}
        isEllipsis={isEllipsis}
        setIsEllipsis={setIsEllipsis}
        word={word}
        index={index}
        setFetch={setFetch}
      />
      <Ellipsis
        books={books}
        clickBackground={clickBackground}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        selectedBookId={selectedBookId}
        isMoveClicked={isMoveClicked}
        setIsMoveClicked={setIsMoveClicked}
        isEllipsis={isEllipsis}
        setIsEllipsis={setIsEllipsis}
        word={word}
        index={index}
        setFetch={setFetch}
      />
    </div>
  );
};

export default WordsContentsList;
