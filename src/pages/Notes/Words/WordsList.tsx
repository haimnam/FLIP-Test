import React, { useState } from "react";
import styles from "../../../scss/Notes.module.scss";
import WordsListBody from "./WordsListBody.tsx";
import { useAuth } from "../../../Store/AuthProvider.tsx";
import { postWord } from "../../../Store/UserContext.tsx";

const WordsList = ({
  books,
  isOpenModal,
  setIsOpenModal,
  selectedBookId,
  setFetch,
}) => {
  const { authTokens } = useAuth();
  const accessToken = authTokens.accessToken;
  const addWord = () => {
    postWord(accessToken, selectedBookId, setFetch);
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
          .words.map((word, index) => {
            return (
              <WordsListBody
                key={word._id}
                books={books}
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                selectedBookId={selectedBookId}
                word={word}
                index={index}
                setFetch={setFetch}
              />
            );
          })}
      </div>
      <button className={styles.wordsAddBtn} onClick={addWord}>
        +
      </button>
    </React.Fragment>
  );
};

export default WordsList;
