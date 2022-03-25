import React, { useState } from "react";
import styles from "../../scss/Words.module.scss";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import dayjs from "dayjs";

const Words = () => {
  const [voca, setVoca] = useState(false);
  const [addSet, setAddSet] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState(0);

  const [bookData, setBookData] = useState([]);

  const [nextBookId, setNextBookId] = useState(1);
  const [nextWordId, setNextWordId] = useState(1);

  const [background, setBackground] = useState(false);

  const clickBackground = () => {
    setBackground(false);
    setAddSet(false);
    setBookData(
      bookData.map((book) => {
        book.wordData.ellipsis = false;
        book.ellipsis = false;
        return book;
      })
    );
  };

  const clickStudySets = () => {
    setAddSet(true);
    setBackground(true);
  };

  const addStudySets = (language) => {
    setBookData(
      bookData.concat({
        id: nextBookId,
        language,
        date: dayjs().format("MM/DD"),
        wordData: [],
        ellipsis: false,
      })
    );
    setNextBookId(nextBookId + 1);
    setAddSet(false);
    setBackground(false);
  };

  const clickFolderEllipsis = (bookId) => {
    setBookData(
      bookData.map((book) =>
        book.id == bookId
          ? {
              ...book,
              ellipsis: true,
            }
          : book
      )
    );
    setBackground(true);
    setSelectedBookId(bookId);
  };

  const editStudySet = (bookId) => {
    setBookData(
      bookData.map((book) => {
        book.ellipsis = false;
        return book;
      })
    );
    setVoca(true);
    setBackground(false);
    setSelectedBookId(bookId);
  };

  const deleteStudySet = (bookId) => {
    setBookData(bookData.filter((book) => book.id != bookId));
    setBackground(false);
    setVoca(false);
  };

  const clickWordEllipsis = (bookId, wordId) => {
    setBookData(
      bookData.map((book) =>
        book.id == bookId
          ? {
              ...book,
              wordData: book.wordData.map((word) =>
                word.id == wordId
                  ? {
                      ...word,
                      ellipsis: true,
                    }
                  : word
              ),
            }
          : book
      )
    );
    setBackground(true);
  };

  const addWord = (bookId) => {
    setBookData(
      bookData.map((book) =>
        book.id == bookId
          ? {
              ...book,
              wordData: book.wordData.concat({
                id: nextWordId,
                term: "",
                definition: "",
                ellipsis: false,
              }),
            }
          : book
      )
    );
    setNextWordId(nextWordId + 1);
  };

  const moveWord = (bookId, wordId) => {
    setBookData(
      bookData.map((book) =>
        book.id == bookId
          ? {
              ...book,
              wordData: book.wordData.map((word) =>
                word.id == wordId
                  ? {
                      ...word,
                      ellipsis: false,
                    }
                  : word
              ),
            }
          : book
      )
    );
    setVoca(true);
    setBackground(false);
  };

  const deleteWord = (bookId, wordId) => {
    setBookData(
      bookData.map((book) =>
        book.id == bookId
          ? {
              ...book,
              wordData: book.wordData.filter((word) => word.id != wordId),
            }
          : book
      )
    );
    setBackground(false);
  };

  const putTextTerm = (e, bookId, wordId) => {
    setBookData(
      bookData.map((book) =>
        book.id == bookId
          ? {
              ...book,
              wordData: book.wordData.map((word) =>
                word.id == wordId
                  ? {
                      ...word,
                      term: e,
                    }
                  : word
              ),
            }
          : book
      )
    );
  };

  const putTextDef = (e, bookId, wordId) => {
    setBookData(
      bookData.map((book) =>
        book.id == bookId
          ? {
              ...book,
              wordData: book.wordData.map((word) =>
                word.id == wordId
                  ? {
                      ...word,
                      definition: e,
                    }
                  : word
              ),
            }
          : book
      )
    );
  };

  return (
    <div className={styles.contents}>
      {background ? (
        <div className={styles.background} onClick={clickBackground}></div>
      ) : (
        ""
      )}
      <div className={styles.studySets}>
        <div className={styles.studySetsHead}>
          <div className={styles.studySetsTitle}>My Study Sets</div>
          <button className={styles.studySetsBtn} onClick={clickStudySets}>
            +
          </button>
        </div>
        {addSet ? (
          <div className={styles.studySetsAdd}>
            <button
              className={styles.ko}
              onClick={() => addStudySets("Korean")}
            >
              Korean
            </button>
            <button
              className={styles.en}
              onClick={() => addStudySets("English")}
            >
              English
            </button>
            <button
              className={styles.zh}
              onClick={() => addStudySets("Chinese")}
            >
              Chinese
            </button>
            <button
              className={styles.de}
              onClick={() => addStudySets("German")}
            >
              German
            </button>
          </div>
        ) : (
          ""
        )}
        <div className={styles.studySetsBody}>
          {bookData.map((book) => {
            return (
              <div key={book.id} className={styles.studySetsList}>
                <button
                  className={styles.studySetsFolder}
                  onClick={() => editStudySet(book.id)}
                >
                  <div>
                    <FolderOutlinedIcon />
                  </div>
                  <div>{book.language}</div>
                  <div>{book.date}</div>
                </button>
                <button
                  className={styles.studySetsEllipsis}
                  onClick={() => clickFolderEllipsis(book.id)}
                >
                  <div>···</div>
                </button>
                {book.ellipsis ? (
                  <div className={styles.studySetsEllipsisBox}>
                    <button
                      className={styles.studySetsEdit}
                      onClick={() => editStudySet(book.id)}
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
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </div>
      <hr />
      {voca ? (
        <div className={styles.words}>
          <div className={styles.wordsHead}>
            <div className={styles.wordsTitle}>
              <div className={styles.wordsTitleName}>
                {bookData.find((book) => book.id == selectedBookId).language}{" "}
                {bookData.find((book) => book.id == selectedBookId).date}
              </div>
            </div>
            <div className={styles.wordsTitleLanguage}>
              {bookData.find((book) => book.id == selectedBookId).language}
            </div>
          </div>
          <div className={styles.wordsList}>
            <div className={styles.wordsListHead}>
              <div>Term</div>
              <div>Definition</div>
            </div>
          </div>
          <div className={styles.wordsListFolder}>folder title</div>
          {bookData
            .find((book) => book.id == selectedBookId)
            .wordData.map((word) => {
              return (
                <div key={word.id} className={styles.wordsListRow}>
                  <div className={styles.wordsListId}>{word.id}</div>
                  <textarea
                    className={styles.wordsListTerm}
                    placeholder="Write down the words"
                    onChange={(e) =>
                      putTextTerm(e.target.value, selectedBookId, word.id)
                    }
                    defaultValue={word.term}
                  ></textarea>
                  <textarea
                    className={styles.wordsListDefinition}
                    placeholder="Write down the definition"
                    onChange={(e) =>
                      putTextDef(e.target.value, selectedBookId, word.id)
                    }
                    defaultValue={word.definition}
                  ></textarea>
                  <button
                    className={styles.wordsListEllipsis}
                    onClick={() => clickWordEllipsis(selectedBookId, word.id)}
                  >
                    ···
                  </button>
                  {word.ellipsis ? (
                    <div className={styles.wordsListEllipsisBox}>
                      <button
                        className={styles.wordsListMove}
                        onClick={() => moveWord(selectedBookId, word.id)}
                      >
                        move
                      </button>
                      <button
                        className={styles.wordsListDelete}
                        onClick={() => deleteWord(selectedBookId, word.id)}
                      >
                        delete
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          <button
            className={styles.wordsAddBtn}
            onClick={() => addWord(selectedBookId)}
          >
            +
          </button>
        </div>
      ) : (
        <div className={styles.noWords}>
          Add a new vocabulary set from 'My Study Sets'.
        </div>
      )}
    </div>
  );
};

export default Words;
