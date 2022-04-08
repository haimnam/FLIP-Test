import React, { useState } from "react";
import styles from "../../../scss/Notes.module.scss";
import WordsHead from "./WordsHead.tsx";
import WordsList from "./WordsList.tsx";
import WordsCard from "./WordsCard.tsx";

const Words = ({
  books,
  isOpenModal,
  setIsOpenModal,
  selectedBookId,
  setFetch,
}) => {
  const [isListView, setIsListView] = useState<boolean>(true);

  return (
    <div className={styles.words}>
      <WordsHead
        books={books}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        selectedBookId={selectedBookId}
        setIsListView={setIsListView}
        setFetch={setFetch}
      />
      {isListView ? (
        <WordsList
          books={books}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          selectedBookId={selectedBookId}
          setFetch={setFetch}
        />
      ) : (
        <WordsCard books={books} selectedBookId={selectedBookId} />
      )}
    </div>
  );
};

export default Words;
