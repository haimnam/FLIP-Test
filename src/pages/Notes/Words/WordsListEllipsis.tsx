import React from "react";
import WordsListEllipsisFunc from "./WordsListEllipsisFunc.tsx";
import Modal from "../../../Components/Modal.tsx";

const WordsListEllipsis = ({
  books,
  isOpenModal,
  setIsOpenModal,
  selectedBookId,
  isEllipsis,
  setIsEllipsis,
  word,
  setFetch,
}) => {
  return (
    <React.Fragment>
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
            setFetch={setFetch}
          />
        </Modal>
      )}
    </React.Fragment>
  );
};

export default WordsListEllipsis;
