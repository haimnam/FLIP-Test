import React from "react";
import styles from "../../../scss/Learning.module.scss";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { FlipNoteData } from "./FlipNoteData.tsx";
import {
  useNoteLang,
  useClickLeft,
  useClickRight,
} from "../../../Store/FlipNoteContext.tsx";

const FlipNote = () => {
  let noteLang = useNoteLang();

  return (
    <div>
      <div className={styles.flipNote}>
        <div>
          <h3>This Week's FLIP notes</h3>
        </div>
        <div className={styles.languageSelect}>
          <div className={styles.arrowCircle} onClick={useClickLeft()}>
            <ChevronLeftIcon />
          </div>
          {noteLang === "ko" ? "Korean" : "English"}
          <div className={styles.arrowCircle} onClick={useClickRight()}>
            <ChevronRightIcon />
          </div>
        </div>
      </div>
      <p className={styles.greyContents}>
        Check out what other people are learning in their langauge exchange!
      </p>
      <div className={styles.itemsContainer}>
        {FlipNoteData.map((note) => {
          return (
            <div key={note.id} className={styles.item}>
              <div className={styles.circle}>{note.name}</div> {note[noteLang]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlipNote;
