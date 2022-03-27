import React, { useState, useEffect } from "react";
import styles from "../../scss/Words.module.scss";
import WordsStudySets from "./WordsStudySets/WordsStudySets.tsx";
import WordsContents from "./WordsContents/WordsContents.tsx";
import axios from "axios";
import { useAuth } from "../../Store/AuthProvider.tsx";

type WordType = {
  id: number;
  term: string;
  definition: string;
  ellipsis: boolean;
};

type BookType = {
  id: number;
  language: string;
  date: string;
  wordData: WordType[];
  ellipsis: boolean;
};

const Words = () => {
  const BookData = [];
  const { authTokens } = useAuth();
  let accessToken = authTokens.accessToken;
  useEffect(() => {
    const fetchGet = async () => {
      try {
        const response = await axios.get("https://test.flipnow.net/word", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        response.data.data.map((data, index) => {
          let wordsArr = [];
          data.words.map((word) => {
            wordsArr.push({
              id: word._id,
              term: word.text,
              definition: word.meaning,
              ellipsis: false,
            });
          });
          let titleArr = data.title.split(" ");
          BookData.push({
            id: index,
            language: titleArr[0],
            date: titleArr[1],
            wordData: wordsArr,
            ellipsis: false,
          });
        });
      } catch (e) {
        console.log(e);
      }
    };
    fetchGet();
  }, []);
  const [bookData, setBookData] = useState<BookType[]>(BookData);
  const [selectedBookId, setSelectedBookId] = useState<number>(0);
  const [background, setBackground] = useState<boolean>(false);
  const [addSet, setAddSet] = useState<boolean>(false);
  const [isMoveClicked, setIsMoveClicked] = useState<boolean>(false);
  const [voca, setVoca] = useState<boolean>(false);
  const [nextBookId, setNextBookId] = useState<number>(4);

  const clickBackground = () => {
    setBookData(
      bookData.map((book) => {
        book.wordData.map((word) => (word.ellipsis = false));
        book.ellipsis = false;
        return book;
      })
    );
    setBackground(false);
    setAddSet(false);
    setIsMoveClicked(false);
  };

  return (
    <div className={styles.contents}>
      {background && (
        <div className={styles.background} onClick={clickBackground}></div>
      )}
      <WordsStudySets
        addSet={addSet}
        setAddSet={setAddSet}
        setBackground={setBackground}
        bookData={bookData}
        setBookData={setBookData}
        setVoca={setVoca}
        selectedBookId={selectedBookId}
        setSelectedBookId={setSelectedBookId}
        nextBookId={nextBookId}
        setNextBookId={setNextBookId}
      />
      <hr />
      {voca ? (
        <WordsContents
          setBackground={setBackground}
          bookData={bookData}
          setBookData={setBookData}
          selectedBookId={selectedBookId}
          isMoveClicked={isMoveClicked}
          setIsMoveClicked={setIsMoveClicked}
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
