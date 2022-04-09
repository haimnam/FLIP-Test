import React from "react";
import styles from "../../../scss/Notes.module.scss";
import Modal from "../../../Components/Modal.tsx";
import dayjs from "dayjs";
import { useAuth } from "../../../Store/AuthProvider.tsx";
import { StudyFolderData } from "./StudyFolderData.tsx";
import { addBook } from "../../../Store/UserContext.tsx";

const BooksAdd = ({ isOpenModal, setIsOpenModal, setAddSet, setFetch }) => {
  const { authTokens } = useAuth();
  const accessToken = authTokens.accessToken;
  const addStudySet = (title: string, language: string) => {
    addBook(
      accessToken,
      title + " " + dayjs().format("MM/DD"),
      language,
      setFetch
    );
    setAddSet(false);
  };

  return (
    <React.Fragment>
      {isOpenModal && (
        <Modal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          action={setAddSet}
        >
          <div className={styles.booksSelect}>
            {StudyFolderData.map((data) => {
              return (
                <button
                  key={data.id}
                  className={styles[data.language]}
                  onClick={() => addStudySet(data.title, data.language)}
                >
                  {data.title}
                </button>
              );
            })}
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default BooksAdd;
