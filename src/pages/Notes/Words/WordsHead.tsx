import React, { useState } from "react";
import styles from "../../../scss/Notes.module.scss";
import axios from "axios";
import { useAuth } from "../../../Store/AuthProvider.tsx";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { StudyFolderData } from "../Books/StudyFolderData.tsx";
import Modal from "../../../Components/Modal.tsx";

const WordsHead = ({
  books,
  clickBackground,
  isOpenModal,
  setIsOpenModal,
  selectedBookId,
  setIsListView,
  isEditLanguage,
  setIsEditLanguage,
  setFetch,
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
    setIsOpenModal(true);
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
      setFetch((prev) => !prev);
      setIsEditLanguage(false);
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
          {books.data.find((book) => book._id === selectedBookId).title}
        </div>
      </div>
      <button className={styles.wordsTitleLanguage} onClick={clickLanguage}>
        {
          languageSet[
            books.data.find((book) => book._id === selectedBookId).language
          ]
        }
      </button>
      {isEditLanguage && isOpenModal && (
        <Modal
          clickBackground={clickBackground}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        >
          <div className={styles.languageSelect}>
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
        </Modal>
      )}
      <button className={styles.wordsChangeView} onClick={changeView}>
        <CompareArrowsIcon />
        {view ? " Card View" : " List View"}
      </button>
    </div>
  );
};

export default WordsHead;
