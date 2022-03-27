import React from "react";
import styles from "../../../scss/Words.module.scss";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

const WordsStudySetsBody = ({
  setBackground,
  bookData,
  setBookData,
  setVoca,
  selectedBookId,
  setSelectedBookId,
}) => {
  const clickFolderEllipsis = (bookId: number) => {
    setBookData(
      bookData.map((book) =>
        book.id === bookId
          ? {
              ...book,
              ellipsis: true,
            }
          : book
      )
    );
    setBackground(true);
    setSelectedBookId(bookId);
  };

  const editStudySet = (bookId: number) => {
    setBookData(
      bookData.map((book) => {
        book.ellipsis = false;
        return book;
      })
    );
    setVoca(true);
    setBackground(false);
    setSelectedBookId(bookId);
  };

  const deleteStudySet = (bookId: number) => {
    setBookData(bookData.filter((book) => book.id !== bookId));
    setBackground(false);
    setVoca(false);
  };

  return (
    <div className={styles.studySetsBody}>
      {bookData.map((book) => {
        return (
          <div key={book.id} className={styles.studySetsList}>
            <button
              className={styles.studySetsFolder}
              onClick={() => editStudySet(book.id)}
            >
              <div>
                <FolderOutlinedIcon />
              </div>
              <div>{book.language}</div>
              <div>{book.date}</div>
            </button>
            <button
              className={styles.studySetsEllipsis}
              onClick={() => clickFolderEllipsis(book.id)}
            >
              <div>···</div>
            </button>
            {book.ellipsis && (
              <div className={styles.studySetsEllipsisBox}>
                <button
                  className={styles.studySetsEdit}
                  onClick={() => editStudySet(book.id)}
                >
                  edit
                </button>
                <button
                  className={styles.studySetsDelete}
                  onClick={() => deleteStudySet(selectedBookId)}
                >
                  delete
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default WordsStudySetsBody;
