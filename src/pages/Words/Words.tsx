import React, { useState } from "react";
import styles from "../../scss/Words.module.scss";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import dayjs from "dayjs";

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
  const [voca, setVoca] = useState<boolean>(false);
  const [addSet, setAddSet] = useState<boolean>(false);
  const [selectedBookId, setSelectedBookId] = useState<number>(0);

  const [bookData, setBookData] = useState<BookType[]>([]);

  const [nextBookId, setNextBookId] = useState<number>(1);
  const [nextWordId, setNextWordId] = useState<number>(1);

  const [background, setBackground] = useState<boolean>(false);
  const [isMoveClicked, setIsMoveClicked] = useState<boolean>(false);

  const [isListView, setIsListView] = useState<boolean>(true);

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

  const clickStudySets = () => {
    setAddSet(true);
    setBackground(true);
  };

  const addStudySets = (language: string) => {
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

  const clickFolderEllipsis = (bookId: number) => {
    setBookData(
      bookData.map((book) =>
        book.id === bookId
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

  const editStudySet = (bookId: number) => {
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

  const deleteStudySet = (bookId: number) => {
    setBookData(bookData.filter((book) => book.id !== bookId));
    setBackground(false);
    setVoca(false);
  };

  const clickWordEllipsis = (bookId: number, wordId: number) => {
    setBookData(
      bookData.map((book) =>
        book.id === bookId
          ? {
              ...book,
              wordData: book.wordData.map((word) =>
                word.id === wordId
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

  const addWord = (bookId: number) => {
    setBookData(
      bookData.map((book) =>
        book.id === bookId
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

  const clickMove = () => {
    setIsMoveClicked(true);
  };

  const moveWord = (srcBookId: number, desBookId: number, wordId: number) => {
    console.log(bookData.find((book) => book.id === desBookId).wordData.length);
    console.log(bookData.find((book) => book.id === srcBookId).wordData);
    let newWord = {
      id: nextWordId,
      term: bookData
        .find((book) => book.id === srcBookId)
        .wordData.find((word) => word.id === wordId).term,
      definition: bookData
        .find((book) => book.id === srcBookId)
        .wordData.find((word) => word.id === wordId).definition,
      ellipsis: false,
    };
    setBookData(
      bookData.map((book) =>
        book.id === srcBookId || book.id === desBookId
          ? book.id === srcBookId
            ? {
                ...book,
                wordData: book.wordData.filter((word) => word.id !== wordId),
              }
            : book.id === desBookId
            ? {
                ...book,
                wordData: book.wordData.concat(newWord),
              }
            : book
          : book
      )
    );
    setNextWordId(nextWordId + 1);
  };

  const deleteWord = (bookId: number, wordId: number) => {
    setBookData(
      bookData.map((book) =>
        book.id === bookId
          ? {
              ...book,
              wordData: book.wordData.filter((word) => word.id !== wordId),
            }
          : book
      )
    );
    setBackground(false);
  };

  const putTextTerm = (e, bookId: number, wordId: number) => {
    setBookData(
      bookData.map((book) =>
        book.id === bookId
          ? {
              ...book,
              wordData: book.wordData.map((word) =>
                word.id === wordId
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

  const putTextDef = (e, bookId: number, wordId: number) => {
    setBookData(
      bookData.map((book) =>
        book.id === bookId
          ? {
              ...book,
              wordData: book.wordData.map((word) =>
                word.id === wordId
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
      ) : null}
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
        ) : null}
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
                ) : null}
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
                {bookData.find((book) => book.id === selectedBookId).language}{" "}
                {bookData.find((book) => book.id === selectedBookId).date}
              </div>
            </div>
            <div className={styles.wordsTitleLanguage}>
              {bookData.find((book) => book.id === selectedBookId).language}
            </div>
            <button onClick={() => setIsListView((prev) => !prev)}>
              Change View
            </button>
          </div>
          <div className={styles.wordsList}>
            <div className={styles.wordsListHead}>
              <div>Term</div>
              <div>Definition</div>
            </div>
          </div>
          {isListView ? (
            <>
              <div className={styles.wordsListView}>
                {bookData
                  .find((book) => book.id === selectedBookId)
                  .wordData.map((word, index) => {
                    return (
                      <div key={word.id} className={styles.wordsListRow}>
                        <div className={styles.wordsListId}>{index + 1}</div>
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
                          onClick={() =>
                            clickWordEllipsis(selectedBookId, word.id)
                          }
                        >
                          ···
                        </button>
                        {word.ellipsis ? (
                          <div className={styles.wordsListEllipsisBox}>
                            <button
                              className={styles.wordsListMove}
                              onClick={() => clickMove()}
                            >
                              move
                            </button>
                            {isMoveClicked ? (
                              <div className={styles.wordsListMoveScreen}>
                                <h4>Move to...</h4>
                                <span>My Study Sets</span>
                                {bookData.map((book) => {
                                  if (book.id === selectedBookId) {
                                    return (
                                      <button
                                        key={book.id}
                                        onClick={(e) =>
                                          moveWord(
                                            selectedBookId,
                                            book.id,
                                            word.id
                                          )
                                        }
                                        disabled
                                      >
                                        <FolderOutlinedIcon /> {book.language}{" "}
                                        {book.date}
                                      </button>
                                    );
                                  }
                                  return (
                                    <button
                                      key={book.id}
                                      onClick={(e) =>
                                        moveWord(
                                          selectedBookId,
                                          book.id,
                                          word.id
                                        )
                                      }
                                    >
                                      <FolderOutlinedIcon /> {book.language}{" "}
                                      {book.date}
                                    </button>
                                  );
                                })}
                              </div>
                            ) : null}
                            <button
                              className={styles.wordsListDelete}
                              onClick={() =>
                                deleteWord(selectedBookId, word.id)
                              }
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
              <button
                className={styles.wordsAddBtn}
                onClick={() => addWord(selectedBookId)}
              >
                +
              </button>
            </>
          ) : (
            <div className={styles.wordsCardView}>
              {bookData
                .find((book) => book.id === selectedBookId)
                .wordData.map((word) => {
                  return (
                    <div key={word.id} className={styles.wordsListCard}>
                      <div className={styles.wordCard}>
                        <div className={styles.wordCardTerm}>{word.term}</div>
                        <div className={styles.wordCardDefinition}>
                          {word.definition}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
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
