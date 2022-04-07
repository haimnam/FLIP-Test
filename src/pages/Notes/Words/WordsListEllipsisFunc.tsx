import React from "react";
import styles from "../../../scss/Notes.module.scss";
import WordsListEllipsisMove from "./WordsListEllipsisMove.tsx";
import Modal from "../../../Components/Modal.tsx";
import { useAuth } from "../../../Store/AuthProvider.tsx";
import { deleteWord } from "../../../Store/UserContext.tsx";

const WordsListEllipsisFunc = ({
  books,
  isOpenModal,
  setIsOpenModal,
  selectedBookId,
  isMoveClicked,
  setIsMoveClicked,
  word,
  setFetch,
}) => {
  const { authTokens } = useAuth();
  let accessToken = authTokens.accessToken;
  const clickMove = () => {
    setIsMoveClicked(true);
    setIsOpenModal(true);
  };
  const deleteWordData = (wordId: string) => {
    deleteWord(accessToken, selectedBookId, wordId, setFetch);
  };

  return (
    <div className={styles.wordsListEllipsisBox}>
      <button className={styles.wordsListMove} onClick={() => clickMove()}>
        move
      </button>
      {isMoveClicked && isOpenModal && (
        <Modal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          action={setIsMoveClicked}
        >
          <WordsListEllipsisMove
            books={books}
            selectedBookId={selectedBookId}
            word={word}
            setFetch={setFetch}
          />
        </Modal>
      )}
      <button
        className={styles.wordsListDelete}
        onClick={() => deleteWordData(word._id)}
      >
        delete
      </button>
    </div>
  );
};

export default WordsListEllipsisFunc;
