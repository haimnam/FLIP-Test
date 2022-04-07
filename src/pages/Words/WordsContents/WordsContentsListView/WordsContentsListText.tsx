import React, { useState, useEffect } from "react";
import styles from "../../../../scss/Words.module.scss";
import axios from "axios";
import { useAuth } from "../../../../Store/AuthProvider.tsx";

const WordsContentsListText = ({
  books,
  setIsOpenModal,
  selectedBookId,
  isEllipsis,
  setIsEllipsis,
  word,
  index,
  setFetch,
}) => {
  const [tempText, setTempText] = useState<string>("");
  const [tempMeaning, setTempMeaning] = useState<string>("");
  const { authTokens } = useAuth();
  let accessToken = authTokens.accessToken;
  useEffect(() => {
    console.log("word =>");
    console.log(word);
    const fetchGet = async () => {
      if (tempText !== "" || tempMeaning !== "") {
        if (tempText !== "") {
          console.log("text: ", tempText, " mean: ", word.meaning);
          try {
            await axios.put(
              `https://test.flipnow.net/word/${selectedBookId}/${word._id}`,
              { wordInfo: { text: tempText, meaning: word.meaning } },
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            );
          } catch (e) {
            console.log(e);
          }
        } else if (tempMeaning !== "") {
          console.log("text: ", word.text, " mean: ", tempMeaning);
          try {
            await axios.put(
              `https://test.flipnow.net/word/${selectedBookId}/${word._id}`,
              { wordInfo: { text: word.text, meaning: tempMeaning } },
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            );
          } catch (e) {
            console.log(e);
          }
        }
        setTempText("");
        setTempMeaning("");
        setFetch((prev) => !prev);
      }
    };
    fetchGet();
  }, [tempText, tempMeaning]);

  const inputWord = async (e, bookId: number, wordId: number, unit: string) => {
    if (unit === "text") {
      console.log("TEXT INPUT SUCCESS: ", e);
      setTempText(e);
    } else {
      console.log("MEAN INPUT SUCCESS: ", e);
      setTempMeaning(e);
    }
  };

  const clickWordEllipsis = (bookId: number, wordId: number) => {
    setIsEllipsis(true);
    setIsOpenModal(true);
  };

  return (
    <React.Fragment key={index}>
      <div className={styles.wordsListId}>{index + 1}</div>
      <textarea
        className={styles.wordsListTerm}
        placeholder="Write down the words"
        onBlur={(e) =>
          inputWord(e.target.value, selectedBookId, word._id, "text")
        }
        defaultValue={word.text}
      ></textarea>
      <textarea
        className={styles.wordsListDefinition}
        placeholder="Write down the definition"
        onBlur={(e) =>
          inputWord(e.target.value, selectedBookId, word._id, "meaning")
        }
        defaultValue={word.meaning}
      ></textarea>
      <button
        className={styles.wordsListEllipsis}
        onClick={() => clickWordEllipsis(selectedBookId, word._id)}
      >
        ···
      </button>
    </React.Fragment>
  );
};

export default WordsContentsListText;
