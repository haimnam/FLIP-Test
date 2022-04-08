import React, { useState } from "react";
import styles from "../../../scss/Notes.module.scss";
import BooksHead from "./BooksHead.tsx";
import BooksAdd from "./BooksAdd.tsx";
import BooksBody from "./BooksBody.tsx";

const Books = ({
  books,
  isOpenModal,
  setIsOpenModal,
  setVoca,
  setSelectedBookId,
  setFetch,
}) => {
  const [addSet, setAddSet] = useState<boolean>(false);

  return (
    <div className={styles.books}>
      <BooksHead setIsOpenModal={setIsOpenModal} setAddSet={setAddSet} />
      {addSet && (
        <BooksAdd
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          setAddSet={setAddSet}
          setFetch={setFetch}
        />
      )}
      <BooksBody
        books={books}
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
