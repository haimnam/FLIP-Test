import React from "react";
import styles from "../../../../scss/Words.module.scss";
import WordsContentsListEllipsis from "./WordsContentsListEllipsis.tsx";
import WordsContentsListText from "./WordsContentsListText.tsx";
import Modal from "../../../../Components/Modal.tsx";

const WordsContentsList = ({
  clickBackground,
  isOpenModal,
  setIsOpenModal,
  bookData,
  setBookData,
  selectedBookId,
  isMoveClicked,
  setIsMoveClicked,
  word,
  index,
}) => {
  return (
    <div className={styles.wordsListRow}>
      <WordsContentsListText
        setIsOpenModal={setIsOpenModal}
        bookData={bookData}
        setBookData={setBookData}
        selectedBookId={selectedBookId}
        word={word}
        index={index}
      />
      {word.ellipsis && isOpenModal && (
        <Modal
          clickBackground={clickBackground}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        >
          <WordsContentsListEllipsis
            clickBackground={clickBackground}
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            bookData={bookData}
            setBookData={setBookData}
            selectedBookId={selectedBookId}
            isMoveClicked={isMoveClicked}
            setIsMoveClicked={setIsMoveClicked}
            word={word}
          />
        </Modal>
      )}
    </div>
  );
};

export default WordsContentsList;
