import React from "react";
import styles from "../../../scss/Words.module.scss";
import dayjs from "dayjs";
import { StudyFolderData } from "./StudyFolderData.tsx";

const WordsStudySetsAdd = ({
  setAddSet,
  setBackground,
  bookData,
  setBookData,
  nextBookId,
  setNextBookId,
}) => {
  const addStudySets = (language: string) => {
    setBookData(
      bookData.concat({
        id: nextBookId,
        language,
        date: dayjs().format("MM/DD"),
        wordData: [],
        ellipsis: false,
      })
    );
    setNextBookId(nextBookId + 1);
    setAddSet(false);
    setBackground(false);
  };

  return (
    <div className={styles.studySetsAdd}>
      {StudyFolderData.map((data) => {
        return (
          <button
            key={data.id}
            className={styles[data.style]}
            onClick={() => addStudySets(data.studyLanguage)}
          >
            {data.studyLanguage}
          </button>
        );
      })}
    </div>
  );
};

export default WordsStudySetsAdd;
