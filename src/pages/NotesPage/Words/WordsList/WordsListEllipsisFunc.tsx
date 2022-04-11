import React, { useState } from "react";
import styles from "./WordsList.module.scss";
import WordsListEllipsisMove from "./WordsListEllipsisMove.tsx";
import Modal from "../../../../Components/Modal.tsx";
import { deleteWord } from "../../../../Store/UserContext.tsx";

const WordsListEllipsisFunc = ({
  books,
  isOpenModal,
  setIsOpenModal,
  selectedBookId,
  word,
  setFetch,
}) => {
  const [isMoveClicked, setIsMoveClicked] = useState<boolean>(false);
  const clickMove = () => {
    setIsMoveClicked(true);
    setIsOpenModal(true);
  };
  const deleteWordData = (wordId: string) => {
    deleteWord(selectedBookId, wordId, setFetch);
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