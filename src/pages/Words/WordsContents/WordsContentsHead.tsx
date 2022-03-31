import React, { useState } from "react";
import styles from "../../../scss/Words.module.scss";
import axios from "axios";
import { useAuth } from "../../../Store/AuthProvider.tsx";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { StudyFolderData } from "../WordsStudySets/StudyFolderData.tsx";

const WordsContentsHead = ({
  setBackground,
  bookData,
  setBookData,
  selectedBookId,
  setIsListView,
  isEditLanguage,
  setIsEditLanguage,
}) => {
  const { authTokens } = useAuth();
  let accessToken = authTokens.accessToken;
  const languageSet = {
    ko: "Korean",
    en: "English",
    zh: "Chinese",
    de: "German",
  };

  const clickLanguage = () => {
    setIsEditLanguage(true);
    setBackground(true);
  };

  const selectLanguage = async (title: string, language: string) => {
    try {
      await axios.put(
        `https://test.flipnow.net/word/language/${selectedBookId}`,
        { language },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setBookData(
        bookData.map((book) =>
          book._id === selectedBookId
            ? {
                ...book,
                language,
              }
            : book
        )
      );
    } catch (e) {
      console.log(e);
    }
  };

  const [view, setView] = useState(true);
  const changeView = () => {
    setIsListView((prev) => !prev);
    setView((prev) => !prev);
  };

  return (
    <div className={styles.wordsHead}>
      <div className={styles.wordsTitle}>
        <div className={styles.wordsTitleName}>
          {bookData.find((book) => book._id === selectedBookId)?.title}
        </div>
      </div>
      <button className={styles.wordsTitleLanguage} onClick={clickLanguage}>
        {
          languageSet[
            bookData.find((book) => book._id === selectedBookId).language
          ]
        }
      </button>
      {isEditLanguage ? (
        <div className={styles.studySetsSelect}>
          {StudyFolderData.map((data) => {
            return (
              <button
                key={data.id}
                className={styles[data.language]}
                onClick={() => selectLanguage(data.title, data.language)}
              >
                {data.title}
              </button>
            );
          })}
        </div>
      ) : null}
      <button className={styles.wordsChangeView} onClick={changeView}>
        <CompareArrowsIcon />
        {view ? " Card View" : " List View"}
      </button>
    </div>
  );
};

export default WordsContentsHead;
