import React, { useState } from "react";
import styles from "../../../scss/Notes.module.scss";
import Modal from "../../../Components/Modal.tsx";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import { useAuth } from "../../../Store/AuthProvider.tsx";
import { putBook, deleteBook } from "../../../Store/UserContext.tsx";

const BooksList = ({
  book,
  isOpenModal,
  setIsOpenModal,
  setSelectedBookId,
  setVoca,
  setFetch,
}) => {
  const { authTokens } = useAuth();
  let accessToken = authTokens.accessToken;
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isEllipsisClicked, setIsEllipsisClicked] = useState<boolean>(false);
  const [tempTitle, setTempTitle] = useState(book.title);

  const getStudySet = () => {
    setIsEllipsisClicked(false);
    setVoca(true);
    setSelectedBookId(book._id);
  };
  const editOnBlur = () => {
    putBook(accessToken, tempTitle, book._id, setFetch);
    setIsEdit(false);
  };
  const textOnChange = (e) => {
    setTempTitle(e.target.value);
  };
  const deleteStudySet = () => {
    deleteBook(accessToken, book._id, setFetch);
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
          value={tempTitle}
          onChange={textOnChange}
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
