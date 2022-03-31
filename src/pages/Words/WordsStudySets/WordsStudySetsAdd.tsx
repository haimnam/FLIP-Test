import React from "react";
import axios from "axios";
import { useAuth } from "../../../Store/AuthProvider.tsx";
import styles from "../../../scss/Words.module.scss";
import dayjs from "dayjs";
import { StudyFolderData } from "./StudyFolderData.tsx";

const WordsStudySetsAdd = ({
  setAddSet,
  setBackground,
  bookData,
  setBookData,
}) => {
  const { authTokens } = useAuth();
  let accessToken = authTokens.accessToken;

  const addStudySets = async (title: string, language: string) => {
    try {
      await axios.post(
        "https://test.flipnow.net/word",
        { title: title + " " + dayjs().format("MM/DD"), language },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
    try {
      const response = await axios.get("https://test.flipnow.net/word", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      let newBookData = [];
      response.data.data.map((data) => {
        newBookData.push({
          memberId: data.memberId,
          _id: data._id,
          title: data.title,
          language: data.language,
          words: data.words,
          ellipsis: false,
        });
      });
      setBookData(newBookData);
    } catch (e) {
      console.log(e);
    }
    setAddSet(false);
    setBackground(false);
  };

  return (
    <div className={styles.studySetsSelect}>
      {StudyFolderData.map((data) => {
        return (
          <button
            key={data.id}
            className={styles[data.language]}
            onClick={() => addStudySets(data.title, data.language)}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default WordsStudySetsAdd;
