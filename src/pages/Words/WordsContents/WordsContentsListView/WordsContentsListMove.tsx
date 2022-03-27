import React, { useState } from "react";
import styles from "../../../../scss/Words.module.scss";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

const WordsContentsListMove = ({
  bookData,
  setBookData,
  selectedBookId,
  word,
}) => {
  const [nextWordId, setNextWordId] = useState<number>(1);

  const moveWord = (srcBookId: number, desBookId: number, wordId: number) => {
    console.log(bookData.find((book) => book.id === desBookId).wordData.length);
    console.log(bookData.find((book) => book.id === srcBookId).wordData);
    let newWord = {
      id: nextWordId,
      term: bookData
        .find((book) => book.id === srcBookId)
        .wordData.find((word) => word.id === wordId).term,
      definition: bookData
        .find((book) => book.id === srcBookId)
        .wordData.find((word) => word.id === wordId).definition,
      ellipsis: false,
    };
    setBookData(
      bookData.map((book) =>
        book.id === srcBookId || book.id === desBookId
          ? book.id === srcBookId
            ? {
                ...book,
                wordData: book.wordData.filter((word) => word.id !== wordId),
              }
            : book.id === desBookId
            ? {
                ...book,
                wordData: book.wordData.concat(newWord),
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
            key={book.id}
            onClick={(e) => moveWord(selectedBookId, book.id, word.id)}
            disabled={book.id === selectedBookId ? true : false}
          >
            <FolderOutlinedIcon /> {book.language} {book.date}
          </button>
        );
      })}
    </div>
  );
};

export default WordsContentsListMove;
