import React, { useContext } from "react";
import styles from "../../scss/Learning.module.scss";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { FlipNoteData } from "./FlipNoteData.tsx";
import { NoteContext } from "../../Store/FlipNoteContext.tsx";

const FlipNote = () => {
  const {noteLanguage, clickLeft, clickRight} = useContext(NoteContext);

  function setLanguage(note, lan: string) {
    if (lan === "Korean") { return note.ko }
    else if (lan === "English") { return note.en }
  }

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
              clickLeft();
            }}
          >
            <ChevronLeftIcon />
          </div>
          {noteLanguage}
          <div
            className={styles.arrowCircle}
            onClick={() => {
              clickRight();
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
              {setLanguage(note, noteLanguage)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlipNote;
