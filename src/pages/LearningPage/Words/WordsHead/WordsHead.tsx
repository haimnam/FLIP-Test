import React, { useState } from "react";
import styles from "./WordsHead.module.scss";
import Modal from "../../../../Components/Modal.tsx";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { putLanguage } from "../../../../Store/UserContext.tsx";
import { StudyFolderData } from "../../StudyFolderData.tsx";
import { useSWRConfig } from "swr";

const WordsHead = ({
  books,
  isOpenModal,
  setIsOpenModal,
  selectedBookId,
  setIsListView,
}) => {
  const { mutate } = useSWRConfig();
  const [isEditLanguage, setIsEditLanguage] = useState(false);
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

  const selectLanguage = async (language: string) => {
    await putLanguage(language, selectedBookId);
    mutate("word");
    setIsEditLanguage(false);
  };

  const [view, setView] = useState<boolean>(true);
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
      <button
        className={
          styles[
            `${
              books.data.find((book) => book._id === selectedBookId).language
            }Head`
          ]
        }
        onClick={clickLanguage}
      >
        {
          languageSet[
            books.data.find((book) => book._id === selectedBookId).language
          ]
        }
      </button>
      {isEditLanguage && isOpenModal && (
        <Modal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          action={setIsEditLanguage}
        >
          <div className={styles.wordsLanguageSelect}>
            {StudyFolderData.map((data) => (
              <button
                key={data.id}
                className={styles[data.language]}
                onClick={() => selectLanguage(data.language)}
              >
                {data.title}
              </button>
            ))}
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
