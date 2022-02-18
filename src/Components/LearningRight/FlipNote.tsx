import React, { useState } from "react";
import styles from "../../scss/Learning.module.scss";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { FlipNoteData } from "./FlipNoteData.tsx";

const FlipNote = () => {
  const [language, setLanguage] = useState<string>("English");
  const [noteLanguage, setNoteLanguage] = useState<boolean>(false);

  return (
    <div>
      <div className={styles.flipNote}>
        <div>
          <h3>This Week's FLIP notes</h3>
        </div>
        <div className={styles.languageSelect}>
          <div
            className={styles.arrowCircle}
            onClick={() => {
              setLanguage("Korean");
              setNoteLanguage(true);
            }}
          >
            <ChevronLeftIcon />
          </div>
          {language}
          <div
            className={styles.arrowCircle}
            onClick={() => {
              setLanguage("English");
              setNoteLanguage(false);
            }}
          >
            <ChevronRightIcon />
          </div>
        </div>
      </div>
      <p className={styles.greyContents}>
        Check out what other people are learning in their langauge exchange!
      </p>
      <div className={styles.itemsContainer}>
        {FlipNoteData.map((note, index) => {
          return (
            <div key={index} className={styles.item}>
              <div className={styles.circle}>{note.name}</div>{" "}
              {noteLanguage ? note.ko : note.en}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlipNote;
