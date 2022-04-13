import React, { createContext, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const instance = axios.create({
  baseURL: "https://test.flipnow.net/",
});
export const setApiToken = (token: string) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
const showError = () => {
  toast.error("Error occurred", {
    autoClose: 3000,
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const userFetcher = async (url: string) => {
  try {
    const response = await instance.get(url);
    return response.data;
  } catch (e) {
    showError();
  }
};
export const booksFetcher = async (url: string) => {
  try {
    const response = await instance.get(url);
    return response.data;
  } catch (e) {
    showError();
  }
};

export const addBook = async (title: string, language: string) => {
  try {
    await instance.post("word", { title, language });
  } catch (e) {
    showError();
  }
};
export const putBook = async (title: string, bookId: string) => {
  try {
    await instance.put(`word/book/${bookId}`, { title });
  } catch (e) {
    showError();
  }
};
export const putLanguage = async (language: string, bookId: string) => {
  try {
    await instance.put(`word/language/${bookId}`, { language });
  } catch (e) {
    showError();
  }
};
export const deleteBook = async (bookId: string) => {
  try {
    await instance.delete(`word/book/${bookId}`);
  } catch (e) {
    showError();
  }
};
export const postWord = async (bookId: string) => {
  try {
    await instance.post(`word/book/${bookId}`, {
      wordInfo: [{ text: "", meaning: "" }],
    });
  } catch (e) {
    showError();
  }
};
export const putWord = async (
  bookId: string,
  wordId: string,
  text: string,
  meaning: string
) => {
  try {
    await instance.put(`word/${bookId}/${wordId}`, {
      wordInfo: { text, meaning },
    });
  } catch (e) {
    showError();
  }
};
export const moveWord = async (
  books,
  srcBookId: string,
  desBookId: string,
  wordId: string
) => {
  const promise = [
    instance.post(`word/book/${desBookId}`, {
      wordInfo: [
        {
          text: books
            .find((book) => book._id === srcBookId)
            .words.find((word) => word._id === wordId).text,
          meaning: books
            .find((book) => book._id === srcBookId)
            .words.find((word) => word._id === wordId).meaning,
        },
      ],
    }),
    instance.delete(`word/${srcBookId}/${wordId}`),
  ];
  try {
    await Promise.all(promise);
  } catch (e) {
    showError();
  }
};
export const deleteWord = async (bookId: string, wordId: string) => {
  try {
    await instance.delete(`word/${bookId}/${wordId}`);
  } catch (e) {
    showError();
  }
};

const UserContext = createContext(null);
export const UserProvider = ({ children }) => {
  const user = useContext(UserContext);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
