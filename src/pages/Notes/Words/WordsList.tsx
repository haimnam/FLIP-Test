import React from "react";
import styles from "../../../scss/Notes.module.scss";
import WordsListBody from "./WordsListBody.tsx";
import axios from "axios";
import { useAuth } from "../../../Store/AuthProvider.tsx";

const WordsList = ({
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
              <WordsListBody
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

export default WordsList;
