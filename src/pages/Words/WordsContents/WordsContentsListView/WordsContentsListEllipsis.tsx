import React from "react";
import styles from "../../../../scss/Words.module.scss";
import WordsContentsListMove from "./WordsContentsListMove.tsx";
import axios from "axios";
import { useAuth } from "../../../../Store/AuthProvider.tsx";

const WordsContentsListEllipsis = ({
  setBackground,
  bookData,
  setBookData,
  selectedBookId,
  isMoveClicked,
  setIsMoveClicked,
  word,
}) => {
  const clickMove = () => {
    setIsMoveClicked(true);
  };

  const { authTokens } = useAuth();
  let accessToken = authTokens.accessToken;
  const deleteWord = async (bookId: string, wordId: string) => {
    try {
      await axios.delete(`https://test.flipnow.net/word/${bookId}/${wordId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (e) {
      console.log(e);
    }
    setBookData(
      bookData.map((book) =>
        book._id === bookId
          ? {
              ...book,
              words: book.words.filter((word) => word._id !== wordId),
            }
          : book
      )
    );
    setBackground(false);
  };

  return (
    <div className={styles.wordsListEllipsisBox}>
      <button className={styles.wordsListMove} onClick={() => clickMove()}>
        move
      </button>
      {isMoveClicked && (
        <WordsContentsListMove
          bookData={bookData}
          setBookData={setBookData}
          selectedBookId={selectedBookId}
          word={word}
        />
      )}
      <button
        className={styles.wordsListDelete}
        onClick={() => deleteWord(selectedBookId, word._id)}
      >
        delete
      </button>
    </div>
  );
};

export default WordsContentsListEllipsis;
