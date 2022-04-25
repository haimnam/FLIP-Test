import React, { useState } from "react";
import styles from "./WordsList.module.scss";
import WordsListText from "./WordsListText.tsx";
import WordsListEllipsis from "./WordsListEllipsis.tsx";

const WordsListBody = ({
  books,
  isOpenModal,
  setIsOpenModal,
  selectedBookId,
  word,
  index,
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
      />
      <WordsListEllipsis
        books={books}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        selectedBookId={selectedBookId}
        isEllipsis={isEllipsis}
        setIsEllipsis={setIsEllipsis}
        word={word}
      />
    </div>
  );
};

export default WordsListBody;
