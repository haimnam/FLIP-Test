import React from "react";
import styles from "./WordsList.module.scss";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import { moveWord } from "../../../../Store/UserContext.tsx";
import { useSWRConfig } from "swr";

const WordsListEllipsisMove = ({ books, selectedBookId, word }) => {
  const { mutate } = useSWRConfig();
  const moveWordData = async (
    srcBookId: string,
    desBookId: string,
    wordId: string
  ) => {
    await moveWord(books.data, srcBookId, desBookId, wordId);
    mutate("word");
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
