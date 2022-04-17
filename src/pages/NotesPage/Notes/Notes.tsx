import React, { useState } from "react";
import styles from "./Notes.module.scss";
import Books from "../Books/Books/Books.tsx";
import Words from "../Words/Words/Words.tsx";
import useSWR, { Key, Fetcher } from "swr";
import { booksFetcher } from "../../../Store/UserContext.tsx";

type wordsType = {
  _id: string;
  text: string;
  meaning: string;
};
type bookType = {
  _id: string;
  memberId: string;
  title: string;
  language: string;
  words: wordsType[];
};
type fetcherType = {
  data: bookType[];
};

const Notes = () => {
  const uid: Key = "word";
  const fetcher: Fetcher<fetcherType> = (url) => booksFetcher(url);
  const { data: books, error } = useSWR(uid, fetcher);
  const [selectedBookId, setSelectedBookId] = useState<string>("0");
  const [isOpenModal, setIsOpenModal] = useState<boolean>(true);
  const [isVoca, setIsVoca] = useState<boolean>(false);

  if (error) return <div>error</div>;
  if (!books) return <div>loading...</div>;

  return (
    <div className={styles.notes}>
      <Books
        books={books}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        setIsVoca={setIsVoca}
        setSelectedBookId={setSelectedBookId}
      />
      <hr />
      {isVoca ? (
        <Words
          books={books}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          selectedBookId={selectedBookId}
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
