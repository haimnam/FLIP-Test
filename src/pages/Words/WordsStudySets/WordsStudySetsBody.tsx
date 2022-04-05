import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../../Store/AuthProvider.tsx";
import styles from "../../../scss/Words.module.scss";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import Modal from "../../../Components/Modal.tsx";

const WordsStudySetsBody = ({
  clickBackground,
  isOpenModal,
  setIsOpenModal,
  bookData,
  setBookData,
  setVoca,
  selectedBookId,
  setSelectedBookId,
}) => {
  const { authTokens } = useAuth();
  let accessToken = authTokens.accessToken;

  const clickFolderEllipsis = (bookId: string) => {
    setBookData(
      bookData.map((book) =>
        book._id === bookId
          ? {
              ...book,
              ellipsis: true,
            }
          : book
      )
    );
    setIsOpenModal(true);
    setSelectedBookId(bookId);
  };

  const getStudySet = (bookId: string) => {
    setBookData(
      bookData.map((book) => {
        book.ellipsis = false;
        return book;
      })
    );
    setVoca(true);
    setSelectedBookId(bookId);
  };

  const editStudySet = (bookId: string, bookTitle: string) => {
    setBookData(
      bookData.map((book) =>
        book._id === bookId
          ? {
              ...book,
              title: bookTitle,
              isEdit: true,
            }
          : book
      )
    );
  };

  const [tempTitle, setTempTitle] = useState("");

  const editOnBlur = async () => {
    setBookData(
      bookData.map((book) =>
        book._id === selectedBookId
          ? {
              ...book,
              isEdit: false,
            }
          : book
      )
    );
    try {
      await axios.put(
        `https://test.flipnow.net/word/book/${selectedBookId}`,
        { title: tempTitle },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  const textOnChange = (e) => {
    setBookData(
      bookData.map((book) =>
        book._id === selectedBookId
          ? {
              ...book,
              title: e.target.value,
            }
          : book
      )
    );
    setTempTitle(e.target.value);
  };

  const deleteStudySet = async (bookId: number) => {
    try {
      await axios.delete(
        `https://test.flipnow.net/word/book/${selectedBookId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
    setBookData(bookData.filter((book) => book._id !== bookId));
    setVoca(false);
  };

  return (
    <div className={styles.studySetsBody}>
      {bookData.map((book) => {
        return (
          <div key={book._id} className={styles.studySetsList}>
            {book.isEdit ? (
              <input
                type="text"
                value={
                  bookData.find((book) => book._id === selectedBookId)?.title
                }
                onChange={textOnChange}
                onBlur={editOnBlur}
              ></input>
            ) : (
              <button
                className={styles.studySetsFolder}
                onClick={() => getStudySet(book._id)}
              >
                <div>
                  <FolderOutlinedIcon />
                </div>
                <div>{book.title}</div>
              </button>
            )}

            <button
              className={styles.studySetsEllipsis}
              onClick={() => clickFolderEllipsis(book._id)}
            >
              <div>···</div>
            </button>
            {book.ellipsis && isOpenModal && (
              <Modal
                clickBackground={clickBackground}
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
              >
                <div className={styles.studySetsEllipsisBox}>
                  <button
                    className={styles.studySetsEdit}
                    onClick={() => editStudySet(book._id, book.title)}
                  >
                    edit
                  </button>
                  <button
                    className={styles.studySetsDelete}
                    onClick={() => deleteStudySet(selectedBookId)}
                  >
                    delete
                  </button>
                </div>
              </Modal>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default WordsStudySetsBody;
