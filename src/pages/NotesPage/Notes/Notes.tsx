import React, { useState, useEffect } from "react";
import styles from "./Notes.module.scss";
import Books from "../Books/Books/Books.tsx";
import Words from "../Words/Words/Words.tsx";
import {
  useUserState,
  useUserDispatch,
  getBooks,
} from "../../../Store/UserContext.tsx";

const Notes = () => {
  const state = useUserState();
  const dispatch = useUserDispatch();
  const { data: books, loading, error } = state.books;
  const [fetch, setFetch] = useState<boolean>(true);
  const fetchData = () => {
    getBooks(dispatch);
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
    <div className={styles.notes}>
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
