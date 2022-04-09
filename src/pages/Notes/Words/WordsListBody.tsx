import React, { useState } from "react";
import styles from "../../../scss/Notes.module.scss";
import WordsListText from "./WordsListText.tsx";
import WordsListEllipsis from "./WordsListEllipsis.tsx";

const WordsListBody = ({
  books,
  isOpenModal,
  setIsOpenModal,
  selectedBookId,
  word,
  index,
  setFetch,
}) => {
  const [isEllipsis, setIsEllipsis] = useState<boolean>(false);
  return (
    <div className={styles.wordsListRow}>
      <WordsListText
        setIsOpenModal={setIsOpenModal}
        selectedBookId={selectedBookId}
        setIsEllipsis={setIsEllipsis}
        word={word}
        index={index}
        setFetch={setFetch}
      />
      <WordsListEllipsis
        books={books}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        selectedBookId={selectedBookId}
        isEllipsis={isEllipsis}
        setIsEllipsis={setIsEllipsis}
        word={word}
        setFetch={setFetch}
      />
    </div>
  );
};

export default WordsListBody;
