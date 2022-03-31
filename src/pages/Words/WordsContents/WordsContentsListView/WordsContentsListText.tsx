import React, { useState, useEffect } from "react";
import styles from "../../../../scss/Words.module.scss";
import axios from "axios";
import { useAuth } from "../../../../Store/AuthProvider.tsx";

type BookArrType = {
  text: string;
  meaning: string;
};

const WordsContentsList = ({
  setBackground,
  bookData,
  setBookData,
  selectedBookId,
  word,
  index,
}) => {
  const [tempText, setTempText] = useState("");
  const [tempMeaning, setTempMeaning] = useState("");
  const { authTokens } = useAuth();
  let accessToken = authTokens.accessToken;
  useEffect(() => {
    const bookArr: BookArrType[] = [];
    bookArr.push({ text: tempText, meaning: tempMeaning });
    const fetchGet = async () => {
      if (tempText != "" && tempMeaning != "") {
        if (isEditText.bool || isEditMeaning.bool) {
          try {
            await axios.put(
              `https://test.flipnow.net/word/${selectedBookId}/${word._id}`,
              { text: tempText, meaning: tempMeaning },
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            );
            setIsEditText({ bool: false, id: isEditText.id });
            setIsEditMeaning({ bool: false, id: isEditMeaning.id });
          } catch (e) {
            console.log(e);
          }
        } else {
          try {
            await axios.post(
              `https://test.flipnow.net/word/book/${selectedBookId}`,
              { wordInfo: [{ text: tempText, meaning: tempMeaning }] },
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
      }
      setTempText("");
      setTempMeaning("");
    };
    fetchGet();
  }, [tempText && tempMeaning]);

  const inputWord = async (e, bookId: number, wordId: number, unit: string) => {
    if (unit === "text") {
      setBookData(
        bookData.map((book) =>
          book._id === bookId
            ? {
                ...book,
                words: book.words.map((word) =>
                  word._id === wordId
                    ? {
                        ...word,
                        text: e,
                      }
                    : word
                ),
              }
            : book
        )
      );
      setTempText(e);
    } else {
      setBookData(
        bookData.map((book) =>
          book._id === bookId
            ? {
                ...book,
                words: book.words.map((word) =>
                  word._id === wordId
                    ? {
                        ...word,
                        meaning: e,
                      }
                    : word
                ),
              }
            : book
        )
      );
      setTempMeaning(e);
    }
  };

  const [isEditText, setIsEditText] = useState({ bool: false, id: "0" });
  const [isEditMeaning, setIsEditMeaning] = useState({ bool: false, id: "0" });
  const editWord = async (e, wordId: string, unit: string) => {
    if (e !== "") {
      if (unit === "text") {
        setIsEditText({ bool: true, id: wordId });
      } else {
        setIsEditMeaning({ bool: true, id: wordId });
      }
    }
  };

  const clickWordEllipsis = (bookId: number, wordId: number) => {
    setBookData(
      bookData.map((book) =>
        book._id === bookId
          ? {
              ...book,
              words: book.words.map((word) =>
                word._id === wordId
                  ? {
                      ...word,
                      ellipsis: true,
                    }
                  : word
              ),
            }
          : book
      )
    );
    setBackground(true);
  };

  return (
    <React.Fragment key={index}>
      <div className={styles.wordsListId}>{index + 1}</div>
      <textarea
        className={styles.wordsListTerm}
        placeholder="Write down the words"
        onFocus={(e) => editWord(e.target.value, word._id, "text")}
        onBlur={(e) =>
          inputWord(e.target.value, selectedBookId, word._id, "text")
        }
        defaultValue={word.text}
      ></textarea>
      <textarea
        className={styles.wordsListDefinition}
        placeholder="Write down the definition"
        onFocus={(e) => editWord(e.target.value, word._id, "meaning")}
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

export default WordsContentsList;
