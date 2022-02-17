import React, { useState } from "react";
import styles from "../../scss/Learning.module.scss";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const FlipNote = () => {
  const [language, setLanguage] = useState("English");
  const [noteLanguage, setNoteLanguage] = useState(false);
  const notes = [
    { name: "OS", english: "clueless", korean: "...을 할 줄 모르는" },
    { name: "SJ", english: "obviously", korean: "분명히" },
    {
      name: "CH",
      english: "I don't think so",
      korean: "그렇게 생각하지 않는다",
    },
    { name: "HJ", english: "as opposed to", korean: "와는 대조적으로" },
    { name: "GH", english: "commitment", korean: "약속" },
    { name: "SJ", english: "compatible", korean: "양립될 수 있는" },
    { name: "YJ", english: "looking forward to it", korean: "기대하다" },
    { name: "NH", english: "reel it in", korean: "당기다" },
    {
      name: "EF",
      english: "agree to disagree",
      korean: "서로의 의견 차이를 인정하다",
    },
    {
      name: "RG",
      english: "surprise surprise",
      korean: "깜짝 놀랄 일이 있어요",
    },
    { name: "ML", english: "excuse me", korean: "실례합니다" },
  ];
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
        {notes.map((val, index) => {
          return (
            <div key={index} className={styles.item}>
              <div className={styles.circle}>{val.name}</div>{" "}
              {noteLanguage ? val.korean : val.english}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlipNote;