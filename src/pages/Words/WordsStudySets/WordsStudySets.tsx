import React from "react";
import styles from "../../../scss/Words.module.scss";
import WordsStudySetsHead from "./WordsStudySetsHead.tsx";
import WordsStudySetsAdd from "./WordsStudySetsAdd.tsx";
import WordsStudySetsBody from "./WordsStudySetsBody.tsx";

const WordsStudySets = ({
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
      <WordsStudySetsHead
        setIsOpenModal={setIsOpenModal}
        setAddSet={setAddSet}
      />
      {addSet && (
        <WordsStudySetsAdd
          clickBackground={clickBackground}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          setAddSet={setAddSet}
          setFetch={setFetch}
        />
      )}
      <WordsStudySetsBody
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

export default WordsStudySets;
