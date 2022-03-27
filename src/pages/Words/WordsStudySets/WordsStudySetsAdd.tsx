import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../../scss/Words.module.scss";
import dayjs from "dayjs";
import { StudyFolderData } from "./StudyFolderData.tsx";
import { useAuth } from "../../../Store/AuthProvider.tsx";

const WordsStudySetsAdd = ({
  setAddSet,
  setBackground,
  bookData,
  setBookData,
  nextBookId,
  setNextBookId,
}) => {
  const { authTokens } = useAuth();
  let accessToken = authTokens.accessToken;

  const addStudySets = async (title: string, language: string) => {
    try {
      const response = await axios.post(
        "https://test.flipnow.net/word",
        { title: title + " " + dayjs().format("MM/DD"), language },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
    setBookData(
      bookData.concat({
        id: nextBookId,
        language: title,
        date: dayjs().format("MM/DD"),
        wordData: [],
        ellipsis: false,
      })
    );
    setNextBookId(nextBookId + 1);
    setAddSet(false);
    setBackground(false);
  };

  return (
    <div className={styles.studySetsAdd}>
      {StudyFolderData.map((data) => {
        return (
          <button
            key={data.id}
            className={styles[data.style]}
            onClick={() => addStudySets(data.studyLanguage, data.style)}
          >
            {data.studyLanguage}
          </button>
        );
      })}
    </div>
  );
};

export default WordsStudySetsAdd;
