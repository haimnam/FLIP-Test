import React from "react";
import styles from "../../../../scss/Words.module.scss";

const WordsContentsList = ({
  setBackground,
  bookData,
  setBookData,
  selectedBookId,
  word,
  index,
}) => {
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

  return (
    <React.Fragment key={index}>
      <div className={styles.wordsListId}>{index + 1}</div>
      <textarea
        className={styles.wordsListTerm}
        placeholder="Write down the words"
        onChange={(e) => putTextTerm(e.target.value, selectedBookId, word.id)}
        defaultValue={word.term}
      ></textarea>
      <textarea
        className={styles.wordsListDefinition}
        placeholder="Write down the definition"
        onChange={(e) => putTextDef(e.target.value, selectedBookId, word.id)}
        defaultValue={word.definition}
      ></textarea>
      <button
        className={styles.wordsListEllipsis}
        onClick={() => clickWordEllipsis(selectedBookId, word.id)}
      >
        ···
      </button>
    </React.Fragment>
  );
};

export default WordsContentsList;
