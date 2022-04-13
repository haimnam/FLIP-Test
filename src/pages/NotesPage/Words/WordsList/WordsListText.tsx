import React from "react";
import styles from "./WordsList.module.scss";
import { putWord } from "../../../../Store/UserContext.tsx";

const WordsListText = ({
  setIsOpenModal,
  selectedBookId,
  setIsEllipsis,
  word,
  index,
  mutate,
}) => {
  const inputWord = async (e, unit: string) => {
    if (unit === "text") {
      await putWord(selectedBookId, word._id, e, word.meaning);
    } else {
      await putWord(selectedBookId, word._id, word.text, e);
    }
    mutate();
  };
  const clickWordEllipsis = () => {
    setIsEllipsis(true);
    setIsOpenModal(true);
  };

  return (
    <React.Fragment key={index}>
      <div className={styles.wordsListId}>{index + 1}</div>
      <textarea
        className={styles.wordsListTerm}
        placeholder="Write down the words"
        onBlur={(e) => inputWord(e.target.value, "text")}
        defaultValue={word.text}
      ></textarea>
      <textarea
        className={styles.wordsListDefinition}
        placeholder="Write down the definition"
        onBlur={(e) => inputWord(e.target.value, "meaning")}
        defaultValue={word.meaning}
      ></textarea>
      <button className={styles.wordsListEllipsis} onClick={clickWordEllipsis}>
        ···
      </button>
    </React.Fragment>
  );
};

export default WordsListText;
