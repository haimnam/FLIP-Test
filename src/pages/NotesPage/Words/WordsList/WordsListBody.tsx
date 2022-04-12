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
  mutate,
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
        mutate={mutate}
      />
      <WordsListEllipsis
        books={books}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        selectedBookId={selectedBookId}
        isEllipsis={isEllipsis}
        setIsEllipsis={setIsEllipsis}
        word={word}
        mutate={mutate}
      />
    </div>
  );
};

export default WordsListBody;
