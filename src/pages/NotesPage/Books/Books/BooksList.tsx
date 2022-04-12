import React, { useState } from "react";
import styles from "./Books.module.scss";
import Modal from "../../../../Components/Modal.tsx";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import { putBook, deleteBook } from "../../../../Store/UserContext.tsx";

const BooksList = ({
  book,
  isOpenModal,
  setIsOpenModal,
  setSelectedBookId,
  setVoca,
  mutate,
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isEllipsisClicked, setIsEllipsisClicked] = useState<boolean>(false);

  const getStudySet = () => {
    setIsEllipsisClicked(false);
    setVoca(true);
    setSelectedBookId(book._id);
  };
  const editOnBlur = async (e) => {
    await putBook(e.target.value, book._id);
    mutate();
    setIsEdit(false);
  };
  const deleteStudySet = async () => {
    await deleteBook(book._id);
    mutate();
    setVoca(false);
  };
  const onClickEllipsis = () => {
    setIsEllipsisClicked(true);
    setIsOpenModal(true);
  };

  return (
    <React.Fragment>
      {isEdit ? (
        <input
          type="text"
          defaultValue={book.title}
          onBlur={editOnBlur}
        ></input>
      ) : (
        <button className={styles.booksFolder} onClick={getStudySet}>
          <div>
            <FolderOutlinedIcon />
          </div>
          <div>{book.title}</div>
        </button>
      )}
      <button
        key={book._id}
        className={styles.booksEllipsis}
        onClick={onClickEllipsis}
      >
        <div>···</div>
      </button>
      {isEllipsisClicked && isOpenModal && (
        <Modal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          action={setIsEllipsisClicked}
        >
          <div className={styles.booksEllipsisBox}>
            <button
              className={styles.booksEdit}
              onClick={() => setIsEdit(true)}
            >
              edit
            </button>
            <button className={styles.booksDelete} onClick={deleteStudySet}>
              delete
            </button>
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default BooksList;
