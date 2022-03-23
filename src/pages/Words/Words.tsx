import React, { useState } from "react";
import styles from "../../scss/Words.module.scss";
import { BookData } from "./BookData.tsx";
import { WordsData } from "./WordsData.tsx";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

const Words = () => {
  const [voca, setVoca] = useState(true);
  return (
    <div className={styles.contents}>
      <div className={styles.studySets}>
        <div className={styles.studySetsHead}>
          <div className={styles.studySetsTitle}>My Study Sets</div>
          <button className={styles.studySetsBtn}>+</button>
        </div>
        <div className={styles.studySetsBody}>
          {BookData.map((word) => {
            return (
              <div className={styles.studySetsList}>
                <button className={styles.studySetsFolder}>
                  <div>
                    <FolderOutlinedIcon />
                  </div>
                  <div>{word.language}</div>
                  <div>{word.date}</div>
                </button>
                <button className={styles.studySetsEllipsis}>
                  <div>···</div>
                </button>
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
              <div className={styles.wordsTitleName}>title name</div>
            </div>
            <div className={styles.wordsTitleLanguage}>title language</div>
          </div>
          <div className={styles.wordsList}>
            <div className={styles.wordsListHead}>
              <div>Term</div>
              <div>Definition</div>
            </div>
          </div>
          <div className={styles.wordsListFolder}>folder title</div>
          {WordsData.map((word) => {
            return (
              <div className={styles.wordsListRow}>
                <div className={styles.wordsListId}>{word.id}</div>
                <textarea
                  className={styles.wordsListTerm}
                  placeholder="Write down the words"
                ></textarea>
                <textarea
                  className={styles.wordsListDefinition}
                  placeholder="Write down the definition"
                ></textarea>
                <button className={styles.wordsListEllipsis}>···</button>
              </div>
            );
          })}
          <button className={styles.wordsAddBtn}>+</button>
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
