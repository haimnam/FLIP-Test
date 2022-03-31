import React from "react";
import styles from "../../../scss/Words.module.scss";
import WordsStudySetsHead from "./WordsStudySetsHead.tsx";
import WordsStudySetsAdd from "./WordsStudySetsAdd.tsx";
import WordsStudySetsBody from "./WordsStudySetsBody.tsx";

const WordsStudySets = ({
  addSet,
  setAddSet,
  setBackground,
  bookData,
  setBookData,
  setVoca,
  selectedBookId,
  setSelectedBookId,
}) => {
  return (
    <div className={styles.studySets}>
      <WordsStudySetsHead setAddSet={setAddSet} setBackground={setBackground} />
      {addSet && (
        <WordsStudySetsAdd
          setAddSet={setAddSet}
          setBackground={setBackground}
          bookData={bookData}
          setBookData={setBookData}
        />
      )}
      <WordsStudySetsBody
        setBackground={setBackground}
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
