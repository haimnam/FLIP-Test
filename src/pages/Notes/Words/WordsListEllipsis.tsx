import React from "react";
import WordsListEllipsisFunc from "./WordsListEllipsisFunc.tsx";
import Modal from "../../../Components/Modal.tsx";

const WordsListEllipsis = ({
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
          <WordsListEllipsisFunc
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

export default WordsListEllipsis;
