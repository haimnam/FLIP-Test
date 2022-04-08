import React, { useState, useEffect } from "react";
import styles from "../../scss/Notes.module.scss";
import Books from "./Books/Books.tsx";
import Words from "./Words/Words.tsx";
import { useAuth } from "../../Store/AuthProvider.tsx";
import {
  useUserState,
  useUserDispatch,
  getBooks,
} from "../../Store/UserContext.tsx";

const Notes = () => {
  const { authTokens } = useAuth();
  const accessToken = authTokens.accessToken;
  const state = useUserState();
  const dispatch = useUserDispatch();
  const { data: books, loading, error } = state.books;
  const [fetch, setFetch] = useState<boolean>(true);
  const fetchData = () => {
    getBooks(dispatch, accessToken);
  };
  useEffect(() => {
    fetchData();
  }, [fetch]);

  const [selectedBookId, setSelectedBookId] = useState<string>("0");
  const [isOpenModal, setIsOpenModal] = useState<boolean>(true);
  const [voca, setVoca] = useState<boolean>(false);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  if (!books) return <button onClick={fetchData}>fetching</button>;

  return (
    <div className={styles.contents}>
      <Books
        books={books}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        setVoca={setVoca}
        setSelectedBookId={setSelectedBookId}
        setFetch={setFetch}
      />
      <hr />
      {voca ? (
        <Words
          books={books}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          selectedBookId={selectedBookId}
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

export default Notes;
