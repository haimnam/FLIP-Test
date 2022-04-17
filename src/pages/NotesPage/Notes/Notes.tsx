import React, { useState } from "react";
import styles from "./Notes.module.scss";
import Books from "../Books/Books/Books.tsx";
import Words from "../Words/Words/Words.tsx";
import useSWR from "swr";
import { booksFetcher } from "../../../Store/UserContext.tsx";

const Notes = () => {
  const { data: books, error, mutate } = useSWR("word", booksFetcher);
  const [selectedBookId, setSelectedBookId] = useState<string>("0");
  const [isOpenModal, setIsOpenModal] = useState<boolean>(true);
  const [voca, setVoca] = useState<boolean>(false);

  if (error) return <div>error</div>;
  if (!books) return <div>loading...</div>;

  return (
    <div className={styles.notes}>
      <Books
        books={books}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        setVoca={setVoca}
        setSelectedBookId={setSelectedBookId}
        mutate={mutate}
      />
      <hr />
      {voca ? (
        <Words
          books={books}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          selectedBookId={selectedBookId}
          mutate={mutate}
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
