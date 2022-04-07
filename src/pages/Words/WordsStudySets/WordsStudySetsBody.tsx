import React from "react";
import styles from "../../../scss/Words.module.scss";
import Ellipsis from "./Ellipsis.tsx";

const WordsStudySetsBody = ({
  books,
  clickBackground,
  isOpenModal,
  setIsOpenModal,
  setVoca,
  setSelectedBookId,
  setFetch,
}) => {
  return (
    <div className={styles.studySetsBody}>
      {books.data.map((book) => {
        return (
          <div key={book._id} className={styles.studySetsList}>
            <Ellipsis
              book={book}
              clickBackground={clickBackground}
              isOpenModal={isOpenModal}
              setIsOpenModal={setIsOpenModal}
              setSelectedBookId={setSelectedBookId}
              setVoca={setVoca}
              setFetch={setFetch}
            />
          </div>
        );
      })}
    </div>
  );
};

export default WordsStudySetsBody;
