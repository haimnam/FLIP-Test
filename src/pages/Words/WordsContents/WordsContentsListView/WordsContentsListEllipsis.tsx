import React from "react";
import styles from "../../../../scss/Words.module.scss";
import WordsContentsListMove from "./WordsContentsListMove.tsx";

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

  const deleteWord = (bookId: number, wordId: number) => {
    setBookData(
      bookData.map((book) =>
        book.id === bookId
          ? {
              ...book,
              wordData: book.wordData.filter((word) => word.id !== wordId),
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
        onClick={() => deleteWord(selectedBookId, word.id)}
      >
        delete
      </button>
    </div>
  );
};

export default WordsContentsListEllipsis;
