import React from "react";
import styles from "./WordsList.module.scss";
import WordsListBody from "./WordsListBody.tsx";
import { postWord } from "../../../../Store/UserContext.tsx";
import { useSWRConfig } from "swr";

const WordsList = ({ books, isOpenModal, setIsOpenModal, selectedBookId }) => {
  const { mutate } = useSWRConfig();
  const addWord = async () => {
    await postWord(selectedBookId);
    mutate("word");
  };

  return (
    <div className={styles.wordsListWrapper}>
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
            />
          ))}
      </div>
      <button className={styles.wordsAddBtn} onClick={addWord}>
        +
      </button>
    </div>
  );
};

export default WordsList;
