import React, { useState } from "react";
import styles from "../../../../scss/Words.module.scss";
import WordsContentsList from "./WordsContentsList.tsx";
import axios from "axios";
import { useAuth } from "../../../../Store/AuthProvider.tsx";

const WordsContentsListView = ({
  books,
  clickBackground,
  isOpenModal,
  setIsOpenModal,
  selectedBookId,
  isMoveClicked,
  setIsMoveClicked,
  setFetch,
}) => {
  const { authTokens } = useAuth();
  let accessToken = authTokens.accessToken;
  const addWord = async (bookId: number) => {
    try {
      await axios.post(
        `https://test.flipnow.net/word/book/${bookId}`,
        {
          wordInfo: [{ text: "", meaning: "" }],
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setFetch((prev) => !prev);
    } catch (e) {
      console.log(e);
    }
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
              <WordsContentsList
                key={word._id}
                books={books}
                clickBackground={clickBackground}
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                selectedBookId={selectedBookId}
                isMoveClicked={isMoveClicked}
                setIsMoveClicked={setIsMoveClicked}
                word={word}
                index={index}
                setFetch={setFetch}
              />
            );
          })}
      </div>
      <button
        className={styles.wordsAddBtn}
        onClick={() => addWord(selectedBookId)}
      >
        +
      </button>
    </React.Fragment>
  );
};

export default WordsContentsListView;
