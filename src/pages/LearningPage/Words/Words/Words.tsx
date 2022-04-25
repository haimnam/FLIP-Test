import React, { useState } from "react";
import styles from "./Words.module.scss";
import WordsHead from "../WordsHead/WordsHead.tsx";
import WordsList from "../WordsList/WordsList.tsx";
import WordsCard from "../WordsCard/WordsCard.tsx";

const Words = ({ books, isOpenModal, setIsOpenModal, selectedBookId }) => {
  const [isListView, setIsListView] = useState<boolean>(true);

  return (
    <div className={styles.words}>
      <WordsHead
        books={books}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        selectedBookId={selectedBookId}
        setIsListView={setIsListView}
      />
      {isListView ? (
        <WordsList
          books={books}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          selectedBookId={selectedBookId}
        />
      ) : (
        <WordsCard books={books} selectedBookId={selectedBookId} />
      )}
    </div>
  );
};

export default Words;
