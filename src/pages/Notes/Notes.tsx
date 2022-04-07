import React, { useState, useEffect } from "react";
import styles from "../../scss/Notes.module.scss";
import Books from "./Books/Books.tsx";
import WordsContents from "./Words/Words.tsx";
import { useAuth } from "../../Store/AuthProvider.tsx";
import {
  useUserState,
  useUserDispatch,
  getBooks,
} from "../../Store/UserContext.tsx";

const Words = () => {
  const { authTokens } = useAuth();
  const accessToken = authTokens.accessToken;
  const state = useUserState();
  const dispatch = useUserDispatch();
  const { data: books, loading, error } = state.books;
  const [fetch, setFetch] = useState(true);
  const fetchData = () => {
    getBooks(dispatch, accessToken);
  };

  useEffect(() => {
    fetchData();
  }, [fetch]);

  const [selectedBookId, setSelectedBookId] = useState<number>(0);
  const [isOpenModal, setIsOpenModal] = useState(true);
  const [addSet, setAddSet] = useState<boolean>(false);
  const [isEditLanguage, setIsEditLanguage] = useState(false);
  const [isMoveClicked, setIsMoveClicked] = useState<boolean>(false);
  const [voca, setVoca] = useState<boolean>(false);

  const clickBackground = () => {
    setIsOpenModal(false);
    setAddSet(false);
    setIsEditLanguage(false);
    setIsMoveClicked(false);
  };

  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  if (!books) return <button onClick={fetchData}>fetching</button>;

  return (
    <div className={styles.contents}>
      {<button onClick={fetchData}>fetch again</button>}
      {console.log(books)}
      <Books
        books={books}
        clickBackground={clickBackground}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        addSet={addSet}
        setAddSet={setAddSet}
        setVoca={setVoca}
        setSelectedBookId={setSelectedBookId}
        setFetch={setFetch}
      />
      <hr />
      {voca ? (
        <WordsContents
          books={books}
          clickBackground={clickBackground}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          selectedBookId={selectedBookId}
          isMoveClicked={isMoveClicked}
          setIsMoveClicked={setIsMoveClicked}
          isEditLanguage={isEditLanguage}
          setIsEditLanguage={setIsEditLanguage}
          setFetch={setFetch}
        />
      ) : (
        <div className={styles.noWords}>
          Add a new vocabulary set from 'My Study Sets'.
        </div>
      )}
    </div>
  );
};

export default Words;
