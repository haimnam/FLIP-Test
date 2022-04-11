import React from "react";
import styles from "./WordsList.module.scss";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import { moveWord } from "../../../../Store/UserContext.tsx";

const WordsListEllipsisMove = ({ books, selectedBookId, word, setFetch }) => {
  const moveWordData = async (
    srcBookId: string,
    desBookId: string,
    wordId: string
  ) => {
    moveWord(books.data, srcBookId, desBookId, wordId, setFetch);
  };

  return (
    <div className={styles.wordsListMoveScreen}>
      <h4>Move to...</h4>
      <span>My Study Sets</span>
      {books.data.map((book) => (
        <button
          key={book._id}
          onClick={() => moveWordData(selectedBookId, book._id, word._id)}
          disabled={book._id === selectedBookId ? true : false}
        >
          <FolderOutlinedIcon /> {book.title}
        </button>
      ))}
    </div>
  );
};

export default WordsListEllipsisMove;
