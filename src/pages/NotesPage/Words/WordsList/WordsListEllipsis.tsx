import React from "react";
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
  mutate,
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
            mutate={mutate}
          />
        </Modal>
      )}
    </React.Fragment>
  );
};

export default WordsListEllipsis;
