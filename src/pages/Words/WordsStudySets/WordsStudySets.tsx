import React from "react";
import styles from "../../../scss/Words.module.scss";
import WordsStudySetsHead from "./WordsStudySetsHead.tsx";
import WordsStudySetsAdd from "./WordsStudySetsAdd.tsx";
import WordsStudySetsBody from "./WordsStudySetsBody.tsx";

const WordsStudySets = ({
  clickBackground,
  isOpenModal,
  setIsOpenModal,
  addSet,
  setAddSet,
  bookData,
  setBookData,
  setVoca,
  selectedBookId,
  setSelectedBookId,
}) => {
  return (
    <div className={styles.studySets}>
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
          setBookData={setBookData}
        />
      )}
      <WordsStudySetsBody
        clickBackground={clickBackground}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        bookData={bookData}
        setBookData={setBookData}
        setVoca={setVoca}
        selectedBookId={selectedBookId}
        setSelectedBookId={setSelectedBookId}
      />
    </div>
  );
};

export default WordsStudySets;
