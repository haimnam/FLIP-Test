import React from "react";
import styles from "../../../scss/Notes.module.scss";
import WordsListEllipsisMove from "./WordsListEllipsisMove.tsx";
import axios from "axios";
import { useAuth } from "../../../Store/AuthProvider.tsx";
import Modal from "../../../Components/Modal.tsx";

const WordsListEllipsisFunc = ({
  books,
  clickBackground,
  isOpenModal,
  setIsOpenModal,
  selectedBookId,
  isMoveClicked,
  setIsMoveClicked,
  word,
  setFetch,
}) => {
  const clickMove = () => {
    setIsMoveClicked(true);
    setIsOpenModal(true);
  };

  const { authTokens } = useAuth();
  let accessToken = authTokens.accessToken;
  const deleteWord = async (bookId: string, wordId: string) => {
    try {
      await axios.delete(`https://test.flipnow.net/word/${bookId}/${wordId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setFetch((prev) => !prev);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.wordsListEllipsisBox}>
      <button className={styles.wordsListMove} onClick={() => clickMove()}>
        move
      </button>
      {isMoveClicked && isOpenModal && (
        <Modal
          clickBackground={clickBackground}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
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
        onClick={() => deleteWord(selectedBookId, word._id)}
      >
        delete
      </button>
    </div>
  );
};

export default WordsListEllipsisFunc;
