import React, { useState, useEffect } from "react";
import styles from "./WordsList.module.scss";
import { putWord } from "../../../../Store/UserContext.tsx";

const WordsListText = ({
  setIsOpenModal,
  selectedBookId,
  setIsEllipsis,
  word,
  index,
  setFetch,
}) => {
  const [tempText, setTempText] = useState<string>("");
  const [tempMeaning, setTempMeaning] = useState<string>("");
  useEffect(() => {
    const fetchGet = async () => {
      if (tempText !== "") {
        putWord(selectedBookId, word._id, tempText, word.meaning, setFetch);
      } else if (tempMeaning !== "") {
        putWord(selectedBookId, word._id, word.text, tempMeaning, setFetch);
      }
      setTempText("");
      setTempMeaning("");
    };
    if (tempText !== "" || tempMeaning !== "") {
      fetchGet();
    }
  }, [tempText, tempMeaning]);
  const inputWord = async (e, unit: string) => {
    if (unit === "text") {
      setTempText(e);
    } else {
      setTempMeaning(e);
    }
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
