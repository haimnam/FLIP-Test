import React from "react";
import axios from "axios";
import { useAuth } from "../../../Store/AuthProvider.tsx";
import styles from "../../../scss/Notes.module.scss";
import dayjs from "dayjs";
import { StudyFolderData } from "./StudyFolderData.tsx";
import Modal from "../../../Components/Modal.tsx";

const BooksAdd = ({
  clickBackground,
  isOpenModal,
  setIsOpenModal,
  setAddSet,
  setFetch,
}) => {
  const { authTokens } = useAuth();
  let accessToken = authTokens.accessToken;

  const addStudySets = async (title: string, language: string) => {
    try {
      await axios.post(
        "https://test.flipnow.net/word",
        { title: title + " " + dayjs().format("MM/DD"), language },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
    try {
      await axios.get("https://test.flipnow.net/word", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setFetch((prev) => !prev);
    } catch (e) {
      console.log(e);
    }
    setAddSet(false);
  };

  return (
    <React.Fragment>
      {isOpenModal && (
        <Modal
          clickBackground={clickBackground}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        >
          <div className={styles.studySetsSelect}>
            {StudyFolderData.map((data) => {
              return (
                <button
                  key={data.id}
                  className={styles[data.language]}
                  onClick={() => addStudySets(data.title, data.language)}
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
