import React, { useState } from "react";
import styles from "./Books.module.scss";
import BooksHead from "./BooksHead.tsx";
import BooksAdd from "../BooksAdd/BooksAdd.tsx";
import BooksBody from "./BooksBody.tsx";

const Books = ({
  books,
  isOpenModal,
  setIsOpenModal,
  setVoca,
  setSelectedBookId,
  mutate,
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
          mutate={mutate}
        />
      )}
      <BooksBody
        books={books}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        setVoca={setVoca}
        setSelectedBookId={setSelectedBookId}
        mutate={mutate}
      />
    </div>
  );
};

export default Books;
