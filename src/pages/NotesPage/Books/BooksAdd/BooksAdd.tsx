import React from "react";
import styles from "./BooksAdd.module.scss";
import Modal from "../../../../Components/Modal.tsx";
import dayjs from "dayjs";
import { StudyFolderData } from "../../StudyFolderData.tsx";
import { addBook } from "../../../../Store/UserContext.tsx";
import { useSWRConfig } from "swr";

const BooksAdd = ({ isOpenModal, setIsOpenModal, setAddSet }) => {
  const { mutate } = useSWRConfig();
  const addStudySet = async (title: string, language: string) => {
    await addBook(title + " " + dayjs().format("MM/DD"), language);
    mutate("word");
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
