import React from "react";
import styles from "./Books.module.scss";
import BooksList from "./BooksList.tsx";

const BooksBody = ({
  books,
  isOpenModal,
  setIsOpenModal,
  setIsVoca,
  setSelectedBookId,
}) => {
  return (
    <div className={styles.booksBody}>
      {books.data.map((book) => (
        <div key={book._id} className={styles.booksList}>
          <BooksList
            book={book}
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            setSelectedBookId={setSelectedBookId}
            setIsVoca={setIsVoca}
          />
        </div>
      ))}
    </div>
  );
};

export default BooksBody;
