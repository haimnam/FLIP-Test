import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../../Store/AuthProvider.tsx";
import styles from "../../../scss/Words.module.scss";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import Modal from "../../../Components/Modal.tsx";

const Ellipsis = ({
  book,
  clickBackground,
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

  const getStudySet = () => {
    setIsEllipsisClicked(false);
    setVoca(true);
    setSelectedBookId(book._id);
  };

  const [tempTitle, setTempTitle] = useState(book.title);
  const editOnBlur = async () => {
    setIsEdit(false);
    try {
      console.log("try start");
      await axios.put(
        `https://test.flipnow.net/word/book/${book._id}`,
        { title: tempTitle },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("try finish");
      setFetch((prev) => !prev);
    } catch (e) {
      console.log(e);
    }
  };
  const textOnChange = (e) => {
    setTempTitle(e.target.value);
    console.log(e.target.value);
  };

  /*const editStudySet = () => {
    setIsEdit(true);
  };*/

  const deleteStudySet = async () => {
    try {
      await axios.delete(`https://test.flipnow.net/word/book/${book._id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setFetch((prev) => !prev);
    } catch (e) {
      console.log(e);
    }
    setVoca(false);
  };

  const onClickEllipsis = () => {
    setIsEllipsisClicked(true);
    setIsOpenModal(true);
    console.log(isEllipsisClicked);
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
        <button className={styles.studySetsFolder} onClick={getStudySet}>
          <div>
            <FolderOutlinedIcon />
          </div>
          <div>{book.title}</div>
        </button>
      )}
      <button
        key={book._id}
        className={styles.studySetsEllipsis}
        onClick={onClickEllipsis}
      >
        <div>···</div>
      </button>
      {console.log(isEllipsisClicked + " " + isOpenModal)}
      {isEllipsisClicked && isOpenModal && (
        <Modal
          clickBackground={clickBackground}
          setIsEllipsisClicked={setIsEllipsisClicked}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        >
          <div className={styles.studySetsEllipsisBox}>
            <button
              className={styles.studySetsEdit}
              onClick={() => setIsEdit(true)}
            >
              edit
            </button>
            <button className={styles.studySetsDelete} onClick={deleteStudySet}>
              delete
            </button>
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default Ellipsis;
