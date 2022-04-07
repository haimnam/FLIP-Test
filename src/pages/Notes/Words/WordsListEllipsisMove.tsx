import React from "react";
import styles from "../../../scss/Notes.module.scss";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import { useAuth } from "../../../Store/AuthProvider.tsx";
import { moveWord } from "../../../Store/UserContext.tsx";

const WordsListEllipsisMove = ({ books, selectedBookId, word, setFetch }) => {
  const { authTokens } = useAuth();
  let accessToken = authTokens.accessToken;
  const moveWordData = async (
    srcBookId: string,
    desBookId: string,
    wordId: string
  ) => {
    moveWord(
      accessToken,
      srcBookId,
      desBookId,
      wordId,
      books.data
        .find((book) => book._id === srcBookId)
        .words.find((word) => word._id === wordId).text,
      books.data
        .find((book) => book._id === srcBookId)
        .words.find((word) => word._id === wordId).meaning,
      setFetch
    );
  };

  return (
    <div className={styles.wordsListMoveScreen}>
      <h4>Move to...</h4>
      <span>My Study Sets</span>
      {books.data.map((book) => {
        return (
          <button
            key={book._id}
            onClick={() => moveWordData(selectedBookId, book._id, word._id)}
            disabled={book._id === selectedBookId ? true : false}
          >
            <FolderOutlinedIcon /> {book.title}
          </button>
        );
      })}
    </div>
  );
};

export default WordsListEllipsisMove;
