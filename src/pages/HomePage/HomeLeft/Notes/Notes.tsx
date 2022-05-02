import React from "react";
import styles from "./Notes.module.scss";
import { NotesData } from "./NotesData.tsx";

const Notes = () => {
  return (
    <div className={styles.notes}>
      <div className={styles.notesHead}>
        <span className={styles.title}>Notes from other classmates</span>
        <span className={styles.native}>native language</span>
        <div className={styles.selected}>
          <span className={styles.selectedLang}>KOR</span>
        </div>
        <span className={styles.lang}>ENG</span>
      </div>
      {NotesData.map((note) => (
        <div key={note.id} className={styles.note}>
          <div className={styles.noteHead}>
            <div className={styles.noteHeadFrame}>
              <div className={styles.icons}>
                {note.accounts.map((account) => (
                  <div className={styles.icon}>
                    <span className={styles.initial}>{account}</span>
                  </div>
                ))}
              </div>
              <span className={styles.uploadDate}>{note.date}</span>
            </div>
            <div className={styles.noteRightFrame}>
              <span className={styles.uploadNum}>{note.num}</span>
              <img
                src={process.env.PUBLIC_URL + "/img/bookmark/bookmark.png"}
                className={styles.uploadIcon}
              />
            </div>
          </div>
          <span className={styles.word}>{note.word}</span>
        </div>
      ))}
    </div>
  );
};

export default Notes;
