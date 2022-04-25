import React from "react";
import styles from "./WordsList.module.scss";
import WordsListEllipsisFunc from "./WordsListEllipsisFunc.tsx";
import Modal from "../../../../Components/Modal.tsx";

const WordsListEllipsis = ({
  books,
  isOpenModal,
  setIsOpenModal,
  selectedBookId,
  isEllipsis,
  setIsEllipsis,
  word,
}) => {
  return (
    <div className={styles.wordsListEllipsisWrapper}>
      {isEllipsis && isOpenModal && (
        <Modal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          action={setIsEllipsis}
        >
          <WordsListEllipsisFunc
            books={books}
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            selectedBookId={selectedBookId}
            word={word}
          />
        </Modal>
      )}
    </div>
  );
};

export default WordsListEllipsis;
