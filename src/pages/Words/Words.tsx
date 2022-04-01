import React, { useState, useEffect } from "react";
import styles from "../../scss/Words.module.scss";
import WordsStudySets from "./WordsStudySets/WordsStudySets.tsx";
import WordsContents from "./WordsContents/WordsContents.tsx";
import axios from "axios";
import { useAuth } from "../../Store/AuthProvider.tsx";

type WordType = {
  _id: string;
  text: string;
  meaning: string;
  ellipsis: boolean;
};
type BookType = {
  memberId: string;
  _id: string;
  title: string;
  language: string;
  words: WordType[];
  ellipsis: boolean;
  isEdit: boolean;
};

const Words = () => {
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
        let bookArr = [];
        response.data.data.map((data) => {
          let wordsArr = [];
          data.words.map((word) => {
            wordsArr.push({
              _id: word._id,
              text: word.text,
              meaning: word.meaning,
              ellipsis: false,
            });
          });
          bookArr.push({
            memberId: data.memberId,
            _id: data._id,
            title: data.title,
            language: data.language,
            words: data.words,
            ellipsis: false,
            isEdit: false,
          });
        });
        setBookData(bookArr);
      } catch (e) {
        console.log(e);
      }
    };
    fetchGet();
  }, []);

  const [bookData, setBookData] = useState<BookType[]>([]);
  const [selectedBookId, setSelectedBookId] = useState<number>(0);
  const [background, setBackground] = useState<boolean>(false);
  const [addSet, setAddSet] = useState<boolean>(false);
  const [isEditLanguage, setIsEditLanguage] = useState(false);
  const [isMoveClicked, setIsMoveClicked] = useState<boolean>(false);
  const [voca, setVoca] = useState<boolean>(false);

  const clickBackground = () => {
    setBookData(
      bookData.map((book) => {
        book.words.map((word) => (word.ellipsis = false));
        book.ellipsis = false;
        return book;
      })
    );
    setBackground(false);
    setAddSet(false);
    setIsEditLanguage(false);
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
          isEditLanguage={isEditLanguage}
          setIsEditLanguage={setIsEditLanguage}
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
