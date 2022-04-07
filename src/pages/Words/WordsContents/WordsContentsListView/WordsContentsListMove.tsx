import React, { useState } from "react";
import styles from "../../../../scss/Words.module.scss";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import axios from "axios";
import { useAuth } from "../../../../Store/AuthProvider.tsx";

const WordsContentsListMove = ({ books, selectedBookId, word, setFetch }) => {
  const { authTokens } = useAuth();
  let accessToken = authTokens.accessToken;

  const moveWord = async (
    srcBookId: string,
    desBookId: string,
    wordId: string
  ) => {
    try {
      await axios.post(
        `https://test.flipnow.net/word/book/${desBookId}`,
        {
          wordInfo: [
            {
              text: books.data
                .find((book) => book._id === srcBookId)
                .words.find((word) => word._id === wordId).text,
              meaning: books.data
                .find((book) => book._id === srcBookId)
                .words.find((word) => word._id === wordId).meaning,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
    try {
      await axios.delete(
        `https://test.flipnow.net/word/${srcBookId}/${wordId}`,
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
    <div className={styles.wordsListMoveScreen}>
      <h4>Move to...</h4>
      <span>My Study Sets</span>
      {books.data.map((book) => {
        return (
          <button
            key={book._id}
            onClick={() => moveWord(selectedBookId, book._id, word._id)}
            disabled={book._id === selectedBookId ? true : false}
          >
            <FolderOutlinedIcon /> {book.title}
          </button>
        );
      })}
    </div>
  );
};

export default WordsContentsListMove;
