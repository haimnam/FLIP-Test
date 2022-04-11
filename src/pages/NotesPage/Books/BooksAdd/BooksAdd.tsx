import React from "react";
import styles from "./BooksAdd.module.scss";
import Modal from "../../../../Components/Modal.tsx";
import dayjs from "dayjs";
import { StudyFolderData } from "../../StudyFolderData.tsx";
import { addBook } from "../../../../Store/UserContext.tsx";

const BooksAdd = ({ isOpenModal, setIsOpenModal, setAddSet, setFetch }) => {
  const addStudySet = (title: string, language: string) => {
    addBook(title + " " + dayjs().format("MM/DD"), language, setFetch);
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
            {StudyFolderData.map((data) => (
              <button
                key={data.id}
                className={styles[data.language]}
                onClick={() => addStudySet(data.title, data.language)}
              >
                {data.title}
              </button>
            ))}
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default BooksAdd;