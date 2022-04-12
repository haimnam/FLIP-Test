import React from "react";
import styles from "./WordsList.module.scss";
import WordsListBody from "./WordsListBody.tsx";
import { postWord } from "../../../../Store/UserContext.tsx";

const WordsList = ({
  books,
  isOpenModal,
  setIsOpenModal,
  selectedBookId,
  mutate,
}) => {
  const addWord = async () => {
    await postWord(selectedBookId);
    mutate();
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
        {books.data
          .find((book) => book._id === selectedBookId)
          .words.map((word, index) => (
            <WordsListBody
              key={word._id}
              books={books}
              isOpenModal={isOpenModal}
              setIsOpenModal={setIsOpenModal}
              selectedBookId={selectedBookId}
              word={word}
              index={index}
              mutate={mutate}
            />
          ))}
      </div>
      <button className={styles.wordsAddBtn} onClick={addWord}>
        +
      </button>
    </React.Fragment>
  );
};

export default WordsList;
