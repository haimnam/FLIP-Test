import React, { useState } from "react";
import styles from "./Books.module.scss";
import Modal from "../../../../Components/Modal.tsx";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import { putBook, deleteBook } from "../../../../Store/UserContext.tsx";
import { useSWRConfig } from "swr";

const BooksList = ({
  book,
  isOpenModal,
  setIsOpenModal,
  setSelectedBookId,
  setIsVoca,
}) => {
  const { mutate } = useSWRConfig();
  const [title, setTitle] = useState<string>(book.title);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isEllipsisClicked, setIsEllipsisClicked] = useState<boolean>(false);

  const getStudySet = () => {
    setIsEllipsisClicked(false);
    setIsVoca(true);
    setSelectedBookId(book._id);
  };
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const editOnBlur = async (e) => {
    await putBook(e.target.value, book._id);
    mutate("word");
    setIsEdit(false);
  };
  const deleteStudySet = async () => {
    await deleteBook(book._id);
    mutate("word");
    setIsVoca(false);
  };
  const onClickEllipsis = () => {
    setIsEllipsisClicked(true);
    setIsOpenModal(true);
  };

  return (
    <div className={styles.booksListWrapper}>
      {isEdit ? (
        <input
          type="text"
          value={title}
          onChange={changeTitle}
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
    </div>
  );
};

export default BooksList;
