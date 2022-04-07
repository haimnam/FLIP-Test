import React, { useState } from "react";
import styles from "../../../../scss/Words.module.scss";
import WordsContentsListEllipsis from "./WordsContentsListEllipsis.tsx";
import WordsContentsListText from "./WordsContentsListText.tsx";
import Modal from "../../../../Components/Modal.tsx";

const Ellipsis = ({
  books,
  clickBackground,
  isOpenModal,
  setIsOpenModal,
  selectedBookId,
  isMoveClicked,
  setIsMoveClicked,
  isEllipsis,
  setIsEllipsis,
  word,
  index,
  setFetch,
}) => {
  return (
    <React.Fragment>
      {isEllipsis && isOpenModal && (
        <Modal
          clickBackground={clickBackground}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          setIsEllipsis={setIsEllipsis}
        >
          <WordsContentsListEllipsis
            books={books}
            clickBackground={clickBackground}
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            selectedBookId={selectedBookId}
            isMoveClicked={isMoveClicked}
            setIsMoveClicked={setIsMoveClicked}
            word={word}
            setFetch={setFetch}
          />
        </Modal>
      )}
    </React.Fragment>
  );
};

export default Ellipsis;
