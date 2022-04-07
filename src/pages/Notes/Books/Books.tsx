import React from "react";
import styles from "../../../scss/Notes.module.scss";
import BooksHead from "./BooksHead.tsx";
import BooksAdd from "./BooksAdd.tsx";
import BooksBody from "./BooksBody.tsx";

const Books = ({
  books,
  clickBackground,
  isOpenModal,
  setIsOpenModal,
  addSet,
  setAddSet,
  setVoca,
  setSelectedBookId,
  setFetch,
}) => {
  return (
    <div className={styles.studySets}>
      {console.log(books)}
      <BooksHead setIsOpenModal={setIsOpenModal} setAddSet={setAddSet} />
      {addSet && (
        <BooksAdd
          clickBackground={clickBackground}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          setAddSet={setAddSet}
          setFetch={setFetch}
        />
      )}
      <BooksBody
        books={books}
        clickBackground={clickBackground}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        setVoca={setVoca}
        setSelectedBookId={setSelectedBookId}
        setFetch={setFetch}
      />
    </div>
  );
};

export default Books;
