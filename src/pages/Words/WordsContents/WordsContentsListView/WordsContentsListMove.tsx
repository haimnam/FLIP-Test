import React, { useState } from "react";
import styles from "../../../../scss/Words.module.scss";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import axios from "axios";
import { useAuth } from "../../../../Store/AuthProvider.tsx";

const WordsContentsListMove = ({
  bookData,
  setBookData,
  selectedBookId,
  word,
}) => {
  const [nextWordId, setNextWordId] = useState<number>(1);
  const { authTokens } = useAuth();
  let accessToken = authTokens.accessToken;

  const moveWord = async (
    srcBookId: number,
    desBookId: number,
    wordId: number
  ) => {
    try {
      await axios.post(
        `https://test.flipnow.net/word/book/${desBookId}`,
        {
          wordInfo: [
            {
              text: bookData
                .find((book) => book._id === srcBookId)
                .words.find((word) => word._id === wordId).text,
              meaning: bookData
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
    } catch (e) {
      console.log(e);
    }
    try {
      const response = await axios.get(
        `https://test.flipnow.net/word/book/${desBookId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("-------------");
      console.log(response.data);
      console.log("------------");
    } catch (e) {
      console.log(e);
    }

    let newWord = {
      _id: nextWordId,
      text: bookData
        .find((book) => book._id === srcBookId)
        .words.find((word) => word._id === wordId).text,
      meaning: bookData
        .find((book) => book._id === srcBookId)
        .words.find((word) => word._id === wordId).meaning,
      ellipsis: false,
    };
    setBookData(
      bookData.map((book) =>
        book._id === srcBookId || book._id === desBookId
          ? book._id === srcBookId
            ? {
                ...book,
                words: book.words.filter((word) => word._id !== wordId),
              }
            : book._id === desBookId
            ? {
                ...book,
                words: book.words.concat(newWord),
              }
            : book
          : book
      )
    );
    setNextWordId(nextWordId + 1);
  };

  return (
    <div className={styles.wordsListMoveScreen}>
      <h4>Move to...</h4>
      <span>My Study Sets</span>
      {bookData.map((book) => {
        return (
          <button
            key={book._id}
            onClick={(e) => moveWord(selectedBookId, book._id, word._id)}
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
